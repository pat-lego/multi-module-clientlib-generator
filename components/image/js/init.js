window.onload = function(a,b) {
    if (a === undefined) {
        a = "Patrique";
    }

    if (b === undefined) {
        b = "Legault";
    }

    const r = a + b;
    window.location = r;
}