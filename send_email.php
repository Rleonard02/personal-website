<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "rleonard772@gmail.com";  // Your email address
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email";
    
    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n\n";
    $email_message .= "Message:\n$message";
    
    // Send the email
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Your message has been sent. Thank you!";
    } else {
        echo "Sorry, there was an issue sending your message. Please try again later.";
    }
} else {
    echo "Invalid request. Please submit the form.";
}
?>
