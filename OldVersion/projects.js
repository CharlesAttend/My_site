const divID = ['Home', 'MusicSync', 'Todo', 'RecipeChooser', 'Personalites', 'SmartMirror', 'PortableSmartTV', 'Plante'];
const buttonText = ['Home', 'MusicSync', 'Todo', 'Recipe Chooser', 'Personalités', 'Smart Mirror', 'Portable Smart TV', 'Plante Connecté'];
let lastScrollTop = 0;
let ticking = false;

const getThingsUp = () => {
    createButton(buttonText, divID);
    createResponsiveButton(buttonText, divID);
    autoScroll(0);
    window.addEventListener('keydown', (e) => {
        if (e.key == 'ArrowUp') {
            e.preventDefault()
            autoScroll(-1);
        }
        else if(e.key == 'ArrowDown'){
            e.preventDefault();
            autoScroll(1);
        }
    })
    const storyButtonList = document.querySelectorAll('.storyButton');
    storyButtonList.forEach((elm) => {
        elm.addEventListener('click', showStory);
    });
}
window.addEventListener("load", getThingsUp)

const showStory = (e) => {
    const id = e.target.parentElement.parentElement.id;
    const storyElm = document.querySelector("#" + id+" > .story");
    const sectionTextElm = document.querySelector("#" + id+" > .sectionText");
    if(sectionTextElm.id == ''){
        sectionTextElm.id = 'hidden';
        storyElm.id = '';
        e.target.innerText = 'Retour'
    } else {
        sectionTextElm.id = '';
        storyElm.id = 'hidden';
        e.target.innerText = "Voir l'histoire du projet ;)";
    }
}

const createButton = (buttonText, divID) => {
        const menu = document.getElementById('menu');
        for (let i = 0; i < divID.length; i++) {
            let text = buttonText[i];
            let id = divID[i];
            console.log('Creating button ' + text);

            let li = document.createElement('li');
            li.className = 'button';
            li.setAttribute('scrollTo', id)
            li.addEventListener('click', pageScrollTo)
            li.innerText = text;

            // let a = document.createElement('a');
            //a.href = '#'+id;
            // a.innerText = text;
            // li.appendChild(a);

            menu.appendChild(li);
        };
    }

const createResponsiveButton = (buttonText, divID) => {
        const menu = document.getElementById('responsiveMenu');
        for (let i = 0; i < divID.length; i++) {
            let text = buttonText[i];
            let id = divID[i];
            console.log('Creating button ' + text);

            let li = document.createElement('li');
            li.className = 'responsiveButton';
            li.setAttribute('scrollTo', id)
            li.addEventListener('click', pageScrollTo)
            li.innerText = text;

            // let a = document.createElement('a');
            //a.href = '#'+id;
            // a.innerText = text;
            // li.appendChild(a);

            menu.appendChild(li);
        };
    }

const pageScrollTo = (event) => {
        //kick off responçive menu
        if (window.matchMedia('(max-width: 600px)').matches) {
            showResponsiveMenu();
        }
        elm = document.querySelector('#' + event.target.getAttribute("scrollTo"));
        elm.scrollIntoView({ behavior: "smooth" });
    }

    let currentDiv = 0;
const autoScroll = (i) => {
        if ((currentDiv == 0) && (i == -1)) {
            currentDiv = divID.length - 1;
        }
        else if (currentDiv == divID.length - 1 && i == 1) {
            currentDiv = 0;
        }
        else {
            currentDiv = currentDiv + i;
        }
        elm = document.querySelector('#' + divID[currentDiv]);
        elm.scrollIntoView({ behavior: "smooth" });
    }

const showResponsiveMenu = () => {
        let icon = document.getElementById("topnav_hamburger_icon");
        let menu = document.querySelector('#responsiveMenu');
        let navButton = document.querySelector('.navButton');
        if (menu.className == "open") {
            console.log('hidding menu');
            menu.className = "";
            icon.className = "";
            navButton.id = "";
        } else {
            console.log('showning menu');
            icon.className = "open";
            menu.className = "open";
            navButton.id = 'hidden';
        }
    }