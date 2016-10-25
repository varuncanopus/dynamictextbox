<?php
include 'config.php';


$item=$_POST['item'];
$quantity=$_POST['quantity'];
$rate=$_POST['rate'];
$amount=$_POST['amount'];
$empname=$_POST['emp'];


$length=count($quantity)-1;

$j=1;
//var_dump($_FILES);die;
for($i=0;$i<=$length;$i++)
{
   
$gender=$_POST['gender'.$j];
$imagename=$_FILES['image']['name'][$i];
$new_file_name = strtolower($_FILES['image']['tmp_name'][$i]);

$res=move_uploaded_file($_FILES['image']['tmp_name'][$i], 'uploads/'.$imagename);
   
    $sql="INSERT INTO `items` (`id`, `items`, `quantity`, `rate`,`amount`,`image`,`gender`,`employee`) VALUES (NULL, '$item[$i]', '$quantity[$i]', '$rate[$i]','$amount[$i]','$imagename','$gender','$empname[$i]')";
    mysqli_query($con, $sql);
     $j++;
}