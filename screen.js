function screenres() {
    const mainDiv = document.getElementById('main');
    const bodyDiv = document.body;
    const ASPECT_RATIO = 16 / 9; // 16:9 aspect ratio

    // Instead, dynamically calculate them based on the current window size
    function updateDimensions() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        // Calculate base dimensions dynamically
        let baseWidth, baseHeight;
        
        if (windowWidth / windowHeight > ASPECT_RATIO) {
            // Window is wider than 16:9 → scale based on height
            baseHeight = windowHeight;
            baseWidth = baseHeight * ASPECT_RATIO;
        } else {
            // Window is taller than 16:9 → scale based on width
            baseWidth = windowWidth;
            baseHeight = baseWidth / ASPECT_RATIO;
        }

        // Apply the dynamic base dimensions
        mainDiv.style.width = `${baseWidth}px`;
        mainDiv.style.height = `${baseHeight}px`;
        mainDiv.style.position = 'absolute';
        mainDiv.style.backgroundImage = `url("https://raw.githubusercontent.com/YuushaExa/game2/refs/heads/main/Image_fx%20(1).jpg")`;
        mainDiv.style.backgroundSize = 'cover'; // Ensure the background fits
        bodyDiv.style.backgroundColor = '#000';

    }

    // Initial setup + update on resize
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
}

screenres();
