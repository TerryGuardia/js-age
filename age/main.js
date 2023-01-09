//Récupère l'année en cours
function currentYear() {
    let date = new Date();
    return year = date.getFullYear();
}
currentYear();
//Récupère l'année de naissance
let naissance = prompt("veuillez entrer votre année de naissance");

//Soustrait l'année de naissance  à l'année actuelle
function age() {
    let age = year - naissance;
    alert('Vous avez ' + age + ' ans.');
}
age();

/*Soustrait la date de naissance à celle d'aujourd'hui
@param { String } date (yyyy/mm/dd)
*/
function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;

}
reponse = prompt('veuillez saisir votre date de naissance : (format yyyy/mm/dd)');
console.log('age: ' + getAge(reponse));