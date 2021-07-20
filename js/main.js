// Chiedi all’utente il cognome

var surnameList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

console.log(surnameList);

var id_surname = prompt("Qual è il tuo cognome?");

console.log(id_surname);


// Inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

console.log(surnameList.push(id_surname));


// Stampa la lista ordinata alfabeticamente

console.log(surnameList.sort());


// Ciclo for

for (i = 1; i < surnameList.length; i++) {
    console.log()
}