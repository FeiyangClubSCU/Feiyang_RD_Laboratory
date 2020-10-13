<?php
set_time_limit(500);
$dbh = new PDO('mysql:host=localhost;dbname=fyscu_repair', "root","", array(PDO::ATTR_PERSISTENT => true));
/*$res = $dbh->query("select * from fy_userextend");
$result_arr = $res->fetchAll();
$arr = [];
foreach ($result_arr as $key => $value) {
    $arr[] = array("cell"=>$value["phone"],"name"=>$value["name"],"reg_time"=>$value["register_time"]);
}
print_r(json_encode($arr));*/
$json_data = file_get_contents('convert.json');
$data = json_decode($json_data);
$i=0;
foreach ($data as $key => $value) {
    //print_r($value);
    //$id = randomGen(32,2);
  //$sql0 = "INSERT INTO LocalAuth (user_id, username, password) VALUES ('".$id."' ,'".$value['_account']['fyuc'][0]['u']."', '".$value['_account']['fyuc'][0]['p']."')";
  $sql1 = "UPDATE fy_user SET ucid='".$value->uid."' WHERE `ucid`='".$value->cell."'";
  //UPDATE `fy_user`.`UserInfo` SET `name`='0' WHERE  `cell`=18161274223;
  //echo($sql0."<br>"); 
  //echo($sql1."<br>");
  //$dbh->exec($sql0);
  $dbh->exec($sql1);
  echo(++$i." ");
}
unset($dbh);