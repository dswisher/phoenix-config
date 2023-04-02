
// Things to help with switching focus between windows
Swish.Focus = (function()
{
    const getDistance = function(winA, winB)
    {
        // TODO - this may be overly simplistic - may not handle overlapping windows well
        let ap = winA.topLeft();
        let bp = winB.topLeft();

        let dx = ap.x - bp.x;
        let dy = ap.y = bp.y;

        // The distance is just being used for compares, so no need to take sqrt
        return dx * dx + dy + dy;
    }


    const findNeighbor = function(window, direction)
    {
        // A little debug code and sanity checking
        if (window === undefined)
        {
            console.log('Attempt to find neighbors of nothing!');
            return null;
        }

        console.log('Looking for neighbors of ' + window.title() + '...');

        // Get a list of neighbors in the specified direction
        const neighbors = window.neighbors(direction);

        if (neighbors === undefined)
        {
            console.log('Neighbors list is undefined!');
            return null;
        }

        let closestWin = null;
        let closestDist = 0;
        neighbors.forEach(neighbor =>
        {
            if (neighbor === undefined || !neighbor.isNormal() || !neighbor.isVisible())
            {
                return;
            }

            console.log('   ...considering neighbor ' + neighbor.title() + ', app=' + neighbor.app().name() + '...');

            let dist = getDistance(window, neighbor);
            if (closestWin === null || dist < closestDist)
            {
                closestWin = neighbor;
                closestDist = dist;
            }
        });

        if (closestWin)
        {
            console.log('   --> Found Closest! app=' + closestWin.app().name() + ', title: ' + closestWin.title());
        }

        return closestWin;
    }


    // Based on: https://github.com/Jaredk3nt/phoenix-padding/blob/master/keys/focus.js
    const findNeighborOld = function(window, direction)
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

