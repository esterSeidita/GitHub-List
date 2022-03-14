const popup = document.querySelector('#popup');
const links = document.querySelectorAll('a');

links.forEach(link => {
    let githubLink = link.getAttribute("data-git");
    let linkedinLink = link.getAttribute("data-linkedin");
    link.addEventListener('click', () => {
        popup.classList.add('hidden');
        popup.innerHTML = `
        <div class="closeBtn">X</div>
        <h1>${link.textContent}</h1>
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
            document.querySelector('.linkedinBtn').classList.add('inactive');
            const att = document.querySelector('.linkedinBtn button').setAttribute("title", "Linkedin non presente");
        };
        
        const closeBtn = document.querySelector('.closeBtn');
        closeBtn.addEventListener("click", () => {
            popup.classList.remove('hidden');
            popup.innerHTML = '';
        })
    })
})