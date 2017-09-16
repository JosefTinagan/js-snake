$(document).ready(function(){

	var $snake= {
	  position: [20,20],
	  initial_direction: 'r',
	  current_snake: [[20,20]]
	}
	
	var $grid ={
	  content: " ",
	  rows: 40,
	  columns: 40,
	  changeRowValue: function(x){
	    this.rows = x;
	  },
	  changeColumnValue: function(x){
	  	this.columns = x;
	  }
	};

	var render = function(){
	  var half = 20;
	  for(var i = 1; i <= $grid.rows; i++){
	    for(var j = 1; j <= $grid.columns; j++){
	      
	      
	      if( i === half && j == half){
	        $('<div id=' + i + "." + j + ' class="this">' + "0" + '</div>').appendTo("#grid");
	      } else if(j == 1 && i !== 1){
	      	$('<div id=' + i + "." + j + ' class="this clear-left">' + $grid.content + '</div>').appendTo("#grid")
	      } else {
	      	$('<div id=' + i + "." + j + ' class="this">' + $grid.content + '</div>').appendTo("#grid")
	      }
	      //$('#grid div:nth-child(' + ($columns * j) + ')').addClass("clear-left");
	    }
	  }
	  console.log("Finding a node to place the snake head");
	//  $('#grid div:nth-child(' + 100 + ')').text("0");
	}


	$("#start").click(function(){
	//	createArray();
	//	console.log("Starting Render");
	//	render();
	//	testFunctions();
	//	Grid();
		console.log($grid);
		testgrid = $grid;
		console.log(testgrid.rows);
		testgrid.changeRowValue(30);
		console.log(testgrid.rows);
		render();
		console.log($snake);
		
		for(var i = 0; i < $snake.current_snake.length; i++){
		  console.log($snake.current_snake[i]);
		}
	})

	$("#container").keypress(function(event){
	  console.log("Pressed the key of" + event.key + " with a keycode of" + event.keyCode);
	  //Arrow Left : 37
	  //Arrow Up : 38
	  //Arrow Right : 39
	  // Arrow Down : 40
	});

	var testFunctions = function(){
		console.log("Testing Cell Function");
		var test_cell = new Cell("testing content");
		console.log(test_cell.content);
		var test_cell2 = new Cell();
		console.log(test_cell2.content);
		var test_grid = new Grid();
		console.log(test_grid);
		console.log(test_grid.grid);
	};
	/*
	var render  = function(){
	  createGrid();
	};
	*/

	var test_array = new Array(40);

	var createArray = function(){
	  console.log(test_array);
	  for(var i = 0; i < 40; i++){
	  	test_array[i] = new Array(40);
	  	  for(var j = 0; j < 40; j++){
	  	  	var temp_cell = " ";
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

/*
var Grid = function(x=20,y=20){
	  var $rows = x;
	  var $columns = y;
	  console.log($rows + "x" + $columns);
	  for(var i = 0; i < $rows; i++){
	  	for(var j = 0; j < $columns; j++){
	  		$('<div id=' + i + "." + j +  ' class="this">' + " " + '</div>').appendTo("#grid");  		
	  		$('#grid div:nth-child(' + ($columns * j) + ')').addClass("clear-left");

	  	}
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

*/