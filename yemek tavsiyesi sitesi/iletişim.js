// Formu seç ve gönderme olayını dinle
console.log('Merhaba Dünya!');

    // Form verilerini al
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    //konsola yazdır
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(message);

    //işlem sonrası mesaj
    alert('Mesajınız başarıyla gönderildi!');

;