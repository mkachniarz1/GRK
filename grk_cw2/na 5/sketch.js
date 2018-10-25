function preload() {
    img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
    img.filter('gray')
}

function setup() {
    createCanvas(256, 256);
}

function draw() {
    noLoop();
        var histogram = new Array(256);
    histogram.fill(0);

    img.loadPixels();
    for (x = 0; x < img.width; x++)
        for (y = 0; y < img.height; y++) {
            pos = 4 * (y * img.width + x);
            histogram[img.pixels[pos]] += 1;
        }

    console.log(histogram);
    background(0);
    stroke(255);
    for (var i = 0; i < histogram.lenght; i++) {
        l = histogram[i]/Math.max(...histogram)*height;
        console.log(l);
        line(i, 256, i,  256-l);
    }

}