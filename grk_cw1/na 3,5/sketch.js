function setup() {
    noLoop();
    createCanvas(250, 180);
}

function draw() {
    //noprotect
    for (y = 0; y < height; y++)
        for (x = 0; x < width; x++) {
            set(x, y, color((x/width)*256));
            updatePixels();
        }
}