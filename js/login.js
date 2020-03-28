//================ 登入註冊 , 使用蓋板光箱法====================
 $(document).ready(function(){
    	$('.login').click(function(){
    		if ($('#btnLogin').val()=='登入'){
    			$('.lightbox').show();
                $('#memId').val('');
                $('#memPsw').val('');                 
    		} 
    		else if ( $('#btnLogin').val()=='登出'){
    			$('.login').attr('disabled','1');
    		}    		
    	});
    	$('#btnLogin').click(function(){
    		if(($('#memId').val() == 'tim@outlook.com' )&&( $('#memPsw').val() == '111')){
    					$('#memName').text('小方');
    					$('#btnLogin').val('登出');   			
    					$('.lightbox').hide();
    		}
    		else alert('Error');    		
    	});
    	$('#btnLoginCancel').click(function(){
    		$('.lightbox').hide();
    	});
//====================登出畫面===================    	
    	$('.login').hover(function(){
	    		if( $('#btnLogin').val()=='登出'){
	    			$('.logoutPanel').animate({right:'0px'},1000,'easeInSine');
	    		}
    		},
    		function(){	$('.logoutPanel').animate({right:'-606px'},1500,'easeOutBounce');   			
            });                	
        $('.logoutPanel').hover(function(){
            if( $('#btnLogin').val()=='登出'){
                $('.logoutPanel').stop();
                $('.logoutPanel').animate({right:'0px'},1000,'easeInSine');
            }
        },function(){
            if( $('#btnLogin').val()=='登出'){
                $('.logoutPanel').animate({right:'-606px'},1500,'easeOutBounce');
            }
        });
    	$('#btnLogout').click(function(){
            $('.logoutPanel').hide();        
            $('#memName').text('');
            $('#btnLogin').val('登入');       
        }); 

        
    });