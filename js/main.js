let counter = 0;
let clickValue = 1;

document.addEventListener("DOMContentLoaded", function () {
    
    const clickButton = document.getElementById("clickButton");
    const counterLabel = document.getElementById("counter");
    const upgradePlusOne =  document.getElementById("upgradePlusOne")
    const clickValueLabel =  document.getElementById("clickValue")

    clickButton.textContent = "Click me";
    upgradePlusOne.textContent = "Increase Click Value";
    counterLabel.textContent = `Counter: ${counter}`;
    clickValueLabel.textContent = `Click Value: ${clickValue}`;

    clickButton.addEventListener("click", function () {
        counter = counter + clickValue;
        counterLabel.textContent = `Counter: ${counter}`;
    });

    clickValueLabel.addEventListener("click", function () {
        clickValue++;
        clickValueLabel.textContent = `Click Value: ${clickValue}`;
    });

    document.body.appendChild(counterLabel);
    document.body.appendChild(clickButton);
    document.body.appendChild(upgradePlusOne);
    document.body.appendChild(clickValueLabel);
});

function test(){
    console.log("success");
}
