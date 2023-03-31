function buttonClicked(){

    let method = document.getElementById("method").value;
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let result = 0;
    if(method = "Add"){
         result = parseFloat(num1) + parseFloat(num2);
    }
    if(method = "Subtract"){
         result = parseFloat(num1) - parseFloat(num2);
    }
    if(method = "Multiply"){
         result = parseFloat(num1) * parseFloat(num2);
    }
    if(method = "Divide"){
         result = parseFloat(num1) / parseFloat(num2);
    }


    console.log(num1);
    console.log(num2);
    console.log(result);
    console.log(method);
}

buttonClicked();