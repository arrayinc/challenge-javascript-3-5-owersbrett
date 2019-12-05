// *** YOUR ANSWER BELOW ***

function makeBox(x,y){

    let minusSigns = "";
    let spaces = "";

    while (minusSigns.length !== x){
        minusSigns += "-";
    }

    while (spaces.length !== x){
        spaces += " ";
    }

    console.log(`+${minusSigns}+`);
    for (let i = 0; i !== y; i++){
        console.log(`|${spaces}|`);
    }
    console.log(`+${minusSigns}+`);
}

makeBox(52,6);