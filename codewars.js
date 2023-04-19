

function highAndLow(numbers){
  let novalista = []
  let maior = Math.min(...numbers)
  let menor = Math.max(...numbers)
    novalista.push(maior,menor)
    let newList = novalista.map(numero => numero.toString()).join(' ')
  return newList
}
console.log(highAndLow([1,2,3,4,5]))
console.log(highAndLow(['1 2 3 4 5']))
////////////////////////////

function sum(numbers) { 
    if(numbers.length === 0){
      return 0;
    }
  let soma =  numbers.reduce((acc, atual) => {
      return acc + atual
    },0)
    return soma
};
console.log(sum([1,2,-3,-4.5,5]))

////////////////////////////
function friend(friends){
    let filtroLetras = friends.filter((name) => {
      return name.length === 4;
    })
    return filtroLetras;
}

function friend1(friends){
  let arr = [];
  for(let i = 0; i < friends.length; i++){
    if(friends[i].length === 4){
      arr.push(friends[i])
    }
  }
  return arr;
}
console.log(friend1(['joao', 'jefferson', 'driele', 'mark']))
////////////////////////////

function hoopCount (n) {
   for(let i = 0; i < n; i++){
    if(n >= 10){
      return `Great, now move on to tricks`
    }
   }
    return `Keep at it until you get it`
}

console.log(hoopCount(12))


function isIsogram(str){
  let i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}

console.log(isIsogram('strefxe')) 


function accum(s) {
  
}




//ue recebe um parâmetro de string contendo um nome e sobrenome e retorna apenas a primeira letra em maiúsculo:

function primeiraLetraMaiuscula(str){
  const nomeSeparado = str.split(' ');
  const nome = nomeSeparado[0];
  const sobrenome = nomeSeparado[1];

  const primeiraLetraNome = nome.charAt(0).toUpperCase();
  const primeiraLetraSobrenome = sobrenome.charAt(0).toUpperCase();

  return primeiraLetraNome + primeiraLetraSobrenome;
}

console.log(primeiraLetraMaiuscula('jefferson lira'))

function spl(str){
  let texto = str.split(' ').join('- ')
  let nome = texto[0];
  let sobrenome = texto[1]
    return nome + sobrenome;
}

console.log(spl('jefferson lira'))




function fakeBin(x){
  let resp = '';

  for(let i = 0; i < x.length; i++){
    if(x[i] < '5'){
      resp += '0' 
    }else{
      resp += '1';
    }
  }
  return resp
}
console.log(fakeBin('56871259842016'))



const reverseSeq = n => {
  let arr = [];
    for (let i=n; i>0; i--) {
      arr.push(i);
      } return arr;
  };
console.log(reverseSeq(5))