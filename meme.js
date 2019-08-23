var memeImg = document.getElementById("memeImage");
//get what the user enters
function showMessage() {
	var message = document.getElementById("message").value;
	document.getElementById("msg").innerHTML = message;
	var to = document.getElementById("to").value;
	document.getElementById("toMsg").innerHTML = "To: " + to;
	var from = document.getElementById("from").value;
	document.getElementById("fromMsg").innerHTML = "From: " + from;

	getMeme();


//don't show card or button until after user enters stuff
	document.getElementsByClassName("card")[0].style.display = "";
	document.getElementsByClassName("btn")[1].style.display = "";
}
function clearInputs(){
	document.getElementById("message").value = "";
	document.getElementById("to").value = "";
	document.getElementById("from").value = "";
}
//show email button
function showEmail(){
	document.getElementsByClassName("btn")[2].style.display = "";
}
//This makes enter work
document.getElementById("message")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {			 //ascii for enter is 13
        document.getElementById("msg-btn").click();
    }
});

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
}
//get memes from API and picks a random one
function getMeme(){
	var client = new HttpClient();

	client.get('https://api.imgflip.com/get_memes', function(response) {
	    // do something with the response
	    let obj = JSON.parse(response); //make the JSON string into a JavaScript object
	    let randomNum = Math.floor(Math.random() * 100); //random number between 0-100
	    let randomMeme = obj.data.memes[randomNum]; //get a random meme
	    // console.log(obj);
	    // console.log(randomNum);
	    // console.log(obj.data.memes[randomNum]);
	    memeImage.src = randomMeme.url;
	    
	});
}

//does not include picture of meme. :'(
//HTML2Canvas but it doesn't work
/*
document.querySelector('button').addEventListener('click', function() {
  html2canvas(document.querySelector('.card'), {
    onrendered: function(canvas) {
      // document.body.appendChild(canvas);
      return Canvas2Image.saveAsPNG(canvas);
    }
  });
});
*/
