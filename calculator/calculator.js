const buttonsEl = document.querySelectorAll("buttons");

for (let i = 0; i < buttonsEl.length;i++){
    buttonsE1[i].addEventListener("click", () => {
        const buttonValue = buttonsEl[i].textContent;
        if(buttonValue === "c"){
            clearResult()
        } else if (buttonValue === "="){
          calculateResult();
        }else {
            appendValue(buttonValue);
        }
    })

}

function clearResult(){
    inputFieldEl.value = "";
}

function calculateResult() {
    inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue( buttonValue) {
    inputFieldEl.value += buttonValue
       // inputFieldEl.value = inputFieldEl.value + buttonValue;
}