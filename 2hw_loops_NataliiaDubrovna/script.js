let N;
let M;

function inputN(){
    do{
        N = +prompt("Enter first integer number","Enter here integer number");
    } while((Object.is(NaN, N) === true) || (N !== parseInt(N)))
}
function inputM(){
    do{
        M = +prompt("Enter last number integer","Enter here integer number");
    } while((Object.is(NaN, M) === true) || ( M !== parseInt(M)))
}

inputN();
inputM();


let addEven = confirm('Should we add Even numbers?');



function sumNubersInDiapasone(n,m){
    let sum = 0; 
    let maxNumber = Math.max(n,m);
    let minNumber = Math.min(n,m); 

    if(addEven){ 
        for(let i = minNumber; i <= maxNumber ; i++){
        sum += i;
        }
        return sum;
    }
    else{
        for(let i = minNumber; i <= maxNumber ; i++){
            if(!(i % 2 == 0)){
                sum += i;
            }
        }
        return sum;
    }
}

alert(sumNubersInDiapasone(N,M));
console.log(sumNubersInDiapasone(N,M));

