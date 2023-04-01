
# Installation

Install [phoenix](https://github.com/kasper/phoenix):

    brew install --cask phoenix

Clone the repo and link it:

    cd ~/git
    git clone git@github.com:dswisher/phoenix-config.git
    ln -s ~/git/phoenix-config ~/.config/phoenix


# Bindings

These bindings use the `HYPER` key, which is `cmd` + `alt` + `shift` + `ctrl`.

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

