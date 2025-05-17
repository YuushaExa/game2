function load_game(type, file) {
    fetch(file)
        .then(response => response.json())
        .then(data => {
            const mainDiv = document.getElementById('main');
            const bodyDiv = document.body;
            const params = data.parameters;
            const resolutions = params.resolutions;
            const width = resolutions[0];
            const height = resolutions[1];
            
            // Apply styles to the main div
            mainDiv.style.width = width + 'px';
            mainDiv.style.height = height + 'px';
            mainDiv.style.position = 'absolute';
            mainDiv.style.left = '50%';
            mainDiv.style.top = '50%';
            mainDiv.style.transformOrigin = 'center center';
            mainDiv.style.backgroundImage = `url(${resolutions[4]})`;
            
            bodyDiv.style.backgroundColor = resolutions[2];
            bodyDiv.style.backgroundImage = `url(${resolutions[3]})`;
            bodyDiv.style.backgroundSize = 'cover';
            bodyDiv.style.backgroundPosition = 'center';
            bodyDiv.style.backgroundRepeat = 'no-repeat';
            
            // Function to handle resizing
            function resize() {
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;
                
                // Calculate scale to fit width or height
                const scale = Math.min(
                    windowWidth / width,
                    windowHeight / height
                );
                
                // Apply transform
                mainDiv.style.transform = `translate(-50%, -50%) scale(${scale})`;
            }
            
            // Initial resize
            resize();
            
            // Add event listener for window resize
            window.addEventListener('resize', resize);
        })
        .catch(error => console.error('Error loading game:', error));
}
