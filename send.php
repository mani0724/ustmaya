<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require('PHPMailer/Exception.php');
require('PHPMailer/SMTP.php');
require('PHPMailer/PHPMailer.php');

if(isset($_POST['Login']))
{
$name=$_POST['fname'];
$email=$_POST['email'];
$number=$_POST['number'];
$city=$_POST['city'];
$months=$_POST['months'];
$day=$_POST['day'];
$Date=$_POST['Date'];
}
//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'mani072409@gmail.com';                     //SMTP username
    $mail->Password   = 'icanzjnrlksucmdj';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('mani072409@gmail.com', 'UTSMAYA');
    $mail->addAddress('mani072409@gmail.com');     //Add a recipient
   

    

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Contact Us';
    $mail->Body    = "Name: $name <br> Email: $email <br> Number: $number <br> months: $months <br> days: $day <br> city: $city <br> Date: $Date";
   

    $mail->send();
    echo "<script> alert('Message has been sent')</script>";
} catch (Exception $e) {
    echo "<script> alert('Message could not be sent. Mailer Error: {$mail->ErrorInfo}')</script>";
}