<?php

$name = $_GET['name'];
$sexs = $_GET['sexs'];
$leve = $_GET['leve'];
$majo = $_GET['majo'];
$pnum = $_GET['pnum'];
$email = $_GET['email'];
$text = $_GET['text'];

$name = str_replace("\"","'",$name);
$sexs = str_replace("\"","'",$sexs);
$leve = str_replace("\"","'",$leve);
$majo = str_replace("\"","'",$majo);
$pnum = str_replace("\"","'",$pnum);
$email = str_replace("\"","'",$email);
$text = str_replace("\"","'",$text);


$data = 
   "\"".$name."\","
  ."\"".$sexs."\","
  ."\"".$leve."\","
  ."\"".$majo."\","
  ."\"".$pnum."\","
  ."\"".$email."\","
  ."\"".$text."\""
  ."\r\n";

$file = fopen("data_data.csv", "a+");

while(true){
if(flock($file, LOCK_EX)){
  fwrite($file, 
         mb_convert_encoding($data,
                             'UTF-8',
                             mb_detect_encoding($data) ) );
  fflush($file);            // flush output before releasing the lock
  flock($file, LOCK_UN);    // 释放锁定
  break;
  }
}
fclose($file);
exit;
?>