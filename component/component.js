/**
 * Crée un composant personnalisé composé d'un élément parent div contenant trois divs enfants.
 * @param {string} componentClassName - Nom de classe à ajouter à l'élément parent pour une stylisation générale.
 * @param {string} componentClassNameSpecial - Nom de classe supplémentaire pour des styles spécifiques ou pour une identification unique.
 * @returns {Element} L'élément parent div contenant les trois divs enfants configurés.
 */
function createComponent(componentClassName, componentClassNameSpecial) {
  // Crée l'élément div parent qui va contenir les enfants.
  var parentDiv = document.createElement('div');

  // Ajoute une classe générale pour tous les composants et des classes spécifiques fournies en argument.
  parentDiv.classList.add("component" + componentClassName, "component" + componentClassNameSpecial, "component");  

  // Crée le premier div enfant et lui assigne une classe pour une stylisation spécifique ou identification.
  var childDiv1 = document.createElement('div');
  childDiv1.className = 'child1';

  // Répète le processus pour le deuxième enfant.
  var childDiv2 = document.createElement('div');
  childDiv2.className = 'child2';

  // Ajoute les divs enfants créés à l'élément parent div.
  parentDiv.appendChild(childDiv1);
  parentDiv.appendChild(childDiv2);

  // Retourne l'élément parent div, maintenant peuplé avec les trois enfants.
  return parentDiv;
}