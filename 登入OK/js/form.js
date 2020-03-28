/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-23 01:41:09
 * @version $Id$
 */
$(document).ready(function(){                                   
                $('#msg').click(function(){                	
                	var submsg=$(this).val();
                	if(submsg=='msg2'){
                		$('#submsg1').css('display','none');
                		$('#submsg2').css('display','block');
                	}else if (submsg=='msg1'){
                		$('#submsg1').css('display','block');
                		$('#submsg2').css('display','none');
                	}	                	
                });
            });
