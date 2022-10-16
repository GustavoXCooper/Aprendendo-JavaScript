function trocarAnimal(fileName, animalName){
    document.querySelector('.animal').setAttribute('src', fileName);
    document.querySelector('.animal').setAttribute('data-animal', animalName);
}
function pegarAnimal(){
    animal = document.querySelector('.animal').getAttribute('data-animal');
    alert(`É o ${animal}!`)
}