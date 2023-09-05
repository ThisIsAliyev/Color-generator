function randomColor() {
    let numb = Math.floor((Math.random()*10000000)).toString(16);
    document.querySelector('body').style.backgroundColor = `#${numb}`;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Space'){
        randomColor();
    } else {
        return;
    }
})