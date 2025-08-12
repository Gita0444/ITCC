const buttonvoteup = document.querySelector(".vote-up");
const buttonvotedown = document.querySelector(".vote-down");

const votetext = document.querySelector(".vote-count");

let num1 = 1;
let voteUpClicked = false;
let voteDownClicked = false;

votetext.innerHTML = num1;

buttonvoteup.addEventListener("click", () => {
    if (!voteUpClicked) {
        num1++;

        if (voteDownClicked) {
            num1++; // remove the previous -1
            voteDownClicked = false;
            buttonvotedown.classList.remove("nonactive");
        }

        buttonvoteup.classList.add("active");
        voteUpClicked = true;
    } else {
        num1--;
        buttonvoteup.classList.remove("active");
        voteUpClicked = false;
    }

    votetext.innerHTML = num1;
});

buttonvotedown.addEventListener("click", () => {
    if (!voteDownClicked) {
        num1--;

        if (voteUpClicked) {
            num1--; // remove the previous +1
            voteUpClicked = false;
            buttonvoteup.classList.remove("active");
        }

        buttonvotedown.classList.add("nonactive");
        voteDownClicked = true;
    } else {
        num1++;

        buttonvotedown.classList.remove("nonactive");
        voteDownClicked = false;
    }

    // Ensure count never goes below 0
    if (num1 < 0) num1 = 0;

    votetext.innerHTML = num1;
});
