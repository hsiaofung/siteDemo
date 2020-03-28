/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-23 22:42:09
 * @version $Id$
 */
$(document).ready(function(){ 
        $('.logo a').mouseover(function(){
            $('.logo a img').attr('src','images/logo_9.gif');
        });
        $('.logo a').mouseout(function(){
            $('.logo a img').attr('src','images/logo_v3.png');
        });
    });                                  
