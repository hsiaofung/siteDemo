/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-21 19:40:56
 * @version $Id$
 */
$(document).ready(function(){
    			$('.card').click(function(){    
    				var i=0;				
    				var lastNum=$('.card').length;    				
    				for(var j=0; j<lastNum; j++){
	    				i=(i+1)%7;	    				
	    				nowCard='.card' + i;									
	    				nextCard='.card'+ (i+1);
	    				$(nextCard).removeClass('card'+(i+1)).addClass('card'+ i );
    			    }
    			    $('.card:first-child').before(this);    			    
    			    $(this).removeClass('card1').addClass('card'+ lastNum);	
    			});
            });
