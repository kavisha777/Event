document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let name = document.getElementById("name").value;
    
    if (name.trim() !== "") {
        document.getElementById("message").innerText = "Form submitted successfully! Hello, " + name + "!";
    } else {
        document.getElementById("message").innerText = "Please enter your name before submitting.";
    }
});