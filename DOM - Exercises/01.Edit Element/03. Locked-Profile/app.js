function lockedProfile() {

    Array.from(document.querySelectorAll('.profile button'))
    .forEach(el => el.addEventListener('click', hideOrShow))


    function hideOrShow(e) {
        const profile = e.target.parentElement;
        let isActive = profile.querySelector('input[type="radio"]').nextSibling.nextSibling.nextSibling.nextSibling.checked;
        
        if (isActive) {
            let div = profile.querySelector('div');

            if (e.target.textContent == 'Show more') {
                div.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                div.style.display = '';
                e.target.textContent = 'Show more';
            }
        }
    }
}