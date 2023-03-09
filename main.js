//-----------------------------------declaro variables-------------------------------
let rows = 3;
let columns = 3;
let fichaActual;
let otraFicha; //ficha en blanco.
let turnos = 0;
//Comento el array que tiene las img ordenadas; incluye la ficha blanca en el index 8 (img 1)
//let imgOrden =  ["9", "8", "7", "6", "5", "4", "3", "2", "1"];

//Array desordenado:
let imgOrden = ["4", "2", "8", "5", "3", "6", "7", "9", "1"];


//--------------------------------------------------------------------FUNCIONES---------------------
//la img q' va a ser arrastrada
function dragStart() {
    fichaActual = this; 
}


function dragOver(e) {
    e.preventDefault();
}


function dragEnter(e) {
    e.preventDefault();
}


function dragLeave() {

}

//cuando dejo la img
function dragDrop() {
    otraFicha = this; 
}


function dragEnd() {
    if (!otraFicha.src.includes("1.jpg")) {
        return;
    }  
 let actualCoords = fichaActual.id.split("-"); //p.e. "0-0" -> ["0", "0"]
    let r = parseInt(actualCoords[0]);
    let c = parseInt(actualCoords[1]);

    let otraCoords = otraFicha.id.split("-");
    let r2 = parseInt(otraCoords[0]);
    let c2 = parseInt(otraCoords[1]);

    let moverIzq = r == r2 && c2 == c-1;
    let moverDerecha = r == r2 && c2 == c+1;

    let moverArriba = c == c2 && r2 == r-1;
    let moverAbajo = c == c2 && r2 == r+1;

    let esAdjacente = moverIzq || moverDerecha || moverArriba || moverAbajo;

    if (esAdjacente) {
        let actualImg = fichaActual.src;
        let otraImg = otraFicha.src;

        fichaActual.src = otraImg;
        otraFicha.src = actualImg;

        turnos += 1;
        document.getElementById("turnos").innerText = turnos;                                   
    
    }
}

//-----------------------------------------------------------------------------------

window.onload = function() {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {

//---------------------------<img id="0-0" src="1.jpg"> Para la ubicación de la img
            let ficha = document.createElement("img");
            ficha.id = r.toString() + "-" + c.toString();
            ficha.src = imgOrden.shift() + ".jpg";

//-------------------------------------------DRAG-----------------------------------

            ficha.addEventListener("dragstart", dragStart);  
            ficha.addEventListener("dragover", dragOver);    
            ficha.addEventListener("dragenter", dragEnter);  
            ficha.addEventListener("dragleave", dragLeave);  
            ficha.addEventListener("drop", dragDrop);        
            ficha.addEventListener("dragend", dragEnd);      

            document.getElementById("board").append(ficha);

         }
    }
};

