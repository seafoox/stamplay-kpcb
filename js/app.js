$(document).ready(function(){
   var queryString = window.location.hash
    var varArray = queryString.split("="); //eg. index.html?msg=1
    var param1 = varArray[0];
    slideNumber = 0
    if(param1=='#slide'){
      slideNumber = varArray[1];
    }
  $('.slides-kpcb').slick({
    "infinite": false,
     centerMode: false,
     arrows: false
   });
  $('.slides-kpcb').slick('slickGoTo', slideNumber);
  $('.slides-kpcb').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    window.location.hash = '#slide='+nextSlide
  });
  var algolia = algoliasearch('7TMV8F22UN', 'b5e5aa05c764aa1718bc96b793078703');
  var index = algolia.initIndex('slides');
  $('#user-search').typeahead({hint: false}, {
    source: index.ttAdapter({hitsPerPage: 8}),
    displayKey: 'page',
    templates: {
      suggestion: function(hit) {
          return '<div class="hit">' +
            '<div class="name">' +
              hit._highlightResult.page.value + ' ' +
              hit._highlightResult.text.value + ' - ' +
            '</div>' +
          '</div>';
      }
    }
  }).on('typeahead:selected', function (e, obj) {
    console.log(obj)
  });


  $('#opensearch').on('click', function(e){
    $('#searchbar').show();
    $('#search').focus()
  })

  $('#closesearch').on('click', function(e){
    $('#searchbar').hide();    
  })

}); 