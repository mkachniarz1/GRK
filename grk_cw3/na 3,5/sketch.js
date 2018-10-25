function setup() {
    createCanvas(512, 1024);
    background(255);
    var x0 = -1;
    var y0 = -1;
    var x1 = -1;
    var y1 = -1;
}

function mousePressed() {
    x0 = mouseX;
    y0 = mouseY;
}

function mouseDragged() {
    x1 = mouseX;
    y1 = mouseY;
    background(255);
    noStroke();
    fill('red');
    ellipse(x0 - 3, y0 - 3, 6);
    fill('green');
    ellipse(x1 - 3, y1 - 3, 6);
}

function mouseReleased() {
    background(255);
    loadPixels();
    draw_line();
    updatePixels();
}

function set_pixel(x, y, c) {
    idx = (y * 512 + x) * 4;

    pixels[idx] = -c;
    pixels[idx + 1] = c;
    pixels[idx + 2] = 0;
    pixels[idx + 3] = 255;
}

function draw_line() {
    var dx = x1 - x0;
    var dy = y1 - y0;
    var a = dy / dx;
    var b = y0 - a * x0;

    for (var x = 0; x < width; x++)
        for (var y = 0; y < height; y++) {
            if (y < height / 2) {
                var dxy = (dy / dx) * (x - x0) - (y - y0);
                set_pixel(x, y, dxy);
            } else {
                var dxy = 2 * dy * (x - x0) - 2 * dx * (y - y0);
                set_pixel(x, y, dxy);
            }
        }

}