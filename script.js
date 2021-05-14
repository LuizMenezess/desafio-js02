//Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
//Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
//Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
//Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
//Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E


//01
let idade = 19
if (idade > 18){
    console.log (`Voce é maior de 18 anos`)
}

//02
let old = 26
let istrue = `Você é humano e maior, seja bem vindo`
if((old > 18) && (istrue == `Você é humano e maior, seja bem vindo`)){
    console.log(istrue)
}

//03
let mes = `janeiro`
if ((mes === `dezembro`) || (mes === `janeiro`)){
    console.log (`true`)
}

//04
let nome = `Romildo`
if((nome = `R`)){
    console.log(`Okay, seu nome começa com a letra R`)
}

//5//
let nombre = `Angela`
let sobrenome = `Menezes` 
if ((nombre = `E`) || (sobrenome > length < 6)){
    console.log(`Seu sobrenome contem mais de 6 caracteres ou seu nome começa com a letra E`)
}