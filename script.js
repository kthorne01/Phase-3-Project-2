const form = document.getElementById("form")

form.addEventListener('submit', (event) => {

    event.preventDefault();


    document.getElementById("namevalue").innerText = form.elements['name'].value;
    document.getElementById("emailvalue").innerText = form.elements['email'].value;
    document.getElementById("datevalue").innerText = form.elements['date'].value;
    document.getElementById("bodyinputvalue").innerText = form.elements['body_input'].value;
    document.getElementById("colorvalue").innerText = form.elements['color'].value;
    document.getElementById("checkboxvalue").innerText = form.elements['checkbox'].value;
    document.getElementById("webvalue").innerText = form.elements['fav_language'].value;
});