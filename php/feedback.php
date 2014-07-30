<!DOCTYPE html>
<html>
<head>
  <title>Portfolio | Geoff Davis</title>

  <script src="../js/header.js" type="text/javascript"></script>
  <script src="../js/footer.js" type="text/javascript"></script>
  <script src="../js/ico.js" type="text/javascript"></script>

  <link href="../styles/main.css" rel="stylesheet" type="text/css">
</head>
<body>
  <div id="content">
  <?php
       // from the form
       $name = trim(strip_tags($_POST['name']));
       $email = trim(strip_tags($_POST['email']));
       $message = htmlentities($_POST['message']);

       // set here
       $subject = "Contact form submitted!";
       $to = 'geoffdavis92@gmail.com';

       $body = <<<HTML
  $message
  HTML;

       $headers = "From: $email\r\n";
       $headers .= "Content-type: text/html\r\n";

       // send the email
       mail($to, $subject, $body, $headers);

       // redirect afterwords, if needed
       header('Location: thanks.html');
  ?>
</div>
</body>
</html>
