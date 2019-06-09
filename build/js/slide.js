
	
	


	$(document).ready(function(){

	client_w=$(window).width();
	client_h=$(window).height();
	
	$('.wrapper').css('width',client_w+'px');
	$('.wrapper').css('height',client_h+'px');

    
   $('.btnFeed').click(function(){

    	$('.b1').css('display','none')	;
    	$('.formFeed').css('display','block');
    });

   $('.btnExit').click(function(){

    	$('.b1').css('display','block')	;
    	$('.formFeed').css('display','none');
    });

 
   	var temp=1;
    var b=true;


 // Функция для добавления обработчика событий
  function addHandler(object, event, handler) {
    if (object.addEventListener) {
      object.addEventListener(event, handler, false);
    }
    else if (object.attachEvent) {
      object.attachEvent('on' + event, handler);
    }
    else alert("Обработчик не поддерживается");
  }
  // Добавляем обработчики для разных браузеров
  addHandler(window, 'DOMMouseScroll', wheel);
  addHandler(window, 'mousewheel', wheel);
  addHandler(document, 'mousewheel', wheel);
  // Функция, обрабатывающая событие

  
  function wheel(event) {
    var delta; // Направление колёсика мыши
    event = event || window.event;
    // Opera и IE работают со свойством wheelDelta
    if (event.wheelDelta) { // В Opera и IE
      delta = event.wheelDelta / 120;
      // В Опере значение wheelDelta такое же, но с противоположным знаком
      if (window.opera) delta = -delta; // Дополнительно для Opera
    }
    else if (event.detail) { // Для Gecko
      delta = -event.detail / 3;
    }
    // Запрещаем обработку события браузером по умолчанию
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
    //alert(delta); // Выводим направление колёсика мыши
    		
         

         delta=-delta;

        // if(b==true){


         if (delta==1&&temp==3){temp=3;}
          else if (delta==1&&temp<3&&b==true){
              b=false;
              $('.b'+temp).animate({right: '+=80%'}, 1000);
          
                //$('.b'+temp).css('display','none')  ;
          
        
                // $('.b'+temp).css('display','none')  ;

               temp+=delta;
              $('.b'+temp).css('display','block') ;
               $('.b'+temp).animate({right: "+=80%", opacity:"100%"}, 1000);
               
               setTimeout (function() {b=true;}, 1000);

          }
            //}
            

          if(delta==-1&&temp==1){}
            else if (delta==-1&&temp>1&&b==true){
                  b=false;
              $('.b'+temp).animate({right: '-=80%'}, 1000);
          
                //$('.b'+temp).css('display','none')  ;
          
        
                // $('.b'+temp).css('display','none')  ;

               temp+=delta;
               //$('.b'-temp).css('display','block') ;
               $('.b'+temp).animate({right: '-=80%'}, 1000);
               setTimeout (function() {
                  b=true;
                  $('.b'+(temp+1)).css('display', 'none');}, 1000);
               

            }
        	
       //  if temp =1 && delta=-1 delta=0;
         
         //if temp = 3 && delta=1  delta=0; 



        	

    	
  }

  
  




});
