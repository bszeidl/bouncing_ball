function pageLoaded() {
    const rootDiv = document.getElementById('root');

    rootDiv.insertAdjacentHTML('afterbegin', '<img src="./soccer.svg" alt="soccer" class="soccer">')

};

window.addEventListener('load', pageLoaded);