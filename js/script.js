/**
 * stampare numeri da 1 a 100
 * multipli di 3 = Fizz
 * multipli di 5 = buzz
 * multipli di 3 e 5 FizzBuzz
 * appendere nel container DOM numero o stringa
 */

//creare costante per il container
const container = document.querySelector('.container-number');

for (let i=1; i<=100; i++) {
    //creazione box contenente il numero
    const element = document.createElement('div');
    element.classList.add('box');
    
    if ((i%3==0) && (i%5==0)) {
        element.innerHTML= "FizzBuzz";
        element.classList.add('fizzbuzz');
    } else if (i%5==0) {
        element.innerHTML = "Buzz";
        element.classList.add('buzz');
    } else if (i%3==0) {
        element.innerHTML = "Fizz";
        element.classList.add('fizz');
    } else {
        element.innerHTML = i;
        element.classList.add('blu');
    }
    
    container.append(element);
}