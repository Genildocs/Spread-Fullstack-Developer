// Exercicio Palindromo

 function verificaPalindromo(string){
    if(!string){
      return "String inexistente";  
    }else{
        return string.split("").reverse().join("") === string;
        
    }

               
 }

console.log(verificaPalindromo("omo"));
