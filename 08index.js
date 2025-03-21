let box = document.getElementById("myButton");

        
        box.addEventListener("mouseover", function() {
            box.style.backgroundColor = "red";
        });

       
        box.addEventListener("mouseout", function() {
            box.style.backgroundColor = "blue";
        });