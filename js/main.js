let counter = 0;

document.addEventListener("DOMContentLoaded", function () {
    
    const clickButton = document.getElementById("clickButton");
    const counterLabel = document.getElementById("counter");

    clickButton.textContent = "Click me";
    counterLabel.textContent = `Counter: ${counter}`;

    clickButton.addEventListener("click", function () {
        counter++;
        counterLabel.textContent = `Counter: ${counter}`;
    });
    

    document.body.appendChild(counterLabel);
    document.body.appendChild(clickButton);
});

function test(){
    console.log("success");
}
