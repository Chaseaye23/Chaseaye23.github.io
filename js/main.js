document.addEventListener("DOMContentLoaded", function () {
    let counter = 0;
    const button = document.getElementById("button");
    const display = document.getElementById("counter");

    button.textContent = "Click me";
    display.textContent = `Counter: ${counter}`;

    button.addEventListener("click", function () {
        counter++;
        display.textContent = `Counter: ${counter}`;
    });

    document.body.appendChild(display);
    document.body.appendChild(button);
});

function test(){
    console.log("success");
}