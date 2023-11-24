// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.


// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const members = [
    { name : 'Wayne Barnett',  ruolo: 'Founder & CEO',  foto: 'wayne-barnett-founder-ceo.jpg' },
    { name : 'Angela Caroll',  ruolo: 'Chief Editor',  foto: 'angela-caroll-chief-editor.jpg' },
    { name : 'Walter Gordon	',  ruolo: 'Office Manager',  foto: 'walter-gordon-office-manager.jpg' },
    { name : 'Angela Lopez',  ruolo: 'Social Media Manager',  foto: 'angela-lopez-social-media-manager.jpg' },
    { name : 'Scott Estrada',  ruolo: 'Developer',  foto: 'scott-estrada-developer.jpg' },
    { name : 'Barbara Ramos',  ruolo: 'Graphic Designer',  foto: 'barbara-ramos-graphic-designer.jpg' },
];

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva


const pica = document.querySelector('#testimg')

pica.innerHTML =  `<img src="img/${members[0].foto}" alt="">`;






// MILESTONE 1:
// Stampare su console, per ogni membro del team,
// le informazioni di nome,ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

const parentList = document.getElementById("team");

for (var i = 0; i < members.length; i++) {
    // Stampare su console,
    console.log("Name: " + members[i].name + " Ruler: " + members[i].ruolo + " Foto: " + members[i].foto);
    // Stampare su DOM sottoforma di stringhe
    const actualmember = document.createElement("li");
    actualmember.innerHTML =("Name: " + members[i].name + " Ruler: " + members[i].ruolo + " Foto: " + '<img src="img/' + members[i].foto + '>');
    parentList.appendChild(actualmember);
}
    



// BONUS 2:
// Organizzare i singoli membri in card/schede, potete usare come esempio lo screenshot,

// Create Cards
const wrapperElement = document.querySelector('div.wrapper');
const numberCards = document.getElementById('numberCards');

for ( let i = 0; i < members.length ; i++){

    const cardElement = document.createElement('article');

    cardElement.innerHTML = 
        `<div class="card" style="width: 18rem;">
            <img src="img/${members[i].foto}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${members[i].name}</h5>
                <p class="card-text">${members[i].ruolo}</p>
            </div>
         </div>`;
         
    wrapperElement.appendChild(cardElement);
};































