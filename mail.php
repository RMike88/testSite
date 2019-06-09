<?php  
        

		
		

        $title = 'New message'; 
       
        $tele = $_POST["tele"];
		$name = $_POST["name"];

         $mess = $_POST["mess"]; 

         $message = " $tele \n $name \n  $mess";
        
        // $to - кому отправляем 
        $to = 'support@m2soft.ru'; 
        // $from - от кого 
        $from='admin@m2soft.ru'; 
        // функция, которая отправляет наше письмо
        mail($to, $title, $message, "Content-Type: text/plain; charset=utf-8\r\n". ' From:'.$from); 
        


?>