function screenres() {
    const mainDiv = document.getElementById('main');
    const bodyDiv = document.body;
    const aspectRatio = 16 / 9;

    mainDiv.style.backgroundImage = `url("https://raw.githubusercontent.com/YuushaExa/game2/refs/heads/main/hd%20wallpapers%201080p%20forest__005.jpg")`;
    bodyDiv.style.backgroundColor = '#000'; // Fixed: added quotes around color
    
    // Initialize scaling
    resizeGameContainer(aspectRatio);
    window.addEventListener('resize', () => resizeGameContainer(aspectRatio));
}

function resizeGameContainer(aspectRatio) {
    const mainDiv = document.getElementById('main');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Calculate scale while maintaining aspect ratio
    const scale = Math.min(windowWidth / (mainDiv.offsetWidth || 1920), windowHeight / (mainDiv.offsetHeight || 1080));
    
    // Apply the scale to the main container (children will scale too)
    mainDiv.style.transform = `scale(${scale})`;
    
    // Center the game
    mainDiv.style.position = 'absolute';
    mainDiv.style.left = `${(windowWidth - mainDiv.offsetWidth * scale) / 2}px`;
    mainDiv.style.top = `${(windowHeight - mainDiv.offsetHeight * scale) / 2}px`;
}

screenres();
