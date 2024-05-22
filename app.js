let form = document.querySelector("form");
let userInput = document.querySelector("#user-input");
let result = document.querySelector("#result");
let stargameBtn = document.querySelector("#star-game");
let submitBtn = document.querySelector("#submit")
let guesNumber = document.querySelector("#your-gues");

(function(){
    let allguesArry = []
    let randomnum = Math.floor(Math.random() * 100);
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        let userInputValue = parseInt(userInput.value);
        console.log(userInputValue);
    
        if (userInputValue > randomnum) {
    
            result.innerHTML = " too hight !!"
        } else if (userInputValue < randomnum) {
    
            result.innerHTML = " too low !!"
        } else {
    
            result.innerHTML = " congra !!"
            stargameBtn.disabled = false;
            submitBtn.disabled = true;
        }
    
        allguesArry.push(userInputValue)
    
        guesNumber.innerHTML = " your gues" + "  " + allguesArry.join(",")
        // console.log("form submit");
        form.reset()
        stargameBtn.addEventListener("click", () => {
            result.innerHTML = "";
            guesNumber.innerHTML = "";
            stargameBtn.disabled = true;
            submitBtn.disabled = false;
            let randomnum = Math.floor(Math.random() * 100);
        })
    });
}
)
