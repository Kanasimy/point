<?php
mb_internal_encoding("UTF-8");
mb_http_output('UTF-8');
//if($_SERVER["REQUEST_METHOD"] == "POST"){
    $recaptcha=$_POST['g-recaptcha-response'];
    if(!empty($recaptcha))
    {
        include("getCurlData.php");
        $google_url="https://www.google.com/recaptcha/api/siteverify";
        $secret='6LestR4UAAAAANIiFuANiEnLK3tAvPh53YkatT_k';
        $ip=$_SERVER['REMOTE_ADDR'];
        $url=$google_url."?secret=".$secret."&response=".$recaptcha."&remoteip=".$ip;
        $res=getCurlData($url);
        $res= json_decode($res, true);
        //reCaptcha введена
        if($res['success']){
            //отравка формы
            $msg='';
            $name='';
            $company='';
            $business='';
            $order='';
            $target='';
            $costs='';
            $email='';
            $name=$_POST['name'];
            $company=$_POST['company'];
            $business=$_POST['business'];
            $order=$_POST['order'];
            $target=$_POST['target'];
            $costs=$_POST['costs'];
            $email=$_POST['email'];
            $text = "<strong>Меня зовут: </strong>".$name."<br/><strong> я из компании:</strong> ".$company."<br/> <strong>Мы занимаемся: </strong>".$business."<strong> и нам бы хотелось заказать у вас: </strong>".$order."<br/> <strong>Мы уверенны, что это поможет нам:</strong> ".$target."<br/> <strong>На все это мы готовы потратить не более:</strong> ".$costs."<br/> <strong>Ваши мысли по этому поводу присылайте на e-mail:</strong> ".$email;
            $thema = 'Заявочка с сайта';
            $msg = $text;
            $mail_to = 'olga@yuzich.ru';
            //$mail_to = 'denis.shenin@gmail.com';
            $headers  =   'MIME-Version: 1.0' . "\r\n";
            $headers  .= 'Content-type: text/html;';
            if (@mail($mail_to, $thema, $msg, $headers)) {
                echo "Письмо отправлено!";
            }
            else {
                echo "Не отправлено!";
            }
        }
        else
        {
            echo "Please re-enter your reCAPTCHA.";
        }
    }
    else
    {
         echo "Please re-enter your reCAPTCHA.";
    }
//}
?>