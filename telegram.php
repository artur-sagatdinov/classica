<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $text = $_POST["text"];
    
    $arr = array(
        'Имя: ' => $name,
        'Email' => $email,
        'Сообщение:' => $text
    );
      
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };
    
    
    
    $token = "5958377481:AAHMYsvTZj3OO-2DzoKfqlLLdqErJKSCYqo";
    $chat_id = "-977633040";
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>
