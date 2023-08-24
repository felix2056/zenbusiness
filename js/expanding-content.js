const expandButtons = document.querySelectorAll('.expand-toggle');
for (let i = 0; i < expandButtons.length; i++){
    const expandButton = expandButtons[i];
    expandButton.addEventListener('click', async event => {
        event.preventDefault();
        const block_container =  event.target.closest('.zb-expanding-content');
        const toggle = block_container.querySelector('.expand-toggle');
        if(block_container.classList.contains('open')){
            toggle.querySelector('.toggle-text').innerText = toggle.getAttribute('data-expand-text');
            block_container.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', toggle.getAttribute('data-expand-text'));
            window.scrollTo({top: block_container.offsetTop,left: 0,behavior: 'smooth'});
        } else {
            toggle.querySelector('.toggle-text').innerText = toggle.getAttribute('data-collapse-text');
            block_container.classList.add('open');
            toggle.setAttribute('aria-expanded', 'true');
            toggle.setAttribute('aria-label', toggle.getAttribute('data-collapse-text'));
        } 
    });
}