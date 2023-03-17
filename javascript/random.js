let random = Math.random() * 1000;
let randomasInteger= Math.round(random);
console.log(randomasInteger);

if(randomasInteger>500){
    console.log("Bigger than 500");
}

if(randomasInteger>800){
    console.log("Bigger than 800");
}

if(randomasInteger>500 & randomasInteger<800){
    console.log("Between 500 and 800");
}

if(randomasInteger>500 & randomasInteger<800){
    console.log("Between 200 and 500");
}

if(randomasInteger>500 & randomasInteger<800){
    console.log("Between 0 and 200");
}

