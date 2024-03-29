// Create the reference variable of the canvas using fabric.Canvas()
var canvas= new fabric.Canvas('myCanvas');

// Define the starting width and height of the block images
block_image_width=30;
block_image_height=30;


// Define the starting x and y coordinates for the player
player_x=10;
player_y=10;


// Define a variable named player_object to store object of the player image
var player_object=" ";

// Add a function named player_update() to add the player image
function player_update()
{
    fabric.Image.fromURL("skin.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}






// Add a function named new_image() to add the different images as per the specific keys pressed
function new_image(get_image){
fabric.Image.fromURL(get_image,function(Img){
    block_image_object=Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_image_object);
});
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true && keyPressed=="80")
    {
        console.log("P and Shift pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true && keyPressed=="77")
    {
        console.log("M and Shift pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keyPressed=="39")
    {
        right();
        console.log("right");
    }
    if(keyPressed=="37")
    {
        left();
        console.log("left");
    }
    if(keyPressed=="38")
    {
        up();
        console.log("up");
    }
    if(keyPressed=="40")
    {
        down();
        console.log("down");
    }
    if(keyPressed=="87")
    {
        new_image("wall.jpg");
        console.log("W");
    }
    if(keyPressed=="71")
    {
        new_image("ground.png");
        console.log("G");
    }
    if(keyPressed=="76")
    {
        new_image("light_green.png");
        console.log("L");
    }
    if(keyPressed=="84")
    {
        new_image("trunk.jpg");
        console.log("T");
    }
    if(keyPressed=="82")
    {
        new_image("roof.jpg")
        console.log("R");
    }
    if(keyPressed=="89")
    {
        new_image("yellow_wall.png");
        console.log("Y");
    }
    if(keyPressed=="68")
    {
        new_image("dark_green.png");
        console.log("D");
    }
    if(keyPressed=="85")
    {
        new_image("unique.png");
        console.log("U");
    }
    if(keyPressed=="67")
    {
        new_image("cloud.jpg");
        console.log("C")
    }
}

function up()
{
    if (player_y>=0)
    {
        player_y=player_y-block_image_height;
        console.log("block image height="+block_image_height);
        console.log("px="+player_x+"py="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if (player_y<=500)
    {
        player_y=player_y+block_image_height;
        console.log("block image height="+block_image_height);
        console.log("px="+player_x+"py="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if (player_x<=850)
    {
        player_x=player_x+block_image_width;
        console.log("block image width="+block_image_width);
        console.log("px="+player_x+"py="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if (player_x>0)
    {
        player_x=player_x-block_image_width;
        console.log("block image width="+block_image_width);
        console.log("px="+player_x+"py="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}