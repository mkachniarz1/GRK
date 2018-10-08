function setup() {
    noLoop();
    createCanvas(800, 30);
}

function draw() {
    //noprotect
    for (y = 0; y < height; y++)
        for (x = 0; x < width; x++) {
            set(x, y, color((x/width)*256));
            updatePixels();
        }
}