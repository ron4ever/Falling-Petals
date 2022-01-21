let ctx;
let x = 0;
let y = 0;
let noOfPetals = 200;
let petals = [];
let canvas = document.createElement('canvas');

function draw() {
    for (let i=0; i< noOfPetals; i++){
        ctx.drawImage (petals[i].image, petals[i].x, petals[i].y); //Drawing the petal
        petals[i].y += petals[i].speed; //sets the speed
        
        if (petals[i].y > 950) { // repeats the petal once it reaches out of bounds
            petals[i].y = -24 //Accounts for pciture dimensions
            petals[i].x = Math.random() * 10000; //Makes it that the petals appear randomly along the page x-axis   
        }
    }
       
}

function clear(){
    ctx.clearRect(0, 0, canvas.width,canvas.height);
}

function setup() {
    //set canvas css
    canvas.id = 'canvas';
    document.getElementById('body').appendChild(canvas);
    canvas.style.position = 'absolute';
    canvas.style.left="0px";
    canvas.style.top="0px";
    canvas.style.zIndex="100";
    canvas.style.width="100%";
    canvas.style.height="100%";
    canvas.width=canvas.offsetWidth;
    canvas.height=canvas.offsetHeight;
        
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        //IMPORTANT set the redraw and clear speed identical so it will not cause an epilepsy
        setInterval(draw, 36); //draw
        setInterval(clear,36); //clear
        setInterval(draw, 36); //draw
        for (let i = 0; i < noOfPetals; i++) {
            let petal = new Object();
            petal["image"] =  new Image();
            petal.image.src = 'imgs/petal.png';
            petal["x"] = Math.random() * 1600;
            petal["y"] = Math.random() * 5000;
            petal["speed"] = 4 + Math.random() * 6;
            petals.push(petal);
        }
    }
}