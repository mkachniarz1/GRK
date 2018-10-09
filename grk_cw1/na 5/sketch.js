function setup() {
    noLoop();
    createCanvas(800, 600);
}

function draw() {
    //noprotect
    for (y = 0; y < height; y++)
        for (x = 0; x < width; x++) {
            set(x, y, color(255, 0, 144));
        }
    updatePixels();
}