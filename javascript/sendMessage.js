//Getting sendMessage function
function sendMessage() {
    //Data list of input
    var name = document.getElementById("name").value;
    var email = document.getElementById('email').value;
    var message = document.getElementById("message").value;

    //Output area
    var error = document.getElementById("error");
    var success = document.getElementById("success")

    if(!name || !email || !message) return error.innerHTML = "Du må fylle ut all informasjonen <br>"

    //Sjekke epost
    var epost2 = email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
    if(!epost2) {
        error.innerHTML += "Ugyldig e-post! <br>"
    }

    if(error.length) return;

    success.innerHTML = `Informasjonen er registrert! <br>Navn: ${name} <br>Email: ${email} <br>Message: ${message}`
}