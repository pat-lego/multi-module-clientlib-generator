window.func = {}

window.onload = function(a,b) {
    if (a === undefined) {
        a = "Patrique";
    }

    if (b === undefined) {
        b = "Legault";
    }

    const r = window.func(a,b)
}

window.func = function patrique(a,b) {
    return a+b;
}