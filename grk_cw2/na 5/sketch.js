function preload() {
    img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");

}

function setup() {
    createCanvas(256, 256);
}

function draw() {
    noLoop();
    img.filter('gray')

    img.resize(256, 256);
    var histogram = new Array(256);
    histogram.fill(0);

    img.loadPixels();

    for (x = 0; x < img.width * img.height; x++) {
        pos = 4 * x;
        histogram[img.pixels[pos] - 1] += 1;
    }

    stroke(0);
    for (var i = 0; i < 256; i++) {
        l = (histogram[i] / Math.max(...histogram)) * height;
        line(i, 255, i, 256 - l);
    }
}