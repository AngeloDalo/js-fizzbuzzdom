/**
 * stampare numeri da 1 a 100
 * multipli di 3 = Fizz
 * mulripli di 5 = buzz
 * multipli di 3 e 5 FizzBuzz
 * appendere nel container DOM numero o stringa
 */

//creare costante per il container
const container = document.querySelector('.container');
console.log(container);

for (let i=0; i<=100; i++) {
    //creazione box contenente il numero
    const element = document.createElement('div');
    element.classList.add('box');
    console.log(i);
    element.innerHTML= i;
    

    container.append(element);
}