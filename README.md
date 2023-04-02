
# Installation

Install [phoenix](https://github.com/kasper/phoenix):

    brew install --cask phoenix

Clone the repo and link it:

    cd ~/git
    git clone git@github.com:dswisher/phoenix-config.git
    ln -s ~/git/phoenix-config ~/.config/phoenix


# Bindings

These bindings use the `HYPER` key, which is <kbd>cmd</kbd> + <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>ctrl</kbd>.

| Binding                          | Action |
| -------------------------------- | ------------------------------- |
| <kbd>HYPER</kbd> + <kbd>C</kbd>  | Center mouse in current window |
| <kbd>HYPER</kbd> + <kbd>W</kbd>  | Move focus to window north of current window |
| <kbd>HYPER</kbd> + <kbd>A</kbd>  | Move focus to window west of current window |
| <kbd>HYPER</kbd> + <kbd>S</kbd>  | Move focus to window south of current window |
| <kbd>HYPER</kbd> + <kbd>D</kbd>  | Move focus to window east of current window |


# Debugging

In a console, run the following to view logs:

    log stream --process Phoenix

# Inspiration/Examples

* [jasonm23](https://github.com/jasonm23/Phoenix-config) - grid-based window management, literate programming style
* [fabiospampinato](https://github.com/fabiospampinato/phoenix/) - window snapping, nicely structured code, thorough README


# Hyper Key

For the mappings to work, a <kbd>HYPER</kbd> key is needed.
I am using [Hyperkey](https://hyperkey.app/), as it is simple.

Another option would be [Karabiner-Elements](https://karabiner-elements.pqrs.org/), which looks quite powerful
and is often recommended, but it is harder to set up. (It doesn't look too hard.)

