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

$( document ).ready(function() {

    var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };
    $('#cmd').click(function () {
        doc.fromHTML($('#content').html(), 15, 15, {
            'width': 170,
                'elementHandlers': specialElementHandlers
        });
        doc.save('sample-file.pdf');
    });
    
    })