(function(){
    function makeZoomable(gallery){

      $(gallery).find('img').on('click', function() {
        var adressSmall=$(this).attr("src");
        var bigImageSrc = adressSmall.replace('/small/', "/large/");
        var BigContainer= $('<div class="ContainerBigImage"><div class="imageHolder"><a href="javascript:;" class="close">x</a></div></div>')
        .css({
          'background': 'rgba(0,0,0,0.5)',
          width: '100%',
          height: '100%',
          position: 'fixed',
          'z-index': 10,
          top: 0,
          left: 0
        })

        .appendTo(document.body);

        var img = new Image;
        img.onload = function(){
         $('.imageHolder').append(img);
          centerImage(this);
        };
        img.src = bigImageSrc;

        $(window).resize(function(){
        centerImage(this);
        });


        $('.close').on('click', function() {
          $('.ContainerBigImage').remove();
        } )

        $(document).on('keyup', function(event) {
                if (event.keyCode == 27){
                    $('.ContainerBigImage').remove(); }
        });
    });


    function centerImage(SomeObj){
      var $el = $(SomeObj);
      var BigWindowHeight=$(window).height();
      var BigWindowWidth=$(window).width();

      var Imgwidth = $el.width();
      var Imgheight = $el.height();


    if(Imgheight/BigWindowHeight>0.8||Imgwidth/BigWindowWidth>0.8) {
      Imgwidth=BigWindowWidth*0.7;
      Imgheight=BigWindowHeight*0.7;    
    }
      $el.css({
        'position':'fixed',
        'width': Imgwidth,
      
        'left':'50%',
        'margin-left':-Imgwidth/2,
        'top':'50%',
        'margin-top':-Imgheight/2
      });
    }
  }
      window.makeZoomable = makeZoomable;
}());