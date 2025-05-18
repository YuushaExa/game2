function screenres() {
    const mainDiv = document.getElementById('main');
    const bodyDiv = document.body;
    const ASPECT_RATIO = 16 / 9; // 16:9 aspect ratio constant
    
    // Set base height based on window width to maintain aspect ratio
    const baseWidth = window.innerWidth;
    const baseHeight = baseWidth / ASPECT_RATIO;
    
    mainDiv.style.width = `${baseWidth}px`;
    mainDiv.style.height = `${baseHeight}px`;
    mainDiv.style.position = 'absolute';
    mainDiv.style.backgroundImage = `url("https://raw.githubusercontent.com/YuushaExa/game2/refs/heads/main/Image_fx%20(1).jpg")`;
    bodyDiv.style.backgroundColor = '#000';

    function updateScale() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        // Calculate available space's aspect ratio
        const windowAspect = windowWidth / windowHeight;
        
        // Determine scale factor
        let scale;
        if (windowAspect > ASPECT_RATIO) {
            // Window is wider than 16:9 - scale based on height
            scale = windowHeight / baseHeight;
        } else {
            // Window is taller than 16:9 - scale based on width
            scale = windowWidth / baseWidth;
        }
        
        // Apply scaling
        mainDiv.style.transform = `scale(${scale})`;
        mainDiv.style.transformOrigin = 'top left';
   
        // Center the scaled element
        const scaledWidth = baseWidth * scale;
        const scaledHeight = baseHeight * scale;
        mainDiv.style.left = `${(windowWidth - scaledWidth) / 2}px`;
        mainDiv.style.top = `${(windowHeight - scaledHeight) / 2}px`;
    }

    // Initial scale update
    updateScale();
    window.addEventListener('resize', updateScale);
}

screenres();
