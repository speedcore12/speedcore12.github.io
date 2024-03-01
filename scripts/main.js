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

    var newComponent = createComponent(key, key + 0);
    document.querySelector('.' + key).appendChild(newComponent);

    for (let index = 0; index < list.length; index++) {


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

async function loadAndDisplayheader(key) {

    const list = await loadData(key);
    var newComponent = createComponent(key, key+0);
    document.querySelector('.' + key).appendChild(newComponent);
    for (let index = 0; index < list.length; index++) {
        await displayText(newComponent.querySelector('.child2'), list[index], speed, 'p');
    }
}

function addBorderBottomToElement(element) {
    var myElement = document.getElementById(element);
    myElement.style.borderBottom = "2px dashed #39FF14";
}




setTimeout(() => {

    typeTitle("expProTitre", "Expériences Professionnelles", speed, function() {
        addBorderBottomToElement("expProTitre");
        loadAndDisplayExperience("experiencePro");
    });

    typeTitle("formationTitre", "Formations", speed, function() {
        addBorderBottomToElement("formationTitre");
        loadAndDisplayExperience("formation");
    });

    typeTitle("languageTitre", "Languages", speed, function() {
        addBorderBottomToElement("languageTitre");
        loadAndDisplaylanguage("language");
    });
    
    typeTitle("coordTitre", "Coordonnées", speed, function() {
        addBorderBottomToElement("coordTitre");
        loadAndDisplayCoord("coordonnees");
    });

    typeTitle("enTeteTitre", "À propos de ce CV", speed, function() {
        addBorderBottomToElement("enTeteTitre");
        loadAndDisplayheader("enTete");
    });

    typeTitle("langueTitre", "Langues", speed, function() {
        addBorderBottomToElement("langueTitre");
        loadAndDisplaylanguage("langue");
    });

    typeTitle("skillTitre", "Skills", speed, function() {
        addBorderBottomToElement("skillTitre");
        loadAndDisplayheader("skill");
    });

    typeTitle("hobbyTitre", "Hobbys", speed, function() {
        addBorderBottomToElement("hobbyTitre");
        loadAndDisplayheader("hobby");
    });

    revealImage(5, 300, 100);

}, delayLoader);
