
$(document).ready(function(){
  var queryString = window.location.hash
  var varArray = queryString.split("="); //eg. index.html?msg=1
  var param1 = varArray[0];
  slideNumber = 0
  if(param1=='#!slide'){
    slideNumber = varArray[1];
    currentUrl = 'https://www.internet-trends.org#!slide='+slideNumber;
  }

  $('.slides-kpcb').slick({
    "infinite": false,
    lazyLoad: 'ondemand',
     centerMode: false,
     arrows: true
   });
  $('.slides-kpcb').slick('slickGoTo', slideNumber);
  $('.slides-kpcb').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    slideNumber = nextSlide;
    currentUrl = 'https://www.internet-trends.org#!slide='+slideNumber;
    DISQUS.reset({
      reload: true,
      config: function () {  
        this.page.identifier = 'slide'+nextSlide; 
        this.page.url = currentUrl;
      }
    });
    window.location.hash = '#!slide='+nextSlide
  });

  var algolia = algoliasearch('7TMV8F22UN', 'b5e5aa05c764aa1718bc96b793078703');
  var index = algolia.initIndex('slides');
  $('#search').typeahead({hint: false}, {
    source: index.ttAdapter({hitsPerPage: 5}),
    displayKey: 'text',
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
    $('.slides-kpcb').slick('slickGoTo', parseInt(obj.page)-1);
    $('#searchbar').hide(); 
    $('#search').val('')
  });

  $('#opensearch').on('click', function(e){
    $('#searchbar').show();
    $('#search').val('')
    $('#search').focus()
  })

  $('#closesearch').on('click', function(e){
    $('#searchbar').hide(); 
    $('#search').val('')
  })

  function popupwindow(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  } 

  $('#fbshare').on('click', function(e){    
    picToShare = 'https://www.internet-trends.org'+$('.slick-active img').attr('src').substr(1);
    FB.ui({
      method: 'share_open_graph',
      action_type: 'og.likes',
      action_properties: JSON.stringify({
        object: currentUrl,
        image: picToShare
      })
    }, function(response){});
  })
  
  $('#twittershare').on('click', function(e){     
    popupwindow('https://twitter.com/intent/tweet?text=Comment%20and%20Share%20@kpcb%202015%20Internet%20Trends%20via%20@stamplay%20#InternetTrends&related=stamplay&url='+currentUrl,'Twitter',800,300)
  })
  $('#linkedinshare').on('click', function(e){     
    var title = 'kpcb2015';
    var source = 'Stamplay';
    popupwindow('https://www.linkedin.com/shareArticle?mini=true&url='+currentUrl+'&title='+title+'&summary=Comment%20and%20Share%20@kpcb%202015%20Internet%20Trends%20via%20@stamplay%20#InternetTrends&source='+source, 'Linkedin' ,800,450)
  })

}); 