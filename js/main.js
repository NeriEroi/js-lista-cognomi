// Chiedi all’utente il cognome

var id_surname = prompt("Qual è il tuo cognome?");

console.log(id_surname);


// Inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

var surnameList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
console.log(surnameList);


var id_surname_up = id_surname.charAt(0).toUpperCase() + id_surname.slice(1).toLowerCase


surnameList.push(id_surname_up);
console.log(surnameList)


// Stampa la lista ordinata alfabeticamente

console.log(surnameList.sort());


// Ciclo while

var i = 1

while (i < surnameList.length) {

    console.log(surnameList.indexOf(id_surname_up))

    i++
}

