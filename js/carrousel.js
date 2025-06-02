const personnages = [
  {
    nom: "Ayo",
    image: "../img/Ayo_cropped.png",
    description: "Popstar enthousiaste et membre du groupe Calamazones avec sa cousine Oly.\n"
    + "Présentatrice de télévision avec cette dernière.\n"
    + "Ensemble, elles annoncent les arènes disponibles pour les matchs et les Splatfests, événements où les Calamazones représentent 2 camps opposés et donnent un concert sur la place principale."
    + "Agent 1 du nouvel escadron Espadon dirigé par leur grand-père, l'Amiral Macalamar.\n",
  },
  {
    nom: "Oly",
    image: "../img/Oly_cropped.png",
    description: "Popstar sarcastique et membre du groupe Calamazones avec sa cousine Ayo.\n"
    + "Présentatrice de télévision avec cette dernière.\n"
    + "Ensemble, elles annoncent les arènes disponibles pour les matchs et les Splatfests, événements où les Calamazones représentent 2 camps opposés et donnent un concert sur la place principale.\n"
    + "Agent 2 du nouvel escadron Espadon dirigé par leur grand-père, l'Amiral Macalamar.\n",
  },
  {
    nom: "Charbitre",
    image: "../img/judd1.png",
    description: "Juge des guerres de territoire et matchs pro.\n"
    + "Lorsqu'il ne travaille pas, il passe son temps à dormir sur un coussin sur la place de Chromapolis, proche de la tour de Chromapolis.\n"
    + "Peut nous donner quelques conseils si on va le voir sur la place.\n",
  },
  {
    nom: "Agent 3",
    image: "../img/Agent3_full.png",
    description: "Personnage du joueur dans le mode Héro.\n"
    + "Peut être un garçon ou une fille selon votre choix.\n" 
    + "A été recruté dans l'escadron Espadon par l'Amiral Macalamar à son arrivée à l'Octo-Vallée.\n"
    + "Parle peu pour que le joueur puisse se projeter dessus en lui appliquant la personnalité de son choix.\n",
  },
  {
    nom: "Amiral Macalamar",
    image: "../img/macalamar_full.jpg",
    description: "A combattu dans la Grande Guerre de Territoire 100 ans avant les événements du jeu.\n" 
    + "Dirigeant du nouvel escadron Espadon.\n"
    + "Recrute l'agent 3 pour aller récupérer le Grand Poisson-charge volé par les Octariens.\n"
    + "Reste proche de sa cabane dans l'Octa-Vallée pendant que l'agent 3 est en mission pour lui parler à distance et lui donner des conseils.\n"
  	+ "Grand-père de Ayo et Oly.\n",
  },
  {
    nom: "DJ Octave",
    image: "../img/dj_octave_full.png",
    description: "Dirigeant du peuple Octarien et de son armée.\n"
    + "Comme son nom l'indique, il est aussi DJ et compose sa propre musique.\n"
    + "A volé le poisson charge pour subvenir aux besoins de son peuple.\n"
    + "Boss final du jeu.\n",
  },
  {
    nom: "Octariens",
    image: "../img/Octariens.png",
    description: "Soldats de l'armée Octarienne et adversaires de l'agent 3 dans les niveaux.\n"
    +  "Il y a une multitude de types différents avec des capacités et points faibles divers.\n",
  },
  {
    nom: "Octalings",
    image: "../img/Octaling_full.png",
    description: "Font partie de la société Octarienne et de leur armée.\n"
    + "Elles ont les mêmes capacités que les Inklings et sont leur équivalent chez les Octariens, bien que celles qu'on affronte dans les niveaux sont plus âgées que l'agent 3.\n" 
    + "Elles portent toutes le même uniforme.\n"
    + "Les Octalings de rang supérieur ont des tentacules plus foncés et des algues accrochées sur les côtés de leurs têtes.\n",
  },
  {
    nom: "Poisson-charge",
    image: "../img/Zapfish.jpg",
    description: "Sources d'énergie électrique.\n"
    + "Ils sont retenus en captivité par les Octariens pour servir de source d'énergie.\n"
    + "On les récupère à la fin de chaque niveau.\n",
  },
  {
    nom: "Grand Poisson-charge",
    image: "../img/Great_Zapfish.png",
    description: "L'une des sources d'énergie électrique principales de Chromapolis.\n"
    + "Volé par DJ Octave pour servir de source d'énergie pour son peuple et son armée.\n"
    + "Une fois récupéré à la fin du mode héro du jeu, on peut le retrouver enroulé sur la tour de Chromapolis dans la place de Chromapolis.\n",
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
  // texte.textContent = p.description;
  texte.innerHTML = p.description.replace(/\n/g, '<br>');
}
