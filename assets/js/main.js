/* Data una lista della spesa, 
stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while */

//selezione l'elemento container dal DOM e lo assegno ad una variabile
const containerEl = document.querySelector('.container');

//creo nel DOM un elemento ul
const listEl = document.createElement('ul');

// appendo al container l'elemento ul creato
containerEl.append(listEl);

// creo un array con la lista della spesa
const groceryList = [
    '2 bananas',
    '1 pack strawberrys',
    '1 pack of almond milk',
    '1 pack of coffee caps',
    '2 packs of pasta',
    '3 pieces of bread',
    '1 soap bottle',
]

// creo un while loop che cicli lungo l'array
let i = 0;
while (i < groceryList.length) {
    //definisco in una variabile ogni singolo componente dell'array
    const groceryItem = groceryList[i];
    //creo nel DOM un elemento li
    const listItem = document.createElement('li');
    //per ogni elemento li aggiungo al suo interno un componente dell'array
    listItem.innerHTML = `${groceryItem}`;
    // appendo all'elemento ul gli elementi li creati
    listEl.append(listItem)

    //incremento per iterare il loop
    i++
} 