// Oppgave 1

const list = ['a', 'b', 'c', 'd', 'e', 'f']
let last = list.length - 1; // Fordi index starter med 0

let sum = 0;
function oppgaveEn() {
    document.getElementById("oppgave1").textContent = `Første bokstaven i arrayen [${list}] er ${list[0]}`; // Får første index fordi 0 = 1
}

// Oppgave 2

function oppgaveTo() {
    document.getElementById("oppgave2").textContent = `Siste bokstaven i arrayen [${list}] er "${list[last]}"`;
}


// Oppgave 3

const listTre = [3, 66, 45];

for (let i = 0; i < listTre.length; i++) { // forsett til i = antall karakterer i listen
    sum += listTre[i]; // 
}

function oppgaveTre() {
    document.getElementById("oppgave3").textContent = `I arrayen [${listTre}] når alle tallene legges sammen er summen: ${sum}`;
}


// Oppgave 3b

const listFire = [3, 66, 45];

let result = 1;

function oppgaveTreb() {
    for (let i = 0; i < listFire.length; i++) {
        result *= listFire[i];
    }

    document.getElementById("oppgave3b").textContent = `I arrayen [${listFire}] når alle tallene multiplisert er summen: ${result}`;
}

// Oppgave 4

const animals = ["katt", "hund", "fugl", "fisk"];

let svar = animals.indexOf("fugl");

function oppgaveFire() {
    document.getElementById("oppgave4").textContent = `I arrayen [${animals}] er indeksen til fugl: ${svar}`;
}

// Oppgave 5 

const numbers = [2, 5, 8, 2, 4, 2, 9 ];

let svarFem = numbers.lastIndexOf(2);

function oppgaveFem() {
    document.getElementById("oppgave5").textContent = `I arrayen [${numbers}] er siste indeks av 2: ${svarFem}`;
}

// Oppgave 6 

const fruitsOrg = ["eple", "banan", "appelsin"];
const fruits = ["eple", "banan", "appelsin"];


function oppgaveSeksa() {
    fruits.push("druer");
    document.getElementById("oppgave6").textContent = `Arrayen [${fruitsOrg}] er nå ${fruits} etter av å legge til "druer" med "push"`;
}

// Oppgave 6b

function oppgaveSeksb() {
    fruits.pop();
    document.getElementById("oppgave6b").textContent = `Arrayen [${fruitsOrg}] er nå ${fruits} etter av å slette  det siste elementet med "pop"`;
}

// Oppgave 7

const numbersSyvOrg = [12, 5, 8, 1, 19, 3];
const numbersSyv = [12, 5, 8, 1, 19, 3];

function oppgaveSyv() {
    var resultSyv = numbersSyv.sort();
    document.getElementById("oppgave7").textContent = `Arrayen [${numbersSyvOrg}] er ${resultSyv} etter av å sortere dem med "sort"`
}

// Oppgave 8 

const listEight = [1,2,3,4,5];
const list2Eight = [0,1,2,3,4];
const resultList = [];
function oppgaveAtte() {
    for (let i = 0; i < listEight.length; i++) {
        resultList.push(listEight[i] + list2Eight[i]); // push nye verdier i den tomme array, push funker med () ikke []
    }
    document.getElementById("oppgave8").textContent = `Når vi legger sammen verdiene i [${listEight}] og [${list2Eight}] med hvert indeks er summen: ${resultList}`;

}

// Utfordring 1

const tall = [2,3,25,52]
let uSvar = "";

function En() {
    for (let i = 0; i < tall.length; i++) {
        if (tall[i] % 2 == 0) {
            uSvar += `${tall[i]} er partall, `;
        }
        else {
            uSvar += `${tall[i]} er oddetall, `;
        }
    } 
    document.getElementById("1").textContent = `I arrayen [${tall}] ${uSvar}`;
}

// Utfordring 2

function To() {
    const challengeTo = [1, 5, 3, 8, 9, 6, 11, 77, 99, 10000, 999]
    let answer = challengeTo[0]; // lager en midlertidlig variable for største tallet
    for (let i = 0; i < challengeTo.length; i++) { 
        if (challengeTo[i] > answer) { // Om den nye tallet sammenlignet med den midlertidige variable er større, da vil answer sin verdi endre til det større tallet
            answer = challengeTo[i]
        }
    }
    document.getElementById("2").textContent = `Det største tallet er ${answer}`
}

// Utfordring 3

function Tre() {
    const challengeTo = [1, 5, 3, 8, 9, 6, 11, 77, 99, 10000, 999]
    let answer = challengeTo[0]; // lager en midlertidlig variable for største tallet
    for (let i = 0; i < challengeTo.length; i++) { 
        if (challengeTo[i] > answer) { // Om den nye tallet sammenlignet med den midlertidige variable er større, da vil answer sin verdi endre til det større tallet
            answer = challengeTo[i]
        } 
        else if (answer > challengeTo[i]) {
            answer = challengeTo[i]
        }
    }
    document.getElementById("3").textContent = `Det NEST største tallet er ${answer}`
}

// Utfordring 4

function Fire() {
    const challengeTo = [8, 5, 3, 8, 9, 6, 11, 7, 99, 10000, 999, 1]
    let answer = challengeTo[0]; // lager en midlertidlig variable for største tallet
    let minst = challengeTo[1]
    for (let i = 0; i < challengeTo.length; i++) { 
        if (challengeTo[i] > answer) { // Om den nye tallet sammenlignet med den midlertidige variable er større, da vil answer sin verdi endre til det større tallet
            answer = challengeTo[i]
        } 
    }
    for (let i = 0; i < challengeTo.length; i++) {
        if (minst > challengeTo[i]) {
            minst = challengeTo[i]
        }
    }
    document.getElementById("4").textContent = `Det største tallet er ${answer} og det minste tallet er ${minst}`
}

// Utfordring 5

const challengeFem = [11, 2, 33, 4, 55, 6, 77, 88, 99, 10];

challengeFem.sort();

function Fem() {
    
}