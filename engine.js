function load_game(type, file) {
    fetch(file)
        .then(response => response.json())
        .then(data => {
            const mainDiv = document.getElementById('main');
            const bodyDiv = document.body;
            const params = data.parameters;
            const resolutions = params.resolutions;
            
            // Set initial styles
            mainDiv.style.position = 'absolute';
            mainDiv.style.top = '50%';
            mainDiv.style.left = '50%';
            mainDiv.style.transform = 'translate(-50%, -50%)';
            mainDiv.style.overflow = 'hidden';
            mainDiv.style.backgroundImage = `url(${resolutions[4]})`;
            mainDiv.style.backgroundSize = 'cover';
            mainDiv.style.backgroundPosition = 'center';
            
            // Set initial dimensions based on the aspect ratio
            resizeGameContainer();
            
            // Add event listener for window resize
            window.addEventListener('resize', resizeGameContainer);
        })
        .catch(error => console.error('Error loading game:', error));
}

function resizeGameContainer() {
    const mainDiv = document.getElementById('main');
    const aspectRatio = 16/9;
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let windowAspectRatio = windowWidth / windowHeight;
    
    if (windowAspectRatio > aspectRatio) {
        // Window is wider than 16:9 - scale based on height
        mainDiv.style.height = '90vh'; // 90% of viewport height
        mainDiv.style.width = `calc(90vh * ${aspectRatio})`;
    } else {
        // Window is taller than 16:9 - scale based on width
        mainDiv.style.width = '90vw'; // 90% of viewport width
        mainDiv.style.height = `calc(90vw / ${aspectRatio})`;
    }
}
