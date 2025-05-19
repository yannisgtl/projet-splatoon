const personnages = [
  {
    nom: "Inkling Garçon",
    image: "../img/inkling1.png",
    description: "Un Inkling prêt à en découdre, armé de son liquidateur classique.",
  },
  {
    nom: "Inkling Fille",
    image: "../img/inkling2.png",
    description: "Rapide et agile, elle domine les terrains avec style et précision.",
  },
  {
    nom: "Capitaine Cuttlefish",
    image: "../img/cuttlefish.png",
    description: "Ancien vétéran de la guerre de l'encre, il guide les jeunes Inklings dans l'Octavallée.",
  }
];

let index = 0;

const nom = document.getElementById("nom-personnage");
const image = document.getElementById("image-personnage");
const texte = document.getElementById("texte-personnage");

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % personnages.length;
  updatePersonnage();
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + personnages.length) % personnages.length;
  updatePersonnage();
});

function updatePersonnage() {
  const p = personnages[index];
  nom.textContent = p.nom;
  image.src = p.image;
  image.alt = p.nom;
  texte.textContent = p.description;
}
