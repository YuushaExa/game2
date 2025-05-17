function screenres(type, resolutions) {
    const mainDiv = document.getElementById('main');

    const baseWidth = 1920;
    const baseHeight = 1080;

    mainDiv.style.minWidth = baseWidth + 'px';
    mainDiv.style.minHeight = baseHeight + 'px';
    mainDiv.style.backgroundImage = `url("https://raw.githubusercontent.com/YuushaExa/game2/refs/heads/main/hd%20wallpapers%201080p%20forest__005.jpg")`;

    // Initialize scaling
    resizeGameContainer(baseWidth, baseHeight);
    window.addEventListener('resize', () => resizeGameContainer(baseWidth, baseHeight));
}

function resizeGameContainer(baseWidth, baseHeight) {
    const mainDiv = document.getElementById('main');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Calculate scale while maintaining aspect ratio
    const scale = Math.min(windowWidth / baseWidth, windowHeight / baseHeight);
    
    // Apply transform with anti-bleeding technique
    mainDiv.style.transform = `scale(${scale}) translate(calc(50vw/${scale} - 50%), calc(50vh/${scale} - 50%))`;
}
