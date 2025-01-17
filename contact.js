document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Sayfanın yeniden yüklenmesini engeller
        
        // Formdan verileri alıyoruz
        const firstname = document.getElementById("firstname").value;
        const surname = document.getElementById("surname").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        // Formda girilen bilgileri göstermek
        alert(Formunuzu başarıyla gönderildi!);
        
        // Formu sıfırlıyoruz
        form.reset();
    });
});