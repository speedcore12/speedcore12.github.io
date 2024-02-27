document.addEventListener('DOMContentLoaded', () => {
    loadBoot().then(() => {
        setTimeout(() => {
            document.getElementById('loaderContainer').classList.add('hidden'); // Cache le loader
        }, 1000); // Ajuste ce délai selon le temps réel nécessaire pour charger et afficher le contenu
    });
});

async function loadBoot() {

    const speedLoader = 10;
    const list = await loadData("bootSequence");
    const loader = document.querySelector('.loader');

    for (let index = 0; index < list.length; index++) {
        await displayText(loader, list[index], speedLoader, 'p');
    }
}

