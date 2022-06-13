
const listSpaces = function() {
    const spaces = Space.all();

    // This only shows windows for spaces that are currently being displayed
    var info = "\n";
    for (var i = 0; i < spaces.length; i++) {
        info += "--- space " + (i + 1) + " ---\n";

        for (const window of spaces[i].windows()) {
            info += "   " + window.title() + "\n";
        }
    }

    console.log(info);
}

const listScreens = function() {
    const screens = Screen.all();
    for (const s of screens) {
        console.log(s.identifier());
    }
}

const listWindows = function() {
    // This only shows windows for spaces that are currently being displayed
    for (const w of Window.all()) {
        var msg = w.app().name();
        var title = w.title();
        if (title) {
            msg += " - " + title;
        }
        console.log(msg);
    }
}

const listApps = function() {
    // This only shows apps for spaces that are currently being displayed
    var msg = "\n";

    for (const a of App.all()) {
        if (a.isHidden()) {
            continue;
        }

        var windows = a.windows();

        if (windows.length === 0) {
            continue;
        }

        msg += "--- " + a.name() + " ---\n";

        for (const w of windows) {
            var title = w.title();
            if (title) {
                msg += "    " + title + "\n";
            } else {
                msg += "    (untitled)\n";
            }
        }
    }

    console.log(msg);
}

const showCurrentTitle = function() {
    const window = Window.focused();

    if (window) {
        console.log(window.title());
    }
}

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

Key.on('\\', ['cmd'], () => {
    // showCurrentTitle();
    // listScreens();
    // listSpaces();
    // listWindows();
    // listApps();

    centerMouse();
});
