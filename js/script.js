var nomeUtente = prompt("Ciao, Qual'è il tuo nome?")
// console.log(nomeUtente);

var cognomeUtente = prompt("Ciao " + nomeUtente + ", Mi diresti anche il tuo Cognome?");
// console.log(cognomeUtente);

var colorPrefer = prompt(nomeUtente + " " + cognomeUtente + ", Qual'è il tuo colore preferito?")
// console.log(colorPrefer);

var password = nomeUtente + cognomeUtente + colorPrefer + "21";

document.getElementById('pass').innerHTML = password;