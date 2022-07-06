// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// # MILESTONE 1
// Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
// #MILESTONE 2
// Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
// #MILESTONE 3
// In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
// #MILESTONE 4
// Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
// # BONUS
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// // recupero il bottone dal dom
const startButton = document.getElementById("start-button");

// // FUNCTIONS

function createCell(cellNumber){
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerText = cellNumber;

    return cell;
}

// creo la funzione per modificare il testo all'intyerno del bottone una volta iniziato 
function play(){
    // ? PRIMA FASE 
    // modifica testo 
    this.innerText = "Restart";

    // recupero la griglia 
    const grid = document.getElementById('grid');

    // svuoto la griglia 
    grid.innerHTML = '';

    // ? SECONDA FASE 
    let rows = 10;
    let cells = 10;
    let totalCells = rows * cells;

    // # CORE DEL PROGRAMMA
    for(let i = 1 ; i <= totalCells ; i++){
        // // GENERAZIONE CELLA 
        const cell = createCell(i);
        // cambio colore cella al click
        
        // appendo la cella alla griglia 
        grid.appendChild(cell)
    }
}
// aggancio la mia funzione ad un event listener
startButton.addEventListener('click', play);


