function screenres() {
    const mainDiv = document.getElementById('main');
    const bodyDiv = document.body;
    const baseWidth = 1920;
    const baseHeight = 1080;

    mainDiv.style.minWidth = baseWidth + 'px';
    mainDiv.style.minHeight = baseHeight + 'px';
    mainDiv.style.backgroundImage = `url("https://raw.githubusercontent.com/YuushaExa/game2/refs/heads/main/hd%20wallpapers%201080p%20forest__005.jpg")`;
    bodyDiv.style.backgroundColor = #000;
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
    
    // Apply the scale
    mainDiv.style.transform = `scale(${scale})`;
    
    // Center the game
    mainDiv.style.left = `${(windowWidth - baseWidth * scale) / 2}px`;
    mainDiv.style.top = `${(windowHeight - baseHeight * scale) / 2}px`;
}

screenres()
