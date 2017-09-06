        $(document).ready(function(){
            $('#wrapper').fadeIn(1300);
        });
        $(".about-button").click(function (){
            $(".index-page").fadeOut('slow', function(){
               $(".about-page").fadeIn('slow'); 
            });
        });
        
        $(".return-homepage-button-about").click(function (){
            $(".about-page").fadeOut('slow', function(){
                $(".index-page").fadeIn('slow');
            });
        });
        
        $(".portfolio-button").click(function(){
            $(".index-page").fadeOut('slow', function() {
                $(".portfolio-page").fadeIn('slow');
            });
        });
        
        $(".return-homepage-button-portfolio").click(function (){
            $(".portfolio-page").fadeOut('slow', function(){
                $(".index-page").fadeIn('slow');
            });
        });
        $(".resume-button").click(function(){
            window.location.href='http://bryan-tran.com/assets/current-resume.pdf';
        });