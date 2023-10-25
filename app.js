const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    //button click active class
    
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', () =>{
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //sections active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })

            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle Light/Dark
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const mainBtn = document.getElementById("main-btn");

    mainBtn.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default link behavior

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Create an XMLHttpRequest object
        const xhr = new XMLHttpRequest();

        // Define the PHP script URL
        const phpScriptURL = "send_email.php"; // Replace with the actual path to your PHP script

        // Create a data object to send to the PHP script
        const data = new FormData();
        data.append("name", name);
        data.append("email", email);
        data.append("message", message);

        // Configure the AJAX request
        xhr.open("POST", phpScriptURL, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

        // Define the event handler for a successful AJAX request
        xhr.onload = function () {
            if (xhr.status === 200) {
                alert(xhr.responseText); // Display the response from the PHP script
            } else {
                alert("An error occurred while sending the email.");
            }
        };

        // Send the AJAX request with the form data
        xhr.send(data);
    });
});

PageTransitions(); 
