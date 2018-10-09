var p1 = [275, 100];
var p2 = [150, 500];
var p3 = [600, 400];

function setup() {
    noLoop();
    createCanvas(800, 600);
    background(color(0));
    stroke(255);
}

function draw() {
    //noprotect
    point(p1[0], p1[1]);
    point(p2[0], p2[1]);
    point(p3[0], p3[1]);
    var cx = p1[0], cy = p1[1];

    for (var i = 0; i < 30000; i++) {
        var r = floor(random(0, 3));
        switch (r) {
            case 0:
                cx = (cx + p1[0]) / 2;
                cy = (cy + p1[1]) / 2;
                point(cx, cy);
                break;

            case 1:
                cx = (cx + p2[0]) / 2;
                cy = (cy + p2[1]) / 2;
                point(cx, cy);
                break;

            default:
                cx = (cx + p3[0]) / 2;
                cy = (cy + p3[1]) / 2;
                point(cx, cy);
        }

    }

    updatePixels();
}