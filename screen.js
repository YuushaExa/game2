function screenres() {
    const mainDiv = document.getElementById('main');
    const bodyDiv = document.body;
    const ASPECT_RATIO = 16 / 9; // Aspect ratio constant
    
    mainDiv.style.backgroundImage = `url("https://raw.githubusercontent.com/YuushaExa/game2/refs/heads/main/Image_fx%20(1).jpg")`;
    bodyDiv.style.backgroundColor = '#000';
    
    // Initialize scaling
    resizeGameContainer(ASPECT_RATIO);
    window.addEventListener('resize', () => resizeGameContainer(ASPECT_RATIO));
}

function resizeGameContainer(aspectRatio) {
    const mainDiv = document.getElementById('main');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Calculate dimensions to maintain aspect ratio
    let width, height;
    
    if (windowWidth / windowHeight > aspectRatio) {
        // Window is wider than 16:9 - constrain by height
        height = windowHeight;
        width = height * aspectRatio;
    } else {
        // Window is taller than 16:9 - constrain by width
        width = windowWidth;
        height = width / aspectRatio;
    }
    
    // Apply dimensions and center
    mainDiv.style.width = `${width}px`;
    mainDiv.style.height = `${height}px`;
    mainDiv.style.position = 'absolute';
    mainDiv.style.left = `${(windowWidth - width) / 2}px`;
    mainDiv.style.top = `${(windowHeight - height) / 2}px`;
}

screenres();
