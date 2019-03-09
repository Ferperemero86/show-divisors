const shuffleButton = document.querySelector('.shuffle');
            
            
let modifyDivisorsBackgroundStyles = (randomNumber, hightlights) => {
    let elements = document.getElementsByClassName('number-element-list');
    let divisors = [];
    
    //Store divisors in an array.
    for (let i=0; i<randomNumber; i++) {
        if (randomNumber % i=== 0) {
           divisors.push(i.toString()); 
        }
    }
    
    //Loop classes and divisors, compare them and higlight matches.
    for (let a=0; a < elements.length; a++) {

        for (let b=0; b < divisors.length; b++) {
            if (elements[a].innerHTML === divisors[b]) {
                if (hightlights === 'true') {
                    elements[a].classList.add('black-background');
                }
                if (hightlights === 'false') {
                    elements[a].classList.remove('black-background');
                }
            }
        }
    
    }
}

let shuffle = () => {

    const listElements = document.querySelectorAll('.number-element-list');
    const numbersList = document.querySelector('.numbers-list');
    
    let randomNumber = () => { return Math.floor(Math.random() * 100) + 1 };
    let uniqueNumbers = [];
    
    //Loop and push random unique values in array.
    for (let i=0; i<100; i++) {
        let ranNumber = randomNumber();

        while (uniqueNumbers.indexOf(ranNumber) !== -1) {
            ranNumber = randomNumber();
        }
        if (uniqueNumbers.indexOf(ranNumber) === -1) {
            uniqueNumbers.push(ranNumber);
        }
    }

    //If the elements list has already list elements delete them.
    if (listElements) {
        for (let i=0; i<listElements.length; i++) {
            listElements[i].remove();
        }
    }


    //Display random values.
    for (let i=0; i<uniqueNumbers.length; i++) {
        const randomNumberNode = document.createTextNode(uniqueNumbers[i]); 
        const li = document.createElement('LI');
    
        numbersList.appendChild(li);
        li.classList.add('number-element-list');
        li.appendChild(randomNumberNode);
    
        li.addEventListener('mouseover', () => {
            modifyDivisorsBackgroundStyles(uniqueNumbers[i], 'true');
        })
    
        li.addEventListener('mouseout', () => {
            modifyDivisorsBackgroundStyles(uniqueNumbers[i], 'false');
        })
    }
}


window.addEventListener('load', () => {
    shuffle();
})

shuffleButton.addEventListener('click', () => {
    shuffle();
})