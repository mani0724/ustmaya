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

if(isset($_POST['submit']))
{
$name=$_POST['fname'];
$email=$_POST['email'];
$number=$_POST['number'];
$city=$_POST['city'];
$months=$_POST['months'];
$day=$_POST['day'];
$Date=$_POST['Date'];
$message=$_POST['message'];
}
//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'utsmaya.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'contact@utsmaya.com';                     //SMTP username
    $mail->Password   = 'contact!@***';                               //SMTP password
    $mail->SMTPSecure = "ssl";            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('manikandanmani69931@gmail.com', 'UTSMAYA');
    $mail->addAddress('manikandanmani69931@gmail.com');     //Add a recipient
   

    

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Contact Us';
    $mail->Body    = "Name: $name <br> Email: $email <br> Number: $number <br> months: $months <br> days: $day <br> city: $city <br> Date: $Date <br> message: $message";
   

    $mail->send();
    echo "<script> alert('Message has been sent')</script>";
} catch (Exception $e) {
    echo "<script> alert('Message could not be sent. Mailer Error: {$mail->ErrorInfo}')</script>";
}