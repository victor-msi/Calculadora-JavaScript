let buttonSwitch = document.querySelector(".switch");
let calculatorContainer = document.querySelector(".calculator-container");
let buttonC = document.querySelector(".buttom-C");
let buttonOperator = document.querySelectorAll(".buttom-operator");
let buttonNumbers = document.querySelectorAll(".buttom-number");
let buttonEqual = document.querySelector(".buttom-equal");
let panel = document.querySelector(".panel-scream");
let buttom = document.querySelectorAll(".grid-container__buttom");

buttom.forEach((element) => {
  element.onclick = () =>{
    if(element.id == "C"){
      panel.innerText = "";
    }else if(element.id == "backspace"){
      let cadena = panel.innerText.toString();
      panel.innerText = cadena.substr(0, cadena.length-1);
    }else if(panel.innerText != "" && element.id == "="){
      panel.innerText = eval(panel.innerText);
    }else if(panel.innerText == "" && element.id == "="){
      panel.innerText = "Null";
      setTimeout(()=> panel.innerText = "", 1000)
    }else{
      panel.innerText += element.id;
    }
  }      
});

buttonSwitch.onclick=()=>{
  calculatorContainer.classList.toggle("dark-mode");
}
