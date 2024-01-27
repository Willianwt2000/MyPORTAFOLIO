export default function CardsPortafolio(){
    const portafolioData = [
        {
            imgSrc: "./assets/img/PortfolioImg/netflixClone.png",
            titulo: "Netflix  Clone",
            skills: ["JavaScript"],
            descripcion: "Netflix clone developed with HTML, CSS, JS and DOM manipulation for a faithful reproduction of the experience, from design to interactivity.",
            demoURL: "https://wt-netflix-clone.netlify.app",
            repoURL: "https://github.com/Willianwt2000/netflix-clone.git"
        },
        {
            imgSrc: "./assets/img/PortfolioImg/reactOpinion.png",
            titulo: "Opinion Foro",
            skills: ["React"],
            descripcion: "My first project to express opinions in a forum. Developed with HTML, JS, CSS and React for a more dynamic and attractive experience.",
            demoURL: "https://glistening-cannoli-e9ac4f.netlify.app/",
            repoURL: "https://github.com/Willianwt2000/new-Proyect_opinion.git"
        },
        {
            imgSrc: "./assets/img/PortfolioImg/reactCalculator.png",
            titulo: "Calculator",
            skills: ["React"],
            descripcion: " Second proyect using react of freecodecamp buildin a calculator using hoocks",
            demoURL: "https://calculadorawt.netlify.app",
            repoURL: "https://github.com/Willianwt2000/React-calculator"
        },
        {
            imgSrc: "./assets/img/PortfolioImg/tareaApp.png",
            titulo: "Task Management",
            skills: [ "JavaScript"],
            descripcion: "Task management challenge: Programming Logic",
            demoURL: "https://fantastic-douhua-f5eb25.netlify.app/",
            repoURL: "https://github.com/Willianwt2000/app-gestion-de-tareas.git"
        },
        {
            imgSrc: "../assets/img/PortfolioImg/E-commerce.png",
            titulo: "E-commerce",
            skills: ["JavaScript"],
            descripcion: "Developed an eCommerce site using HTML, CSS and JavaScript, enhanced with localStorage. Used libraries like Tastifye to enhance the visual interface and SweetAlert for engaging notifications. Experience a modern and personalized shopping experience on our site.",
            demoURL: "https://wt-shop.netlify.app/",
            repoURL: "https://github.com/Willianwt2000/E-commerce"
        },
        {
            imgSrc: "./assets/img/PortfolioImg/encrypt.png",
            titulo: "Message Encryptor",
            skills: ["JavaScript"],
            descripcion: "Message Encryptor for the first Alura Latam Challenge: Programming Logic.",
            demoURL: "https://encrypted-text.netlify.app/",
            repoURL: "https://github.com/Willianwt2000/Encriptador-de-texto"
        },
        
    ];
    
    const skillIcons = {
        React: '<i class="fa-brands fa-react fa-beat-fade" style="color: #6beeff;"></i>',
        JavaScript: '<i class="fa-brands fa-square-js fa-beat-fade" style="color: #ffdb29; font-size: 2rem;"></i>',
        Sass: '<i class="fa-brands fa-sass fa-beat-fade" style="color: #ff00ea;font-size: 2rem;"></i>',
        styledComponents: '<iconify-icon icon="skill-icons:styledcomponents" width="26"></iconify-icon>'
    };
    
    const portafolioContainer = document.querySelector('[data-card]');
    
    for (const data of portafolioData) {
        const cardHTML = `
        
            <div class="portafolio__tarjeta">
            
                <div class="portafolio__cara faceA card__content caja__dark__portafolio ">
                
                    <div class="img__container">
                        <img class="portafolio__img ${data.skills.includes("JavaScript") ? 'ligth__img' : ''}" 
                            src="${data.imgSrc}" alt="${data.title}">
                    </div>
                    <div class="container__info">
                        <h3 class="portafolio__subtitulo titulo__dark">${data.titulo}</h3>
                        <div class="skills__used">
                            ${data.skills.map(skill => `
                                <div class="tecnology">
                                    ${skillIcons[skill] || ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="portafolio__cara faceB  caja__dark__portafolio">
                    <p class="portafolio__descripcion titulo__dark">${data.descripcion}</p>
                    <div class="portafolio__botobnes">
                        <a href="${data.demoURL}"target="_blank" rel="nofollow noreferrer noopener">
                            <button class="portafolio__btn boton titulo__dark">
                                <span data-section="portafolio" data-value="demo">View Demo</span>
                            </button>
                        </a>
                        <a href="${data.repoURL}"target="_blank" rel="nofollow noreferrer noopener">
                            <button class="portafolio__btn boton titulo__dark">
                                <span data-section="portafolio" data-value="repo">View Repo</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            
        `;
    
        portafolioContainer.insertAdjacentHTML('beforeend', cardHTML);
    }
    
}
