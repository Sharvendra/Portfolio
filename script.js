const header= document.querySelector("header")

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY > 120);
})

let menu= document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick =()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll =()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

const name= document.getElementById('name');
const email= document.getElementById('email');
const msg = document.getElementById('msg')
const submit = document.getElementsByClassName('contactForm')[0];
submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('Clicked');
// console.log(name.value);
// console.log(email.value);
    let ebody=`
    <b>Name: </b>${name.value}
    <br>
    <b>Email: </b>${email.value}
    br
    <b>Message: </b>${msg.value}
    `
    Email.send({
        SecureToken : "84bda28d-65e0-49e4-b251-0d3f1647be52",
        To : 'shahsharvendra@gmail.com',
        From : "sabm45604@gmail.com",
        Subject : "This is the subject "+ email.value,
        Body : ebody
    }).then(
      message => alert(message)
    );
})

// 84bda28d-65e0-49e4-b251-0d3f1647be52