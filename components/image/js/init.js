window.onload = function(a,b) {
    if (a === undefined) {
        a = "Patrique";
    }

    if (b === undefined) {
        b = "Legault";
    }

    const r = patrique(a,b)
    window.location = r;
}

function patrique(a,b) {
    return a+b;
}