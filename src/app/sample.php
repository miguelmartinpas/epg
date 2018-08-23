
<?php
$json = file_get_contents('http://www.movistarplus.es/programacion-tv/2018-08-23/?v=json');
$obj = json_decode($json);
echo var_dump($obj);
?>