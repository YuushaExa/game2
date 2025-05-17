function load_game(type, file) {
    fetch(file)
        .then(response => response.json())
        .then(data => {
            const mainDiv = document.getElementById('main');
            const bodyDiv = document.body;
            const params = data.parameters;
            const resolutions = params.resolutions;

            // Set base dimensions (16:9 aspect ratio)
            const baseWidth = resolutions[0] || 1280;
            const baseHeight = resolutions[1] || 720;
            
            // Apply initial styles
            mainDiv.style.position = 'absolute';
            mainDiv.style.width = baseWidth + 'px';
            mainDiv.style.height = baseHeight + 'px';
            mainDiv.style.left = '50%';
            mainDiv.style.top = '50%';
            mainDiv.style.transformOrigin = 'left top';
            mainDiv.style.backgroundImage = `url(${resolutions[4]})`;
            mainDiv.style.backgroundSize = 'cover';
            mainDiv.style.backgroundPosition = 'center';
            
            // Initial resize
            resizeGameContainer(baseWidth, baseHeight);
            
            // Add event listener for window resize
            window.addEventListener('resize', () => resizeGameContainer(baseWidth, baseHeight));
        })
        .catch(error => console.error('Error loading game:', error));
}

function resizeGameContainer(baseWidth, baseHeight) {
    const mainDiv = document.getElementById('main');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Calculate scale factors for width and height
    const scaleX = windowWidth / baseWidth;
    const scaleY = windowHeight / baseHeight;
    
    // Use the smaller scale to maintain aspect ratio
    const scale = Math.min(scaleX, scaleY);
    
    // Calculate new dimensions
    const newWidth = baseWidth * scale;
    const newHeight = baseHeight * scale;
    
    // Position the element (centered)
    const left = (windowWidth - newWidth) / 2;
    const top = (windowHeight - newHeight) / 2;
    
    // Apply transformations
    mainDiv.style.left = left + 'px';
    mainDiv.style.top = top + 'px';
    mainDiv.style.transform = `scale(${scale})`;
    
    // Optional: Adjust transform-origin based on position
    if (scale === scaleX) {
        // Limited by width (extra height available)
        mainDiv.style.transformOrigin = 'left top';
    } else {
        // Limited by height (extra width available)
        mainDiv.style.transformOrigin = 'left top';
    }
}
