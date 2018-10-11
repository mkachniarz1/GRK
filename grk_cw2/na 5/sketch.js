function preload() {
    img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
}

function setup() {
    createCanvas(256, 256);
    img.filter('gray')
    var histogram = new Array(10);
    histogram.fill(0);
}

function draw() {

}