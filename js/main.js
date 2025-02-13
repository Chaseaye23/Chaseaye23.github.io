let counter = 0;
let clickValue = 1;

document.addEventListener("DOMContentLoaded", function () {
    
    const clickButton = document.getElementById("clickButton");
    const counterLabel = document.getElementById("counter");
    const upgradePlusOne =  document.getElementById("upgradePlusOne") //button to add 1 value per click
    const clickValueLabel =  document.getElementById("clickValue") //displays click value

    clickButton.textContent = "Click me";
    upgradePlusOne.textContent = "Increase Click Value";
    counterLabel.textContent = `Counter: ${counter}`;
    clickValueLabel.textContent = `Click Value: ${clickValue}`;

    clickButton.addEventListener("click", function () {
        counter += clickValue;
        counterLabel.textContent = `Counter: ${counter}`;
    });

    upgradePlusOne.addEventListener("click", function () {
        clickValue++;
        clickValueLabel.textContent = `Click Value: ${clickValue}`;
    });


});

function test(){
    console.log("success");
}
