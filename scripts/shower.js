


/**
 * Charge les données depuis un fichier JSON en fonction de la clé spécifiée.
 * @param {string} key - La clé des données à récupérer dans le fichier JSON.
 * @returns {Promise} Une promesse qui résout avec les données récupérées ou un tableau vide en cas d'erreur.
 */
function loadData(key) {
    // Utilise fetch pour faire une requête GET au fichier JSON spécifié.
    return fetch("../data/data.json")
        .then(response => response.json()) // Convertit la réponse en objet JSON.
        .then(data => data[key] || []) // Récupère la valeur associée à la clé spécifiée. Retourne un tableau vide si la clé n'existe pas.
        .catch(error => {
            // Affiche une erreur dans la console si la requête ou la conversion JSON échoue.
            console.error('Erreur lors de la récupération des données:', error);
            return []; // Retourne un tableau vide en cas d'erreur.
        });
}



/**
 * Écrit du texte dans un élément du DOM, lettre par lettre, à une vitesse donnée.
 * @param {string} elementId - L'ID de l'élément du DOM où le texte sera écrit.
 * @param {string} text - Le texte à écrire.
 * @param {number} speed - La vitesse d'écriture (en millisecondes) entre chaque lettre.
 * @param {Function} callback - Une fonction callback à exécuter une fois le texte entièrement écrit.
 */
function typeTitle(elementId, text, speed, callback) {
    // Récupère l'élément du DOM par son ID.
    const element = document.getElementById(elementId);
    let index = 0; // Index pour suivre la progression de l'écriture du texte.

    function typeLetter() {
        if (index < text.length) {
            // Ajoute la lettre courante au contenu HTML de l'élément et incrémente l'index.
            element.innerHTML += text.charAt(index);
            index++;
            // Planifie la prochaine lettre à être ajoutée après un délai défini par 'speed'.
            setTimeout(typeLetter, speed);
        } else if (callback) {
            // Si un callback est fourni, l'exécute une fois tout le texte écrit.
            callback();
        }
    }

    // Commence l'écriture du texte.
    typeLetter();
}



/*
/**
 * Affiche du texte lettre par lettre dans un nouvel élément enfant du DOM spécifié, à une vitesse donnée.
 * @param {Element} element - L'élément parent où le nouvel élément contenant le texte sera ajouté.
 * @param {string} text - Le texte à afficher lettre par lettre.
 * @param {number} speed - La vitesse à laquelle les lettres sont ajoutées (en millisecondes).
 * @param {string} tagName - Le nom de la balise pour le nouvel élément qui contiendra le texte.
 * @returns {Promise} Une promesse qui résout une fois que tout le texte est affiché.
 */

function displayText(element, text, speed, tagName) {
    return new Promise((resolve) => {
        // Crée un nouvel élément du type spécifié par 'tagName'.
        const textElement = document.createElement(tagName);
        // Ajoute le nouvel élément créé comme enfant de l'élément parent spécifié.
        element.appendChild(textElement);

        function displayLetter(index) {
            if (index < text.length) {
                // Ajoute la lettre courante au texte de l'élément et planifie l'ajout de la prochaine lettre.
                textElement.textContent += text[index];
                setTimeout(() => displayLetter(index + 1), speed);
            } else {
                // Une fois tout le texte affiché, résout la promesse.
                resolve();
            }
        }

        // Commence l'affichage du texte lettre par lettre.
        displayLetter(0);
    });
}


/**
 * Affiche du texte lettre par lettre dans un nouvel élément enfant du DOM spécifié, à une vitesse donnée,
 * et, si l'élément est un lien (a), utilise l'URL fournie dans l'objet text.
 * @param {Element} element - L'élément parent où le nouvel élément contenant le texte sera ajouté.
 * @param {string|Object} text - Le texte à afficher lettre par lettre, ou un objet contenant le texte et l'URL si c'est un lien.
 * @param {number} speed - La vitesse à laquelle les lettres sont ajoutées (en millisecondes).
 * @param {string} tagName - Le nom de la balise pour le nouvel élément qui contiendra le texte.
 * @returns {Promise} Une promesse qui résout une fois que tout le texte est affiché.
 */
/*
function displayText(element, text, speed, tagName) {
    return new Promise((resolve) => {
        const textElement = document.createElement(tagName);
        
        let displayText = text; // Texte à afficher

        // Si l'élément est un lien et text est un objet avec une propriété 'lien', configure le href et target.
        if (tagName.toLowerCase() === 'a' && typeof text === 'object' && text.lien) {
            textElement.href = text.lien;
            textElement.target = "_blank";
            displayText = text.nom; // Utilise 'nom' comme le texte du lien
        }

        element.appendChild(textElement);

        let index = 0; // Initialisation de l'index pour suivre la progression du texte

        function displayLetter() {
            if (index < displayText.length) {
                textElement.textContent += displayText.charAt(index);
                index++;
                setTimeout(displayLetter, speed);
            } else {
                resolve();
            }
        }

        displayLetter();
    });
}*/
/*
function displayText(element, text, speed, tagName) {
    return new Promise((resolve) => {
        const textElement = document.createElement(tagName);
        
        // Gère le cas où 'text' est un objet contenant du texte et une URL
        let displayText = text; // Utilise directement 'text' si c'est une chaîne
        if (typeof text === 'object' && text.text && tagName.toLowerCase() === 'a') {
            displayText = text.text; // Utilise la propriété 'text' de l'objet
            textElement.href = text.url; // Assigne l'URL à href
            textElement.target = "_blank"; // Ouvre le lien dans un nouvel onglet
        }

        element.appendChild(textElement);

        let index = 0;

        function displayLetter() {
            if (index < displayText.length) {
                textElement.textContent += displayText.charAt(index);
                index++;
                setTimeout(displayLetter, speed);
            } else {
                resolve();
            }
        }

        displayLetter();
    });
}*/

/**
 * Affiche du texte lettre par lettre dans un nouvel élément <a> du DOM spécifié, avec un lien donné.
 * @param {Element} element - L'élément parent où le nouvel élément <a> sera ajouté.
 * @param {Object} content - Objet contenant 'nom' comme texte du lien et 'lien' comme URL du lien.
 * @param {number} speed - La vitesse à laquelle les lettres sont ajoutées (en millisecondes).
 * @returns {Promise} Une promesse qui résout une fois que tout le texte est affiché.
 */
function displayLinkText(element, content, speed) {
    return new Promise((resolve) => {
        // Crée un nouvel élément <a>, configure son href et target.
        const linkElement = document.createElement('a');
        linkElement.href = content.lien; // Utilise 'lien' pour l'attribut href.
        linkElement.target = '_blank'; // Ouvre le lien dans un nouvel onglet.

        // Ajoute le nouvel élément <a> comme enfant de l'élément parent spécifié.
        element.appendChild(linkElement);

        function displayLetter(index) {
            if (index < content.nom.length) {
                // Ajoute la lettre courante au texte de l'élément et planifie l'ajout de la prochaine lettre.
                linkElement.textContent += content.nom.charAt(index);
                setTimeout(() => displayLetter(index + 1), speed);
            } else {
                // Une fois tout le texte affiché, résout la promesse.
                resolve();
            }
        }

        // Commence l'affichage du texte lettre par lettre.
        displayLetter(0);
    });
}

/**
 * Attache une barre de progression à un élément du DOM et anime son remplissage.
 * @param {Element} element - L'élément du DOM auquel la barre de progression sera attachée.
 * @param {number} percentage - Le pourcentage de remplissage désiré.
 * @param {number} speed - La durée de l'animation en millisecondes.
 * @returns {Promise} Une promesse qui se résout une fois l'animation terminée.
 */
function attachProgressBar(element, percentage, speed) {
    return new Promise((resolve) => {
        if (!element) {
            console.error("Invalid element provided");
            resolve(); // Résout la promesse même en cas d'erreur
            return;
        }

        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';

        const progressFill = document.createElement('div');
        progressFill.className = 'progress-fill';
        progressBar.appendChild(progressFill);

        element.appendChild(progressBar);

        // Démarre l'animation avec un délai minimal pour assurer le rendu initial
        setTimeout(() => {
            progressFill.style.width = percentage + '%';
            progressFill.style.transition = `width ${speed}ms ease-in-out`;

            // Utilise un autre setTimeout basé sur la vitesse pour résoudre la promesse une fois l'animation terminée
            setTimeout(() => {
                resolve(); // Résout la promesse après l'animation
            }, speed);
        }, 1);
    });
}

/**
 * Affiche progressivement une image de haut en bas.
 * @param {number} lineHeight - La hauteur de chaque "ligne" révélée à chaque intervalle, en pixels.
 * @param {number} totalHeight - La hauteur totale de l'image à révéler, en pixels.
 * @param {number} interval - Le temps entre chaque augmentation de hauteur, en millisecondes.
 */
function revealImage(lineHeight, totalHeight, interval) {
    // Sélectionne le conteneur de l'image par son ID.
    const container = document.getElementById('imageContainer');
    // Initialise la hauteur courante à 0. C'est la hauteur que le conteneur aura initialement.
    let currentHeight = 0;

    // Utilise setInterval pour créer un effet répétitif.
    const timer = setInterval(() => {
        // Augmente la hauteur courante par la hauteur de ligne spécifiée à chaque intervalle.
        currentHeight += lineHeight;
        // Applique la nouvelle hauteur au style du conteneur pour révéler une partie de l'image.
        container.style.height = `${currentHeight}px`;

        // Vérifie si la hauteur courante a atteint ou dépassé la hauteur totale de l'image.
        if (currentHeight >= totalHeight) {
            // Si oui, arrête l'intervalle pour ne plus augmenter la hauteur.
            clearInterval(timer);
            // Réinitialise la hauteur du conteneur à 'auto' pour s'assurer que toute l'image est visible.
            container.style.height = 'auto';
        }
    }, interval); // L'intervalle entre chaque exécution, en millisecondes.
}