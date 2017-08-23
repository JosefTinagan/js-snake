$(document).ready(function(){

	var cell = {
		content: " ",
		changeContent: changeContent = function(param){
			this.content = param;
		}
	};

	var grid = {
	  content: " ",
	  test_array: new Array(40);
	  createGrid: createGrid = function(x=40,y=40){
	    console.log("Create Grid function of grid object");
	    for(var i = 0; i < x; i++){

	    }
	  }
	}

	$("#start").click(function(){
		createArray();
		console.log("Starting Render");
	//	render();

	})

	var render  = function(){
	  createGrid();
	};

	var test_array = new Array(40);

	var createArray = function(){
	  console.log(test_array);
	  for(var i = 0; i < 40; i++){
	  	test_array[i] = new Array(40);
	  	  for(var j = 0; j < 40; j++){
	  	  	var temp_cell = cell.content;
	  	  	var string = i + " " + j;
	  	  	test_array[i][j] = string;
	  	  }
	  }
	  console.log("Create Array Function");
	  console.log(test_array);
	  loopArray();
	};

	var loopArray = function(){
	  $.each(test_array, function(i,val){
	  	console.log(i);
	  	console.log(val);
	  });
	};

	var createGrid = function(){
	  for(var i = 0; i < 40; i++){
	  	for( var j = 0; j < 40; j++){
	  	  var div = document.createElement("div");
	  	  div.style.width = "25px";
	  	  div.style.height = "25px";
	  	  div.style.background = "red";
	  	  document.getElementById("container").appendChild(div);
	  	}
	  	var jump = document.createElement("br");
	  	document.getElementById("container").appendChild(jump);
	  }
	}
});