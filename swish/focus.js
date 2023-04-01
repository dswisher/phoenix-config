
// Things to help with switching focus between windows
Swish.Focus = (function()
{
    // Based on: https://github.com/Jaredk3nt/phoenix-padding/blob/master/keys/focus.js
    const findNeighbor = function(window, direction)
    {
        let neighbors = window.neighbors(direction);

        // Find a visible neighbor and give it the focus
        // TODO - why is this checking for undefined???
        if (neighbors === undefined || neighbors.length > 0)
        {
            let index = 0;

            while (index < neighbors.length)
            {
                if (neighbors[index] === undefined)
                {
                    return;
                }

                if (!neighbors[index].isVisible())
                {
                    index++;
                }
                else
                {
                    break;
                }
            }

            if (neighbors[index] === undefined)
            {
                return;
            }

            return neighbors[index];
        }
    }

    // Look in the specified direction (north, south, east, west) for a window, and if one is
    // found, move the focus there.
    const moveFocus = function(direction)
    {
        // Find the "current" window
        let window;
        if (Window.focused() === undefined)
        {
            window = Window.recent()[0];
        }
        else
        {
            window = Window.focused();
        }

        // Find the "best" neighbor in the specified direction
        let neighbor = findNeighbor(window, direction);

        // Focus what was found
        neighbor.focus();
    }

    // Expose things to the public
    return {
        moveFocus: moveFocus
    }
})();

