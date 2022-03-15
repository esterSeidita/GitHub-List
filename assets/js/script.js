const q = (attribute) => document.querySelector(attribute);
const popup = q('#popup');
const links = document.querySelectorAll('a');

/* -------------------------------------------------------------------------- */
/*                       Funzione per generare il popup                       */
/* -------------------------------------------------------------------------- */

function popupGenerator (link, index){
    let githubLink = link[index].getAttribute("data-git");
    let linkedinLink = link[index].getAttribute("data-linkedin");

    popup.classList.add('hidden');
    popup.innerHTML = `
    <img src="./assets/img/closeBtn.png" class="closeBtn">
    <img src="./assets/img/rightArrow.png" class="moveToRight">
    <img src="./assets/img/leftArrow.png" class="moveToLeft">
    
    <h1>${link[index].textContent}</h1>
    <h2>Scegli la piattaforma:</h2>
    <div class="groupBtn">
    <a href="${githubLink}" target="_blank">
    <button>GitHub</button>
    </a>
    <a href="${linkedinLink}" target="_blank" class="linkedinBtn">
    <button>Linkedin</button>
    </a>
    </div>
    `;
    if(linkedinLink === ''){
        q('.linkedinBtn').classList.add('inactive');
        const att = q('.linkedinBtn button').setAttribute("title", "Linkedin non presente");
    };

    // Close Button
    const closeBtn = q('.closeBtn');
    
    closeBtn.addEventListener("click", () => {
        popup.classList.remove('hidden');
        popup.innerHTML = '';
    })

    // Arrow Buttons
    const leftBtn = q('.moveToLeft');
    const rightBtn = q('.moveToRight');
    
    leftBtn.addEventListener("click", () => {
        index --;
        popupGenerator(link, index)

    })    
    rightBtn.addEventListener("click", () => {
        index ++
        popupGenerator(link, index)
    })

}

//Fine funzione

links.forEach((link, i, allLink) => {
    allLink[i].addEventListener('click', () => {

    popupGenerator(allLink, i);

    })
})
