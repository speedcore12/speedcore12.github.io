const speed = 10;
const speedProgression = 500;

const delayLoader = 9500;

async function loadAndDisplayExperience(key) {

    const list = await loadData(key);
    for (let index = 0; index < list.length; index++) {
        var newComponent = createComponent(key, key + index);
        document.querySelector('.' + key).appendChild(newComponent);
        await displayText(newComponent.querySelector('.child1'), list[index].temps, speed, 'p');
        await displayText(newComponent.querySelector('.child2'), list[index].titre, speed, 'h2');
        await displayText(newComponent.querySelector('.child2'), list[index].entreprise, speed, 'p');
        await displayText(newComponent.querySelector('.child2'), list[index].lieu, speed, 'p');
        await displayText(newComponent.querySelector('.child2'), list[index].description, speed, 'p');
    };
};

async function loadAndDisplayCoord(key) {

    const list = await loadData(key);
    for (let index = 0; index < list.length; index++) {
        var newComponent = createComponent(key, key + index);
        document.querySelector('.' + key).appendChild(newComponent);

        if(list[index].lien){
            await displayLinkText(newComponent.querySelector('.child2'), list[index], speed);
            //console.log(list[index].nom + " : a un lien");
        }else{
            await displayText(newComponent.querySelector('.child2'), list[index].nom, speed, 'p');
        }
    };
};

async function loadAndDisplaylanguage(key) {
    const list = await loadData(key);
    for (let index = 0; index < list.length; index++) {
        const newComponent = createComponent(key, key + index);
        const container = document.querySelector('.' + key);
        if (container) {
            container.appendChild(newComponent);
            await displayText(newComponent.querySelector('.child1'), list[index].titre, speed, 'h2');
            // Assure-toi que la fonction attachProgressBar est adaptée pour accepter un élément
            await attachProgressBar(newComponent.querySelector('.child2'), list[index].lvl, speedProgression);
        }
    }
}

function addBorderBottomToElement(element) {
    var myElement = document.getElementById(element);
    myElement.style.borderBottom = "2px dashed #39FF14";
}

//loadAndDisplayCoord("coordonees");

setTimeout(() => {
    // Affichage de la section ExpPro après le délai spécifié
    typeTitle("expProTitre", "Expériences Professionnelles", speed, function() {
        addBorderBottomToElement("expProTitre");
        loadAndDisplayExperience("experiencePro");
    });

    // Affichage de la section Formation après le même délai
    typeTitle("formationTitre", "Formations", speed, function() {
        addBorderBottomToElement("formationTitre");
        loadAndDisplayExperience("formation");
    });

    // Affichage de la section Languages après le même délai
    typeTitle("languageTitre", "Languages", speed, function() {
        addBorderBottomToElement("languageTitre");
        loadAndDisplaylanguage("language");
    });

    
    typeTitle("coordTitre", "Coordonées", speed, function() {
        addBorderBottomToElement("coordTitre");
        loadAndDisplayCoord("coordonees");
    });

    revealImage(5, 300, 100);

}, delayLoader);
