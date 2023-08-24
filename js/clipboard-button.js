const clipboardButtons = document.querySelectorAll('.clipboard-button');
for (let i = 0; i < clipboardButtons.length; i++){
    const clipboardButton = clipboardButtons[i];
    clipboardButton.addEventListener('click', async event => {
        event.preventDefault();
        var str;
        var selector = event.target.getAttribute('data-copy-selector');
        var copy_el = document.querySelector(selector);
        if ( copy_el ){
            str = copy_el.innerText;
        } else {
            str = event.target.getAttribute('data-copy-text'); 
        }
        var el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        event.target.classList.add( 'copied' );
        document.body.removeChild(el);
        var temp = setInterval( function(){
            event.target.classList.remove( 'copied' );
            clearInterval(temp);
        }, 800 );
    });
}
