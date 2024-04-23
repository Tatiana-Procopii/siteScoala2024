
/* initializare elemente din galerie sa fie clickabile*/
new SimpleLightbox({ elements: ".galerie-container a" });
new SimpleLightbox({ elements: ".orar-imagini a" });


AOS.init({ once: true });

function mobileMenu() {
    var x = document.getElementById("navbar");

    if (x.className === "") {
        x.className = "mobile";
    } else {
        x.className = "";
    }
}

/* conectarea cu emailjs*/
emailjs.init("x13vFl7vwZ5snLa0j");

function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_sbh6tbs", "template_x9h8tzk", date)
        .then(function (raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function (error) {
            alert("Eroare la transmitere. Contactati programatorul.")
        })

}