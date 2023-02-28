const cups = document.querySelectorAll('.cup-standard');
const drunk = document.querySelector('.drunk');
let amountDrunk = 0;

// Check to see if any of the cups are clicked.
// If it is then fill up all the previous bottles by calling fillPreviousCups
cups.forEach(cup => {
    cup.addEventListener('click', () => {
        cup.classList.add('filled');
        updateAmountDrunk(cup);
        fillPreviousCups(amountDrunk);
        updateBigCup();
    }, {once:true});
})

function updateAmountDrunk(cup) {

    const drunk = +(cup.getAttribute('data-volume'))
    if(drunk>amountDrunk) {
        amountDrunk = drunk;
    } else {

    }
}

function fillPreviousCups(amountDrunk) {
    // Compare the data-volume of each cup to the amountDrunk paramater.
    // If the data-volume of a cup is less than amountDrunk, that cup should be filled.
    cups.forEach(cup => {
        if(+(cup.getAttribute('data-volume'))<+amountDrunk) {
            cup.classList.add('filled');
        } else {
            // do nothing
        }
    })
}

function updateBigCup() {

    const amountRemaining = document.getElementById("amountRemaining"); // This is the h3 text

    const cupsDrunk = amountDrunk / 250;
    const cupsDrunkArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const cupsDrunkClassNameArray = ['one-drunk', 'two-drunk', 'three-drunk', 'four-drunk', 'five-drunk', 'six-drunk', 'seven-drunk', 'eight-drunk'];
    const amountRemainingArray = ['1.75L', '1.5L', '1.25L', '1L', '0.75L', '0.5L', '0.25L', 'No Water'];

    // Add correct classes to the big cup
    for(let i=0; i<8; i++) {
        if(cupsDrunk===cupsDrunkArray[i]) {
            drunk.classList.add(`${cupsDrunkClassNameArray[i]}`);
            amountRemaining.innerHTML = `${amountRemainingArray[i]}`;
            drunk.classList.remove('round-border');
        } else {
            drunk.classList.remove(`${cupsDrunkClassNameArray[i]}`)
        }
    }

}