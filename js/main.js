let clicks = 0;

function click(){
    clicks++;
}

function render(){
    document.getElementById('counter').innerHTML = clicks;
}