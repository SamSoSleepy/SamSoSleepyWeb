document.addEventListener('DOMContentLoaded', (event) => {
    const freeAddonBtn = document.getElementById('freeAddonBtn');
    const boxContainer = document.getElementById('box-container');

    freeAddonBtn.addEventListener('click', (e) => {
        e.preventDefault(); // ป้องกันการเปลี่ยนหน้าเมื่อคลิก

        if (boxContainer.classList.contains('hidden')) {
            boxContainer.classList.remove('hidden');
        } else {
            boxContainer.classList.add('hidden');
        }
    });
});
