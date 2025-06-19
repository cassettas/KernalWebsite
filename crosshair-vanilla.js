// Simple vanilla JS crosshair overlay

(function() {
    const crosshair = document.createElement('div');
    crosshair.style.position = 'fixed';
    crosshair.style.top = 0;
    crosshair.style.left = 0;
    crosshair.style.width = '100vw';
    crosshair.style.height = '100vh';
    crosshair.style.pointerEvents = 'none';
    crosshair.style.zIndex = 10000;

    // Horizontal line
    const hLine = document.createElement('div');
    hLine.style.position = 'absolute';
    hLine.style.height = '1px';
    hLine.style.width = '100vw';
    hLine.style.background = '#333';
    hLine.style.opacity = '0.7';
    hLine.style.left = 0;

    // Vertical line
    const vLine = document.createElement('div');
    vLine.style.position = 'absolute';
    vLine.style.width = '1px';
    vLine.style.height = '100vh';
    vLine.style.background = '#333';
    vLine.style.opacity = '0.7';
    vLine.style.top = 0;

    crosshair.appendChild(hLine);
    crosshair.appendChild(vLine);

    document.getElementById('crosshair-root').appendChild(crosshair);

    function moveCrosshair(e) {
        hLine.style.top = e.clientY + 'px';
        vLine.style.left = e.clientX + 'px';
    }

    window.addEventListener('mousemove', moveCrosshair);
})();
