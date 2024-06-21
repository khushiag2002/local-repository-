let pass = document.getElementById("pass");

let mail = document.getElementById("email");
let btn = document.getElementById("btn1");

let p = Array.from(document.getElementsByTagName("p"));

let tick = Array.from(document.getElementsByClassName("fa-square-check"));
tick.forEach((e) => {
  e.style.display = "none";
});
let cross = Array.from(document.getElementsByClassName("fa-square-xmark"));
cross.forEach((e) => {
  e.style.display = "none";
});

let upperCase = document.getElementById("upperCase");
let lowerCase = document.getElementById("lowerCase");
let number = document.getElementById("number");
let sChar = document.getElementById("sChar");
let minChar = document.getElementById("minChar");

let upper = /(?=.*[A-Z])/g;
let lower = /(?=.*[a-z])/g;
let num = /(?=.*\d)/g;
let special = /(?=.*[!@#$%^&*()_+])/g;

const password_valid = () => {
    if (upper.test(pass.value) == 1) {
        upperCase.style.color = "green";
        tick[0].style.display = "initial";
        cross[0].style.display = "none";

    } else {
        upperCase.style.color = "red";
        tick[0].style.display = "none";
        cross[0].style.display = "initial";

    }
    if (lower.test(pass.value) == 1) {
        lowerCase.style.color = "green";
        tick[1].style.display = "initial";
        cross[1].style.display = "none";

    } else {
        lowerCase.style.color = "red";
        tick[1].style.display = "none";
        cross[1].style.display = "initial";

    }
    if (num.test(pass.value) == 1) {
        number.style.color = "green";
        tick[2].style.display = "initial";
        cross[2].style.display = "none";
    } else {
        number.style.color = "red";
        tick[2].style.display = "none";
        cross[2].style.display = "initial";
    }
    if (special.test(pass.value) == 1) {
        sChar.style.color = "green";
        tick[3].style.display = "initial";
        cross[3].style.display = "none";

    } else {
        sChar.style.color = "red";
        tick[3].style.display = "none";
        cross[3].style.display = "initial";

    }
    if (pass.value.length>=8) {
        minChar.style.color = "green";
        tick[4].style.display = "initial";
        cross[4].style.display = "none";

    } else {
        minChar.style.color = "red";
        tick[4].style.display = "none";
        cross[4].style.display = "initial";
        console.log(pass.value.length)

    }
};


const isValid = () => {
  if (
    !upper.test(pass.value) ||
    !lower.test(pass.value) ||
    !num.test(pass.value) ||
    !special.test(pass.value)||
    pass.value.length<8
  ) {
    alert("Match the password with requested format");
  } else {
    alert("password accepted");
  }
};

btn.addEventListener("click", isValid);

pass.addEventListener("keyup", password_valid);
pass.addEventListener("click", () => {
  p.forEach((e) => {
    e.style.color = "red";
  });
  cross.forEach((e) => {
    e.style.display = "initial";
  });
});
