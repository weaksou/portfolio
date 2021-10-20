const skills = document.querySelector("#skills");
const skillDescriptions = skills.querySelectorAll(".skill-description");
const descriptionContent = [
    `I can consider myself good at HTML, it was the first language I've ever learned, the first code file that I didn't understand a word of it, but It gave me doubt how does this work? and then I started asking questions. I didn't know to google help back then, and after a lot of questions, I started learning how to code at the beginning of 2016, but anyway, it made me what I am today. we cannot deny facts <span class="emojie">😀</span>`,
    `and then we need a more efficient way to style things, a tool that will allow us to style things without the inline mumbo jumbo!. CSS, isn't it? yeah... I spend a whole month coding a blog with a control panel and customizing it with icons... until I realized that there was something called responsive:)))), I was 14yo so excuse me 😎 ! the only young guy In my city that was hacking NASA with HTML, that's how they see me, a pop star.`,
    `javascript, my enemy! I fear it. whenever I hear this name I think of someone to save me, jQuery? Bootstrap... I didn't know anyone back then. I had to face the truth, I don't understand the syntax, why do I need to write all of this to toggle a button? why I can't make a game with javascript why? Nah, it was my fault nobody built a game in his first time learning a language, right? I didn't give up I kept fighting, stealing images from other games, sounds. "how to add voices to a game" 😳.. oops I forgot "javascript". it was too late I saw the unity engine logo, I was so excited that I felt cold when started learning how to make games. but my happiness didn't last for too long my little brother broke my pc and I stopped learning "6 years later" I bought I new laptop, I started learning again, HTML- CSS- js. it looks familiar, what could I've become if my laptop didn't get broken. shame on you Luck!`
];
const descTitles = [
    'The web structure',
    'Styling',
    'The boss'
];

window.addEventListener("load", applyDescription);

function applyDescription(){

    for (let index = 0; index < skillDescriptions.length; index++) {

        const skillDesc = skillDescriptions[index];
        if(descriptionContent[index].length >= 350){
            const subStringed = descriptionContent[index].substr(0, 385);
            skillDesc.innerHTML = subStringed + "<b class='dots'>...</b>";
            
        }

    }

}





//viewer
const mainViewer = document.querySelector("#mainViewer");
const closeViewer = mainViewer.querySelector("#closeViewer");
const viewerImage = mainViewer.querySelector(".viewer-image");

// close viewer when click on close button
closeViewer.addEventListener("click", ()=>{
    mainViewer.classList.remove("is-visible");
});
closeViewer.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        mainViewer.classList.remove("is-visible");
    }
});
window.addEventListener("keydown", (event)=>{
    if(event.key === "Escape"){
        mainViewer.classList.remove("is-visible");
    }
});


//open clicked field
const skillLearnMore = document.querySelectorAll(".skill-learn-more a");
const viewerContent = document.querySelector("#viewerContent");
const mainvcontainer = mainViewer.querySelector(".main-v-container");
const skillImage = skills.querySelectorAll(".skill-image");


for (let i = 0; i < skillLearnMore.length; i++) {
    const learnMore = skillLearnMore[i];
    learnMore.addEventListener("click", openinviewer); 
    skillImage[i].addEventListener("click", openinviewer); 
}

function openinviewer(event) {
    if(event){
         mainViewer.classList.add("is-visible");
         const target = event.target;
         const action = target.dataset.content;
         if(action === "html"){
            viewerContent.innerHTML = `
                <h1 class="viewer-title">The web structure</h1>
                	&ldquo; ${descriptionContent[0]}  &rdquo;
            `;
            viewerContent.style.borderColor = "#cc491f";
            addClass("html-vw-bg");
            addClassToOutline("dashed-class-html");

         }else if(action === "css"){


            viewerContent.innerHTML = `
                <h1 class="viewer-title">Styling</h1>
                	&ldquo; ${descriptionContent[1]}  &rdquo;
            `;

             viewerContent.style.borderColor = "#2a64eb";
             addClass("css-vw-bg");
             addClassToOutline("dashed-class-css");


         }else if(action === "javascript"){


            viewerContent.innerHTML = `
                 <h1 class="viewer-title">The boss</h1>
                	&ldquo;  ${descriptionContent[2]} &rdquo; 
            `;
            
             viewerContent.style.borderColor = "#ebc92f";
             addClass("js-vw-bg");
             addClassToOutline("dashed-class-js");
            }        
    }

}


function addClass(className) {
    viewerImage.classList.remove("html-vw-bg");
    viewerImage.classList.remove("css-vw-bg");
    viewerImage.classList.remove("js-vw-bg");
    viewerImage.classList.add(className);
}

function addClassToOutline(className) {

    mainvcontainer.classList.remove("dashed-class-html");
    mainvcontainer.classList.remove("dashed-class-css");
    mainvcontainer.classList.remove("dashed-class-js");
    mainvcontainer.classList.add(className);
}


    window.addEventListener("click", (event)=>{
        // alert(event.target.node.parentNode)
        const viewer = document.getElementById("mainViewer");
        const viewerClassList = viewer.classList;

        if(viewerClassList.contains("is-visible")){
            if(event.target === viewer){
                 mainViewer.classList.remove("is-visible");
            }
        }
        
    });


//credits dropdown
const creditDropDown = document.getElementById("creditDropDown");
const sectionTeam = document.getElementById("sectionTeam");
const featherPlusIcon = document.getElementById("featherPlusIcon");
creditDropDown.addEventListener("click", openDropDown);
function openDropDown() {
    creditDropDown.classList.toggle("dropdownborder");
    sectionTeam.classList.toggle("height80");
    featherPlusIcon.classList.toggle("fe-rotate");
}
console.clear();
console.log("%cIn this world, wherever there is light - there are also shadows.", "background: rgb(0,16,27); background: linear-gradient(0deg, rgba(0,16,27,1) 0%, rgba(14,18,32,1) 37%, rgba(203,48,96,1) 70%); color:white; font-size:18px; padding:2px 4px; border-radius:5px;")
