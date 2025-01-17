<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = htmlspecialchars($_POST['firstname']);
    $surname = htmlspecialchars($_POST['surname']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    
    $to = "ebrar333y@gmail.com"; 
    $subject = "Yeni İletişim Formu Mesajı";
    $body = "Ad: $firstname $surname\n";
    $body .= "E-posta: $email\n\n";
    $body .= "Mesaj:\n$message\n";
    $headers = "From: $email";


    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Mesajınız başarıyla gönderildi.'); window.location.href = 'index.html';</script>";
    } else {
        echo "<script>alert('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'); window.history.back();</script>";
    }
} else {
    echo "<script>alert('Geçersiz istek.'); window.location.href = 'index.html';</script>";
}
?>