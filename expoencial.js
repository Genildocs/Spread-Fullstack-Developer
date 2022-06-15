function expoencial(array, num=1){
    const result = [];

    for(let i=0; i<array.length; i++){
        result.push(array[i] ** num);
    }
    return result;
}

console.log(expoencial([6,7,8],2));
