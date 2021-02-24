const divID = ['Home', 'Presentation', 'Projets', 'Contact'];
const buttonText = ['Home', 'Presentation', 'Projets', 'Contact'];
let lastScrollTop = 0;
let ticking = false;

const getThingsUp = () => {
    createButton(buttonText, divID);
    createResponsiveButton(buttonText, divID);
    autoScroll(0);
    window.addEventListener('keydown', (e) => {
        if (e.key == 'ArrowUp') {
            e.preventDefault()
            console.log('up');
            autoScroll(-1);
        }
        else if(e.key == 'ArrowDown'){
            e.preventDefault();
            console.log('down');
            autoScroll(1);
        }
    })
}

window.addEventListener("load", getThingsUp)

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
    if (window.matchMedia('(max-width: 600px)').matches){
        showResponsiveMenu();
    }
    elm = document.querySelector('#' + event.target.getAttribute("scrollTo"));
    elm.scrollIntoView({ behavior: "smooth" });
}

let currentDiv = 0;
const autoScroll = (i) => {
    console.log('i= ', i);
    console.log('currenDiv= ', currentDiv, divID[currentDiv]);
    if ((currentDiv == 0) && (i == -1)) {
        currentDiv = divID.length - 1;
    }
    else if (currentDiv == divID.length - 1 && i == 1) {
        currentDiv = 0;
    }
    else {
        currentDiv = currentDiv + i;
    }
    console.log(currentDiv, divID[currentDiv]);
    elm = document.querySelector('#' + divID[currentDiv]);
    elm.scrollIntoView({ behavior: "smooth" });
}

const showResponsiveMenu = () => {
    const icon = document.querySelector("#topnav_hamburger_icon");
    const menu = document.querySelector('#responsiveMenu');
    const navButton = document.querySelector('.navButton');
    const social = document.querySelector('#social');

    if (menu.className == "open") {
        console.log('hidding menu');
        menu.className = "";
        icon.className = "";
        navButton.id = "";
        social.className = "";
    } else {
        console.log('showning menu');
        icon.className = "open";
        menu.className = "open";
        navButton.id = 'hidden';
        social.className = "hidden";
    }
}

const copyToClipboard = (text, s) => {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copying to clipboard was successful!');
        outFunc(s)
    }, function (err) {
        console.error('Could not copy text: ', err);
    });
}

const outFunc = (s) => {
    let tooltip = document.getElementById("myTooltip" + s);
    tooltip.innerHTML = "Copied to clipboard! ";
}