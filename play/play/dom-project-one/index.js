
const icons = document.querySelectorAll('.favorite-icon');

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('filled');

        if (icon.classList.contains('filled')) {
            icon.innerHTML = '&#10084;'; 
        } else {
            icon.innerHTML = '&#9825;';
        }
    });
});

