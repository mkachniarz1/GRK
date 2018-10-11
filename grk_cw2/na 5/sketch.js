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


    stroke(0);
    for (var i = 0; i < histogram.lenght; i++) {
        l = histogram[i]/histogram.lenght*height;
        line(i, 255, i,  l);
    }

}