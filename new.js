const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
document.querySelector("h1").onmouseover = event => {
    let count  = 0;
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter,index) => {
            if(index < count){
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        if(count >= event.target.dataset.value.length){
            clearInterval(interval)
        }
        count += 1/3;
    },50)
}