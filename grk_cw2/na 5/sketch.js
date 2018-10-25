function preload() {
    img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");

}

function setup() {
    createCanvas(256, 512);
}

function draw() {
    noLoop();
    img.filter('gray')

    img.resize(256, 256);
    var histogram = new Array(256);
    histogram.fill(0);

    img.loadPixels();
<<<<<<< HEAD

    for (x = 0; x < img.width * img.height; x++) {
        pos = 4 * x;
        histogram[img.pixels[pos] - 1] += 1;
    }

    stroke(0);
    for (var i = 0; i < 256; i++) {
        l = (histogram[i] / Math.max(...histogram)) * height/2;
        line(i, 255, i, 256 - l);
=======
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
>>>>>>> 3496a7a8aa45210b7b14e89673846ebeaada0585
    }
    image(img, 0, 256);
}