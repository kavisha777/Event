document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form submission
    
    document.getElementById("message").innerText = "Form submission is prevented!";
});