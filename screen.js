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

            mainDiv.style.minWidth = baseWidth + 'px';
            mainDiv.style.minHeight = baseHeight + 'px';
            mainDiv.style.backgroundImage = `url(${resolutions[4]})`;

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
