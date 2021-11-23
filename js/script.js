/**
 * stampare numeri da 1 a 100
 * multipli di 3 = Fizz
 * mulripli di 5 = buzz
 * multipli di 3 e 5 FizzBuzz
 * appendere nel container DOM numero o stringa
 */

//creare costante per il container
const container = document.querySelector('.container');

for (let i=1; i<=100; i++) {
    //creazione box contenente il numero
    const element = document.createElement('div');
    element.classList.add('box');
    
    //if
    if ((i%3==0) && (i%5==0)) {
        element.innerHTML= "FizzBuzz";
    } else if (i%5==0) {
        element.innerHTML = "Buzz";
    } else if (i%3==0) {
        element.innerHTML = "Fizz";
    } else {
        element.innerHTML = i;
    }
    
    
    //element.innerHTML= i;
    container.append(element);
}