function getScript(src) {
    var scriptObj = document.createElement('script');
    scriptObj.src = src;
    scriptObj.type = 'text/javascript';
    document.body.appendChild(scriptObj);
}

window.onload = function () {
    /**
     * animation background
     */
    var div = document.createElement('div');
    div.id = 'particles-js';
    document.getElementsByClassName('book')[0].appendChild(div);

    getScript('https://aleen42.gitbooks.io/personalwiki/content/src/jquery-2.1.4.min.js');
    getScript('https://aleen42.gitbooks.io/personalwiki/content/src/application.js');
    
    setTimeout(function () {
        div.setAttribute('style', 'opacity:1;');
    }, 500);
    
    /**
     * overlay icon
     */
    var overlayIcon = document.createElement('div');
    overlayIcon.id = 'overlay-icon';
    document.getElementsByClassName('summary')[0].appendChild(overlayIcon);
    overlayIcon.addEventListener('click', function () {
        div.setAttribute('style', 'opacity: 0;');
    
        div.setAttribute('style', 'z-index:99; opacity: 1;');
        
        setTimeout(function () {
            div.setAttribute('style', 'opacity:1; z-index:0;');
        }, 5000);
    });
};