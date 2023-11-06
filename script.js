//Génération du raceNumber aléatoirement
let raceNumber = Math.floor(Math.random() * 1000);

//Indique si le coureur s'est inscrit tôt
let registrationEarly = false;

//Variable qui stocke l'âge du coureur
let ageRunner = 18;

//Si le runner et adulte et inscrit en avance, on ajoute 1000 à son numéro de dossard 
if(registrationEarly === true && ageRunner >= 18){
  raceNumber += 1000;
}
//controlFlow pour connaître son numéro de dossard et son heure de départ
if(ageRunner > 18 && registrationEarly === true){
  console.log(`Le départ est prévu à 9:30 avec le dossard n°${raceNumber}`);
}else if(ageRunner > 18 && registrationEarly === false){
  console.log(`Le départ est prévu à 11:00 avec le dossard n°${raceNumber}`);
}else if(ageRunner < 18){
  console.log(`Le départ est prévu à 12:30 avec le dossard n°${raceNumber}`);
}else{
  console.log("Présentez vous au bureau d'inscription");
}