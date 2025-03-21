document.getElementById("myDropdown").addEventListener("change", function() {
    document.getElementById("message").innerText = "You selected: " + this.value;
});