//-----------------------------------declaro variables-------------------------------
let rows = 3;
let columns = 3;
let fichaActual;
let otraFicha; //ficha en blanco.
let turnos = 0;
//orden de cada img. Ver si las coloqué bien
//let imgOrden =  ["3", "2", "1", "6", "5", "4", "9", "8", "7"];
let imgOrden =  ["9", "8", "7", "6", "5", "4", "3", "2", "1"];

//-----------------------------------------------------------------------------------

window.onload = function() {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {

//---------------------------<img id="0-0" src="1.jpg"> Para la ubicación de la img
            let ficha = document.createElement("img");
            ficha.id = r.toString() + "-" + c.toString();
            ficha.src = imgOrden.shift() + ".jpg";

            document.getElementById("board").append(ficha);

//--------------------------------------------DRAG 
           

            

        }
    }
};

