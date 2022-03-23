const errorMsg = document.querySelector('.subscription-error');
const submit = document.querySelector('.btn-script');
const input = document.querySelector('.subscribe-input');
const imgErro = document.querySelector('.fa-envelope ')

const emailValidation = (e) => {


    e.preventDefault();
    console.log({ errorMsg });
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (input.value == "") {
        errorMsg.innerHTML = "Email address cannot be empty.";
        imgErro.style.display = "none";

    } else if (!validEmail.test(input.value)) {
        errorMsg.innerHTML = "Please enter a valid email address.";


    } else {
        errorMsg.innerHTML = "";
        imgErro.style.display = "flex";

    }
};
submit.addEventListener('click', emailValidation);