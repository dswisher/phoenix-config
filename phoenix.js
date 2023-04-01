
const MEH = ['ctrl', 'alt', 'shift'];
const HYPER = ['cmd', 'ctrl', 'alt', 'shift'];

require ('swish/swish.js');


// Key bindings
Key.on('c', HYPER, () => Swish.Mouse.centerMouse());

Key.on('w', HYPER, () => Swish.Focus.moveFocus('north'));
Key.on('a', HYPER, () => Swish.Focus.moveFocus('west'));
Key.on('s', HYPER, () => Swish.Focus.moveFocus('south'));
Key.on('d', HYPER, () => Swish.Focus.moveFocus('east'));


// Pop up a notification when this file is loaded.
Phoenix.notify('Configuration loaded.');
