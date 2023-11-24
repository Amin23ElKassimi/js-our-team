// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

/

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const members = [
    { name : "Wayne Barnett",  ruolo: "Founder & CEO",  foto: "wayne-barnett-founder-ceo.jpg" },
    { name : "Angela Caroll",  ruolo: "Chief Editor",  foto: "angela-caroll-chief-editor.jpg" },
    { name : "Walter Gordon	",  ruolo: "Office Manager",  foto: "walter-gordon-office-manager.jpg" },
    { name : "Angela Lopez",  ruolo: "Social Media Manager",  foto: "angela-lopez-social-media-manager.jpg" },
    { name : "Scott Estrada",  ruolo: "Developer",  foto: "scott-estrada-developer.jpg" },
    { name : "Barbara Ramos",  ruolo: "Graphic Designer",  foto: "barbara-ramos-graphic-designer.jpg" },
];

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
    actualmember.innerHTML =("Name: " + members[i].name + " Ruler: " + members[i].ruolo + " Foto: " + members[i].foto);
    parentList.appendChild(actualmember);
}
    

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede, potete usare come esempio lo screenshot,
// ma anche realizzare qualcosa di creativo!!!















