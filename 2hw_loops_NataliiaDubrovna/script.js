
let N, M;

function inputN(){
    do{
        N = +prompt("Enter first integer number","Enter here integer number"); // + converts string into a number  
    } while((Object.is(NaN, N) === true) || (N !== parseInt(N))) //  || return first true or last false
}
function inputM(){
    do{
        M = +prompt("Enter second integer number","Enter here integer number");
    } while((Object.is(NaN, M) === true) || ( M !== parseInt(M))) // Object.is(NaN, NaN) ==> true ; NaN === NaN ==> false
}

inputN();
inputM();

let addEven = confirm('Should the Even numbers be added?');

function sumNubersInDiapasone(n,m){
    let sum = 0; 
    let maxNumber = Math.max(n,m);
    let minNumber = Math.min(n,m); 

    if(addEven){  
        for(let i = minNumber; i <= maxNumber ; i++){
        sum += i;
        }return sum;
    }
    else{
        for(let i = minNumber; i <= maxNumber ; i++){
            if(!(i % 2 == 0)){ // skip even numbers or might be also (i % 2 == 1)
                sum += i;
            } 
        }return sum;
    }
}
alert(sumNubersInDiapasone(N,M));
console.log(sumNubersInDiapasone(N,M));


