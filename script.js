document.getElementById("add").addEventListener('click',function(){
    addImage();
    bgStripe();
});

/*----------------------------------
making all image files into bitmaps for printing on thermal printer
----------------------------------*/
function createImageBitmap(){ ("img/stripe-sketches-01.jpg","img/stripe-sketches-02.jpeg","img/stripe-sketches-03.jpeg","img/stripe-sketches-04.jpeg","img/stripe-sketches-05.jpeg","img/stripe-sketches-06.jpeg","img/stripe-sketches-07.jpeg","img/stripe-sketches-08.jpeg","img/stripe-sketches-09.jpeg","img/stripe-sketches-10.jpeg","img/stripe-sketches-11.jpeg","img/stripe-sketches-12.jpeg","img/stripe-sketches-13.jpeg","img/stripe-sketches-14.jpeg","img/stripe-sketches-15.jpeg","img/stripe-sketches-16.jpeg","img/stripe-sketches-17.jpeg","img/stripe-sketches-18.jpeg","img/stripe-sketches-19.jpeg","img/stripe-sketches-20.jpeg","img/stripe-sketches-21.jpeg","img/stripe-sketches-22.jpeg","img/stripe-sketches-23.jpeg","img/stripe-sketches-24.jpeg","img/stripe-sketches-25.jpeg","img/stripe-sketches-26.jpeg","img/stripe-sketches-27.jpeg","img/stripe-sketches-28.jpeg");

}
/*----------------------------------
 load bg stripe gifs
----------------------------------*/

function bgStripe() {
       
        images = []; 
        index = 5;
        images[0] = "img/stripe-sketches-32.gif";
        images[1] = "img/stripe-sketches-32.gif";
        images[2] = "img/stripe-sketches-32.gif";
        images[3] = "img/stripe-sketches-33.gif";
        images[4] = "img/stripe-sketches-34.gif";
        images[5] = "img/stripe-sketches-35.gif";
    
        index = Math.floor(Math.random() * images.length);
        document.body.style.background = "url('"+images[index]+"')"; 
        document.body.classList.add('test');
}

/*----------------------------------
 load the top stripes 
----------------------------------*/

function addImage(){
    console.log('working');
    var images = new Array
    ("img/stripe-sketches-01.jpg","img/stripe-sketches-02.jpeg","img/stripe-sketches-03.jpeg","img/stripe-sketches-04.jpeg","img/stripe-sketches-05.jpeg","img/stripe-sketches-06.jpeg","img/stripe-sketches-07.jpeg","img/stripe-sketches-08.jpeg","img/stripe-sketches-09.jpeg","img/stripe-sketches-10.jpeg","img/stripe-sketches-11.jpeg","img/stripe-sketches-12.jpeg","img/stripe-sketches-13.jpeg","img/stripe-sketches-14.jpeg","img/stripe-sketches-15.jpeg","img/stripe-sketches-16.jpeg","img/stripe-sketches-17.jpeg","img/stripe-sketches-18.jpeg","img/stripe-sketches-19.jpeg","img/stripe-sketches-20.jpeg","img/stripe-sketches-21.jpeg","img/stripe-sketches-22.jpeg","img/stripe-sketches-23.jpeg","img/stripe-sketches-24.jpeg","img/stripe-sketches-25.jpeg","img/stripe-sketches-26.jpeg","img/stripe-sketches-27.jpeg","img/stripe-sketches-28.jpeg");
    

    var length = images.length;
    var which = Math.round(Math.random()*(length-1));
    document.body.innerHTML+= '<img src="'+images[which]+'"/>'

}


const ESC_INIT = [0x1b, 0x40];
const ESC_BIT_IMAGE = [0x1b, 0x2a]
const DOTS_DENSITY = 24
const LUMINANCE = {
    RED: 0.299,
    GREEN: 0.587,
    BLUE: 0.114
}
const LINE_FEED = 0x0a;

function calculateLuminance(pixel) {
    return LUMINANCE.RED * pixel[0] + LUMINANCE.GREEN * pixel[1] + LUMINANCE.BLUE * pixel[2]
}

function calculateSlice(x, y, image) {
    const threshold = 127;
    let slice = 0;
    
    for (let bit = 0; bit < 8; bit++) {
        if ((y + bit) >= image.length)
            continue;

        luminance = calculateLuminance(image[y + bit][x])

        slice |= (luminance < threshold ? 1 : 0) << 7 - bit
    }

    return slice;
}

function collectStripe(x, y, image) {
    let slices = [];
    let z = y + DOTS_DENSITY;

    let i = 0
    while (y < z && i < 3){
      slices.push(calculateSlice(x, y, image));

      y += 8
    }

    return slices;
}

function manipulateImage(image) {
    let data = [];
    const imageWidth = image[0].length;

    for (let y = 0; y < image.length; y += DOTS_DENSITY){
        data.push(...ESC_BIT_IMAGE, 33, (0x00ff & imageWidth), (0xff00 & imageWidth) >> 8);

        for (let x = 0; x < imageWidth; x++) {
            data.push(...collectStripe(x, y, image));
        }

        data.push(LINE_FEED);
    }

    return data;
}

function printImage(image) {
    let transformedImage = [];

    transformedImage.push(...ESC_INIT);

    transformedImage.push(...manipulateImage(image));

    return new Uint8Array(transformedImage);

}









