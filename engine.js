function load_game(type, file) {
    fetch(file)
        .then(response => response.json())
        .then(data => {
            const mainDiv = document.getElementById('main');
            const params = data.parameters;
            const resolutions = params.resolutions;

            // Set base dimensions
            const baseWidth = resolutions[0] || 1280;
            const baseHeight = resolutions[1] || 720;

            // Apply critical styles to prevent white lines
            mainDiv.style.position = 'absolute';
            mainDiv.style.minWidth = baseWidth + 'px';
            mainDiv.style.minHeight = baseHeight + 'px';
            mainDiv.style.left = '0';
            mainDiv.style.top = '0';
            mainDiv.style.transformOrigin = '0 0';
            mainDiv.style.backgroundImage = `url(${resolutions[4]})`;
            mainDiv.style.backgroundSize = 'cover';
            mainDiv.style.backgroundPosition = 'center';
            mainDiv.style.overflow = 'hidden';
            mainDiv.style.imageRendering = 'pixelated'; // or 'crisp-edges'

            // Add these important properties to prevent bleeding
            mainDiv.style.backfaceVisibility = 'hidden';
            mainDiv.style.perspective = '1000px';
            mainDiv.style.outline = '1px solid transparent';
            mainDiv.style.transform = 'translateZ(0)';

            // Initialize scaling
            resizeGameContainer(baseWidth, baseHeight);
            window.addEventListener('resize', () => resizeGameContainer(baseWidth, baseHeight));
        })
        .catch(console.error);
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
