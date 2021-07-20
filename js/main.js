// Chiedi all’utente il cognome

var surnameList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

console.log(surnameList);

var id_surname = prompt("Qual è il tuo cognome?");

console.log(id_surname);

console.log(surnameList.push(id_surname));

console.log(surnameList.sort());


for (i = 1; i < surnameList.length; i++) {
    console.log()
}