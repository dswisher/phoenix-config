
Swish.Mouse = (function()
{
    // Center the mouse in the middle of the active window (if any)
    const centerMouse = function() {
        const window = Window.focused();

        if (window) {
            var rect = window.frame();
            var pos = {
                x: rect.x + (rect.width / 2),
                y: rect.y + (rect.height / 2)
            };

            Mouse.move(pos);
        }
    }

    // Expose things to the public
    return {
        centerMouse: centerMouse
    }
})();

