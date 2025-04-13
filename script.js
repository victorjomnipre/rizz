const front = document.querySelector('.frntpage');
const text = document.getElementById('myH1');
const gif = document.querySelector('.tonton_gif');
const yesBtn = document.querySelector('.Yes_btn');

const initialGifSrc = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGEzaG5leTllMjZjOGozamtxZDJudDJrMG85a2lnYmZ4a3d6ZmRibyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/bKyQb654tHDq72daXJ/giphy.gif";
const changedGifSrc = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTIxdmZlc20wZ2FicXZrdGt5N3J2NG52Z2t6NmYzcWliaTQ1ZGt6MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/8XwtXLnEKbaBwm25Bt/giphy.webp";

let isInitialState = true;

yesBtn.addEventListener("click", () => {
    if (isInitialState) {
        text.innerHTML = "You're so cute <33";
        gif.src = changedGifSrc;
        gif.classList.add('smaller');
        yesBtn.textContent = "Back";
        isInitialState = false;
    } else {
        text.innerHTML = "";
        gif.src = initialGifSrc;
        gif.classList.remove('smaller');
        yesBtn.textContent = "CLICK ME!";
        isInitialState = true;
    }
});