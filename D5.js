/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
console.log("----Esercizio 1----");
for (let i = 0; i < pets.length; i++) {
  console.log(`Animale ${i + 1}: ${pets[i]}`);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("----Esercizio 2----");
pets.sort();
for (let i = 0; i < pets.length; i++) {
  console.log(`Animale ${i + 1}: ${pets[i]}`);
}

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("----Esercizio 3----");
for (let i = pets.length - 1; i >= 0; i--) {
  console.log(`Animale ${i + 1}: ${pets[i]}`);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("----Esercizio 4----");
pets.push(pets[0]);
pets.shift();
for (let i = 0; i < pets.length; i++) {
  console.log(`Animale ${i + 1}: ${pets[i]}`);
}
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
console.log("----Esercizio 5----");
cars[0].licensePlate = "AA 000 BB";
cars[1].licensePlate = "CC 000 DD";
cars[2].licensePlate = "EE 000 FF";
for (let i = 0; i < cars.length; i++) {
  console.log(`Auto ${i + 1} License Plate: ${cars[i].licensePlate}`);
}
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("----Esercizio 6----");
const auto = {
  brand: "Ferrari",
  model: "458",
  color: "red",
  trims: ["titanium", "st", "active"],
};
cars.push(auto);
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
for (let i = 0; i < cars.length; i++) {
  console.log(`Auto ${i + 1} Trims:`);
  for (let j = 0; j < cars[i].trims.length; j++) {
    console.log(cars[i].trims[j]);
  }
}
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
console.log("----Esercizio 7----");
for (let i = 0; i < cars.length; i++) {
  justTrims[i] = cars[i].trims[0];
}
console.log("Lista Trims: ");
for (let i = 0; i < justTrims.length; i++) {
  console.log(justTrims[i]);
}
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log("----Esercizio 8----");
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0] === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
console.log("----Esercizio 9----");
let cont = 0,
  found = 0;
while (cont < numericArray.length && found === 0) {
  console.log(numericArray[cont]);
  if (numericArray[cont] === 32) {
    found = 1;
  } else {
    cont++;
  }
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d", "y", "k", "s"];
console.log("----Esercizio 10----");
let pos = [],
  pos1 = [];
for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a": {
      pos.push(1);
      console.log(`${charactersArray[i]} = 1`);
      break;
    }
    case "b": {
      pos.push(2);
      console.log(`${charactersArray[i]} = 2`);
      break;
    }
    case "c": {
      pos.push(3);
      console.log(`${charactersArray[i]} = 3`);
      break;
    }
    case "d": {
      pos.push(4);
      console.log(`${charactersArray[i]} = 4`);
      break;
    }
    case "e": {
      pos.push(5);
      console.log(`${charactersArray[i]} = 5`);
      break;
    }
    case "f": {
      pos.push(6);
      console.log(`${charactersArray[i]} = 6`);
      break;
    }
    case "g": {
      pos.push(7);
      console.log(`${charactersArray[i]} = 7`);
      break;
    }
    case "h": {
      pos.push(8);
      console.log(`${charactersArray[i]} = 8`);
      break;
    }
    case "i": {
      pos.push(9);
      console.log(`${charactersArray[i]} = 9`);
      break;
    }
    case "l": {
      pos.push(10);
      console.log(`${charactersArray[i]} = 10`);
      break;
    }
    case "m": {
      pos.push(11);
      console.log(`${charactersArray[i]} = 11`);
      break;
    }
    case "n": {
      pos.push(12);
      console.log(`${charactersArray[i]} = 12`);
      break;
    }
    case "o": {
      pos.push(13);
      console.log(`${charactersArray[i]} = 13`);
      break;
    }
    case "p": {
      pos.push(14);
      console.log(`${charactersArray[i]} = 14`);
      break;
    }
    case "q": {
      pos.push(15);
      console.log(`${charactersArray[i]} = 15`);
      break;
    }
    case "r": {
      pos.push(16);
      console.log(`${charactersArray[i]} = 16`);
      break;
    }
    case "s": {
      pos.push(17);
      console.log(`${charactersArray[i]} = 17`);
      break;
    }
    case "t": {
      pos.push(18);
      console.log(`${charactersArray[i]} = 18`);
      break;
    }
    case "u": {
      pos.push(19);
      console.log(`${charactersArray[i]} = 19`);
      break;
    }
    case "v": {
      pos.push(20);
      console.log(`${charactersArray[i]} = 20`);
      break;
    }
    case "z": {
      pos.push(21);
      console.log(`${charactersArray[i]} = 21`);
      break;
    }
    default: {
      console.log(`${charactersArray[i]} non fa parte dell'alfabeto italiano`);
    }
  }
}
console.log(pos);

//Soluzione alternativa
console.log("----Soluzione alternativa----");
for (let i = 0; i < charactersArray.length; i++) {
  let appoggio = charactersArray[i].toUpperCase();
  let x = appoggio.charCodeAt(0);
  if (x === 74 || x === 75 || x === 87 || x === 88 || x === 89) {
    console.log(`Carattere ${charactersArray[i]} non è presente nell'alfabeto italiano`);
  } else if (x < 74) {
    pos1.push(x - 64);
    console.log(`Carattere ${charactersArray[i]} posizione ${x - 64}`);
  } else if (x > 75 && x < 87) {
    pos1.push(x - 66);
    console.log(`Carattere ${charactersArray[i]} posizione ${x - 66}`);
  } else if (x > 89) {
    pos1.push(x - 69);
    console.log(`Carattere ${charactersArray[i]} posizione ${x - 69}`);
  }
}
console.log(pos1);
