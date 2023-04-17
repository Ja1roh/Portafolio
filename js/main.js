let enlacesNav = document.getElementById("enlacesNav");
let botonesNav = document.getElementById("botonesNav");

let enlaces = `
                <a href="./About.html" class="letrasNav" style="padding-left: 20px;">Acerca de</a>
                <a href="./proyectos.html" class="letrasNav" style="padding-left: 20px;">Mis proyectos</a>
                `
let btnNav = `
            <a href="https://github.com/Ja1roh" class="btnNav" target="_blank"><img src="./src/gitHubLogo.png" alt="gitHub" id="gitHub"></a>
            <a href="https://www.linkedin.com/in/jair-ibarra-partida/" class="btnNav" target="_blank"><img src="./src/linkedInLogo.png" alt="lnkIn" id="lnkIn"></a>
`

window.addEventListener("load", function (event) {
    event.preventDefault;
    enlacesNav.insertAdjacentHTML("beforeend", enlaces);
    botonesNav.insertAdjacentHTML("beforeend", btnNav);

}); 