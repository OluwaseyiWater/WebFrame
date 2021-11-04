const logIn = document.querySelector('.login-button');

function selectItem(e) {
    console.log(this.id);

}

logIn(item => item.addEventListener('click', selectItem));