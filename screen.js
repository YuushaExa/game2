function screenres() {
    const mainDiv = document.getElementById('main');
    if (!mainDiv) return; // Safety check

    const bodyDiv = document.body;
    const ASPECT_RATIO = 16 / 9;
    const baseWidth = 1600; // Adjustable base width
    const baseHeight = baseWidth / ASPECT_RATIO;
    
    // Optional: Define min/max scale (1 = 100%)
    const MIN_SCALE = 0.5;  // Prevents too-small scaling
    const MAX_SCALE = 2.0;  // Prevents too-large scaling

    // Configure main container
    mainDiv.style.width = `${baseWidth}px`;
    mainDiv.style.height = `${baseHeight}px`;
    mainDiv.style.position = 'absolute';
    mainDiv.style.backgroundImage = `url("https://example.com/bg.jpg")`;
    mainDiv.style.willChange = 'transform'; // Optimize for GPU
    bodyDiv.style.backgroundColor = '#000';
    bodyDiv.style.overflow = 'hidden'; // Prevent scrollbars

    // Debounced resize handler (improves performance)
    let resizeTimeout;
    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateScale, 100);
    }

    function updateScale() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const windowAspect = windowWidth / windowHeight;

        // Determine scale based on aspect ratio
        let scale;
        if (windowAspect > ASPECT_RATIO) {
            // Wider than 16:9 → scale by height
            scale = windowHeight / baseHeight;
        } else {
            // Taller than 16:9 → scale by width
            scale = windowWidth / baseWidth;
        }

        // Apply min/max scale limits
        scale = Math.max(MIN_SCALE, Math.min(scale, MAX_SCALE));

        // Apply scaling
        mainDiv.style.transform = `scale(${scale})`;
        mainDiv.style.transformOrigin = 'top left';

        // Center the container
        const scaledWidth = baseWidth * scale;
        const scaledHeight = baseHeight * scale;
        mainDiv.style.left = `${(windowWidth - scaledWidth) / 2}px`;
        mainDiv.style.top = `${(windowHeight - scaledHeight) / 2}px`;

        // Optional: Handle high-DPI screens (crisper rendering)
        if (window.devicePixelRatio > 1) {
            mainDiv.style.imageRendering = 'crisp-edges';
        }
    }

    // Initial setup
    updateScale();
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount (if needed in a SPA)
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}

// Run it
screenres();
