    // Click event
    document.getElementById("clickBtn").addEventListener("click", function() {
        alert("Button clicked!");
    });

    // Focus event
    document.getElementById("nameInput").addEventListener("focus", function() {
        console.log("Input is focused");
    });

    // Blur event
    document.getElementById("nameInput").addEventListener("blur", function() {
        console.log("Input lost focus");
    });

    // Mouseover event
    document.getElementById("hoverDiv").addEventListener("mouseover", function() {
        this.style.backgroundColor = "lightgreen";
    });

    // Mouseout event
    document.getElementById("hoverDiv").addEventListener("mouseout", function() {
        this.style.backgroundColor = "lightblue";
    });

    // Keydown event
    document.addEventListener("keydown", function(event) {
        console.log(`Key pressed: ${event.key}`);
    });