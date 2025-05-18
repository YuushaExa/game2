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
    
    // Calculate optimal dimensions based on window size and aspect ratio
    let width, height;
    
    if (windowWidth / windowHeight > aspectRatio) {
        // Window is wider than 16:9 - scale based on height
        height = windowHeight;
        width = height * aspectRatio;
    } else {
        // Window is taller than 16:9 - scale based on width
        width = windowWidth;
        height = width / aspectRatio;
    }
    
    // Apply the dimensions
    mainDiv.style.width = `${width}px`;
    mainDiv.style.height = `${height}px`;
    
    // Center the game
    mainDiv.style.position = 'absolute';
    mainDiv.style.left = `${(windowWidth - width) / 2}px`;
    mainDiv.style.top = `${(windowHeight - height) / 2}px`;
}

screenres();
