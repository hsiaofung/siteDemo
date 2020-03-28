/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-19 21:14:18
 * @version $Id$
 */

$(document).ready(function(){									
				var timerId = setInterval( imgSwitch , 7000);				
				$('#img1').fadeOut(12000);
				$('#img1').addClass('zoom');
				var i=0;				
				function imgSwitch(){										
					i=(i+1)%5;					
					nowImg='#img'+i;					
					if(nowImg=='#img4'){
						nextImg='#img'+ 1;
						i=0;
					}
					else{
					    nextImg='#img'+(i+1);
					}					
					$(nowImg).fadeOut(7000);									
					$(nextImg).fadeTo(7000,1);
					$(nextImg).addClass('zoom');
				}

			});