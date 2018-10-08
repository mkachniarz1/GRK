function setup() {
    noLoop();
    createCanvas(800, 600);
}

function draw() {
    //noprotect
    for (y = 0; y < height; y++)
        for (x = 0; x < width; x++) {
            var r = 0, g = 0, b = 0;
            b = ((x + y) / (width + height)) * 256;
            var midX = abs(x - width / 2);
            var midY = abs(y - height / 2);
            var d = sqrt(pow(midX, 2) + pow(midY, 2));
            var maxD = sqrt(pow(height / 2, 2) + pow(width / 2, 2));

            g = (d / maxD) * 256;
            r = 256 - (d / maxD) * 256;

            set(x, y, color(r, g, b));
        }
    updatePixels();
}
