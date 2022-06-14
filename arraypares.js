function substituiPar(array){
    if(!array) return -1;
    if(!array.length) return -1;

    for(let i = 0; i < array.length; i++){
        if(array[i] === 0) {
            console.log("Você já é zero!")
        } else if (array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por zero.`)
            array[i] = 0;
        } 
    }
    return array;
}

let lista = [10,5,36,2];
console.log(substituiPar(lista))