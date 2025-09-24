document.addEventListener('DOMContentLoaded', (event) => {
    const freeAddonBtn = document.getElementById('freeAddonBtn');
    const boxContainer = document.getElementById('box-container');
    const mainContent = document.getElementById('main-content');

    freeAddonBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (boxContainer.classList.contains('hidden')) {
            boxContainer.classList.remove('hidden');
            mainContent.classList.add('hidden');
        } else {
            boxContainer.classList.add('hidden');
            mainContent.classList.remove('hidden');
        }
    });
});
