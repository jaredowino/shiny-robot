// View My Work Button Scroll Effect
const workBtn = document.getElementById("workBtn");

if(workBtn){
    workBtn.addEventListener("click", function(){
        document.getElementById("projects").scrollIntoView({
            behavior: "smooth"
        });
    });
}


// Project Cards Click Effect
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", function(){

        const title = this.querySelector("h3")?.innerText;

        alert("You selected: " + title);
    });
});