let flag = 0;
let togg = document.querySelector(".tog");
let input = document.querySelector(".outer input");
let state = document.querySelector(".outer p")
togg.addEventListener("click", function () {
    if (flag == 0) {
        input.type = "text";
        togg.style.backgroundColor = "yellow";
        flag = 1;
    }
    else {
        input.type = "password";
        togg.style.backgroundColor = "red";
        flag = 0;
    }
});
input.addEventListener("input", function () {
    let hasLower = /[a-z]/.test(input.value);
    let hasUpper = /[A-Z]/.test(input.value);
    let hasNumber = /[0-9]/.test(input.value);
    let hasSpecial = /[@$!%*?&]/.test(input.value);
    if (input.value.length < 8) {
        state.textContent = "Weak";
        state.style.color = "red";
    }
    else if(input.value.length>=8 && hasLower==true && hasUpper==true && hasNumber==true && hasSpecial==true ){
        state.textContent = "Hard";
        state.style.color = "green";    
    }
    else if(input.value.length>=8 && (hasLower==true || hasUpper==true || hasNumber==true || hasSpecial==true)){
        state.textContent = "Medium";
        state.style.color = "orange";    
    }  
});