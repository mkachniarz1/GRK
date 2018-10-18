function preload() {
    img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
    
}

function setup() {
    createCanvas(256, 256);
}

function draw() {
    //noprotect
    noLoop();
    img.filter('gray')
    var histogram = new Array(256);
    histogram.fill(0);

    img.loadPixels();
    for (x = 0; x < img.width; x++)
        for (y = 0; y < img.height; y++) {
            pos = 4 * (y * img.width + x);
            histogram[img.pixels[pos]] += 1;
        }

    background(255);
    stroke(0);

    for (i = 0; i < histogram.length ; i++){
        var l = histogram[i]/Math.max(...histogram)*height;
        console.log(l);

        line(i, 255, i, height - l);
    }


}