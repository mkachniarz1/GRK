function setup() {
    noLoop();
    createCanvas(800, 600);
}

function draw() {
    //noprotect
    for (y = 0; y < height; y++)
        for (x = 0; x < width; x++) {
            // niebo
            set(x, y, color(200, 200, 255));
            //trawa
            if (y >= height - height / 3)
                set(x, y, color(0, 100, 0));
            if ((x > width / 4) &&
                (x < width - width / 4) &&
                (y > height / 3) &&
                (y < height - height / 3)){
                    set(x, y, color(100,50,30));
                }
                    
        }
    //kwiaty
    for (var count = 0; count < 1000; count++)
        set(random(0, x), random(height - height / 3, 800), color(random(0, 255), random(0, 255), random(0, 255)));

    updatePixels();
}