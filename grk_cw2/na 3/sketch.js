var img;

function preload() {
    img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
    img_r = createImage(256, 256);
    img_g = createImage(256, 256);
    img_b = createImage(256, 256);

}

function setup() {
    createCanvas(512, 512);
    img.resize(256, 256);
}

function draw() {
    noLoop();

    img.loadPixels();
    d = pixelDensity();
    for (x = 0; x < img.width; x++)
        for (y = 0; y < img.height; y++)
            for (dx = 0; dx < d; dx++)
                for (dy = 0; dy < d; dy++) {
                    pos = 4 * ((y * d + dy) * img.width * d + (x * d + dx));
                    img.pixels[pos] = img.pixels[pos]; //to jest wartość dla R
                    img.pixels[pos + 1] = 0;//to jest wartość dla G
                    img.pixels[pos + 2] = 0;//to jest wartość dla B
                    img.pixels[pos + 3] = 255; //to jest wartość dla A
                }
    img.updatePixels();
    image(img, 0, 0);
    //    image(img_g, 255, 0);
    //    image(img_b, 0, 255);
    //    image(img, 255, 255);

}