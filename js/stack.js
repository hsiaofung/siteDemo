/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-21 19:40:56
 * @version $Id$
 */
$(document).ready(function(){                
    			$('.card').click(function(){    
//============= 處理卡片變成堆疊型排列, 向螢幕走的處理 =================
    				var i=0;				
    				var cards=$('.card').length;                     
    				for(var j=0; j<cards; j++){
	    				i=(i+1)%cards;
	    				var cardNode='.card'+ (i+1);
                        var preClass='card'+(i+1);
                        var nextClass='card'+ i;                        
	    				$(cardNode).removeClass(preClass).addClass(nextClass);
    			    }                    
                    $('.card:first-child').before(this);    			    
    			    $(this).removeClass('card1').addClass('card'+ cards);

//================處理文字部分, 當圖片轉換, 要印對應的文字 ===================
                    var whichImgOnClick = $(this).attr('name').charAt(3);
                    ( parseInt(whichImgOnClick) == cards ) ? whichImgOnClick = '0' : '';
                    var whichText = parseInt(whichImgOnClick) + 1;
                    $('.text').hide(); 
                    $('.text' + whichText).show();                    
    			});
            });
