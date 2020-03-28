/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-22 10:07:26
 * @version $Id$
 */
 $(document).ready(function(){                                   
        $(window).scroll(function(){
            var y=$(window).scrollTop();                	
            ( y > 80) ? $('.view1').addClass('small') : $('.view1').removeClass('small');           
           
        });
    });
