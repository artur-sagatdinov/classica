<?php
    $name = $_POST["name"];
    $org = $_POST["org"];
    $email = $_POST["email"];
    $contact = $_POST["contact"];
    $text = $_POST["text"];

    $arr = array (
        'Имя: ' => $name,
        'Организация: ' => $org,
        'Почта: ' => $email,
        'Тел. / @: ' => $contact,
        'Сообщение: ' => $text
    );

    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    }

    $token = "6431164995:AAH-_hBYFW5tvtxRt_zKg8msFJXHsLbYUSc";
    $channel_id = "-4089168791";

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$channel_id}&parse_mode=html&text={$txt}","r");
?>