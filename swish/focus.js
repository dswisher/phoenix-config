
// Things to help with switching focus between windows
Swish.Focus = (function()
{
    const findNeighbor = function(window, direction)
    {
        // A little debug code and sanity checking
        if (window === undefined)
        {
            console.log('Attempt to find neighbors of nothing!');
            return null;
        }

        // console.log('Looking for neighbors of ' + window.title() + '...');

        // Get a list of neighbors in the specified direction
        const neighbors = window.neighbors(direction);

        if (neighbors === undefined)
        {
            console.log('Neighbors list is undefined!');
            return null;
        }

        for (let i = 0; i < neighbors.length; i++)
        {
            let neighbor = neighbors[i];

            if (neighbor === undefined || !neighbor.isNormal() || !neighbor.isVisible())
            {
                continue;;
            }

            return neighbor;
        }

        return null;
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
        if (neighbor)
        {
            neighbor.raise();
            neighbor.focus();
        }
        else
        {
            console.log('No neighbor found!');
        }
    }

    // Expose things to the public
    return {
        moveFocus: moveFocus
    }
})();

