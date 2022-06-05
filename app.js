const info = []
const dinero = []
/* const subtotal = [] */
function enviarDato() {
    const dato = document.getElementById('nombres').value;
    const money = document.getElementById('cantidad').value;
    info.push(dato);
    dinero.push(parseInt(money));
    let cont = 0
    const creacionNombre = document.createElement('li');
    const subtotal = document.createElement('h3');
    for (const create of info) {
        creacionNombre.innerText = create + ": $" + dinero[cont];
        cont++
        amigos.append(creacionNombre);   
    }
    let sumaTotal = 0
    for (const sumatoria of dinero) {
        sumaTotal += sumatoria;
    }        
    subtotal.innerText = "total: $" + sumaTotal;
    total.innerText = "Total: $" + sumaTotal;
    
    totalPagar.innerText = "A cada uno le corresponde pagar: $" + sumaTotal / info.length; 
         
        
        
    
    
    }
    /* for (const createMoney of dinero ) {
        const money = document.createElement('li');
        money.innerText = createMoney;
        amigos.append(money); 
        
    } */

    
