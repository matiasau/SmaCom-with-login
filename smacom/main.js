enchant();

var GAME_X=540,GAME_Y=480;
var MAX_CROPS_NUMBER=5,MAX_GROUP_NUMBER=6;
var moveSpeed = 2;
var DIR_LEFT = 0;
var DIR_RIGHT = 1;
var DIR_UP = 2;
var DIR_DOWN = 3;
var bg;
var TILESIZE = 16;

function enchantjs(data,sessiondata) {
	
	//create the game, notice the var game instead of core
	var game = new Core(GAME_X,GAME_Y);
	game.fps = 32;
	game.scale = 1.0;

	var groups = [], crops=[], statusSmileys=[];
	
	//var every1sec = false;
	//var frame_default;
	
	//preload files
	game.preload(
		'chara0.png'
		);
	game.preload('map0.png');
	game.preload('map1.png');
	game.preload('smileys16.png');
	game.preload('vegetable_materials/vegetables.png');
	game.preload('vegetable_materials/33400.png');
	game.preload('vegetable_materials/31700.png');
	
	
	game.onload = function() {

			//groups for crops with same areaID
			
			var areaGroup0 = [];
			var areaGroup1 = [];
			var areaGroup2 = [];
			var areaGroup3 = [];
			var areaGroup4 = [];
			var areaGroup5 = [];  
			
			var stage = new Group();
			
			var map = new Map(TILESIZE, TILESIZE);
			map.image = game.assets['map1.png'];
			map.loadData([
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,83,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,85,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,99,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,101,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,115,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,117,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,83,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,85,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,99,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,101,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,115,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,117,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,83,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,85,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,99,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,101,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,115,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,117,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,83,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,85,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,99,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,101,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,115,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,117,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,83,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,85,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,99,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,101,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,115,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,117,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,83,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,85,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,99,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,101,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,115,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,116,117,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			],[
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
			]);
			map.collisionData = [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			];

			stage.addChild(map);
			
			
			
			var sign = new Sprite(TILESIZE,TILESIZE);
			sign.image = game.assets['map0.png'];
			sign.frame = 24;
			sign.x = TILESIZE*3;
			sign.y = TILESIZE*6;
			stage.addChild(sign);

			//create background rectangle for dateLabel
			var dateBGw = 130;
			var dateBGh = 20;
			var dateBG = new Sprite(dateBGw, dateBGh);
			var dateSurface = new Surface(dateBGw, dateBGh);
			dateSurface.context.beginPath();
			dateSurface.context.fillStyle = 'black';
			dateSurface.context.strokeStyle = 'white';
			dateSurface.context.rect(0, 0, dateBGw, dateBGh);
			dateSurface.context.fill();
			dateSurface.context.stroke();
			dateSurface.context.closePath();
			dateBG.image = dateSurface;
			dateBG.x = GAME_X - dateBGw-5;
			dateBG.y = 5;

			
			//create datelabel
			dateLabel = new Label(getJapDate());
			dateLabel.x = GAME_X - dateBGw-1;
			dateLabel.y = 10;
			dateLabel.color = 'white';
			dateLabel.font = '12px verdana, sans-serif';
			
			var dateGroup = new Group();
			dateGroup.addChild(dateBG);
			dateGroup.addChild(dateLabel);
			
			//create a groups
			cropsGroup = new Group();
			workerGroup = new Group();
			smileyGroup = new Group();
			labelGroup = new Group();
			
			//function to create crops
			function createCrop(vegeCode,areaID,growthState,growthTrend){
				crop = new Crop(vegeCode,areaID);
				crop.setFrame(growthState);
				crop.setGrowthTrend(growthTrend);
				
				crops.push(crop);
				
				//decide which group the crop belongs into
				//maybe not ideal solution but it works
				
				var AREAHEIGHT = 64;
				var AREAWIDTH = 48;
				
				if(areaID == 0){
					areaGroup0.push(crop);
					crop.setPosition(areaGroup0.length*AREAWIDTH,areaID * AREAHEIGHT);
				}else if (areaID == 1){
					areaGroup1.push(crop);
					crop.setPosition(areaGroup1.length*AREAWIDTH,areaID * AREAHEIGHT);
				}else if (areaID == 2){
					areaGroup2.push(crop);
					crop.setPosition(areaGroup2.length*AREAWIDTH,areaID * AREAHEIGHT);
				}else if (areaID == 3){
					areaGroup3.push(crop);
					crop.setPosition(areaGroup3.length*AREAWIDTH,areaID * AREAHEIGHT);
				}else if (areaID == 4){
					areaGroup4.push(crop);
					crop.setPosition(areaGroup4.length*AREAWIDTH,areaID * AREAHEIGHT);
				}else if (areaID == 5){
					areaGroup5.push(crop);
					crop.setPosition(areaGroup5.length*AREAWIDTH,areaID * AREAHEIGHT);
				}
				
				//add statusSmiley
				addSmiley(growthTrend,crop.x,crop.y);
				
				this.crop = crop;
				cropsGroup.addChild(crop);
				
			}
			
			
			
			function addSmiley(growthTrend,x,y){
				smiley = new Smiley(growthTrend,x,y);
				smiley.setFrame(growthTrend);
				this.smiley = smiley;
				smileyGroup.addChild(smiley);
			}
			
			function addWorker(x,y){
				worker = new Worker();
				//worker.setPosition(x, y);
				this.worker = worker;
				workerGroup.addChild(worker);
				stage.addChild(worker);
			}			
			
			addWorker();
			
			//create crops with function
			var data_final = SortData(data);
			for(key1 in data_final){
				for(key2 in data_final[key1]){
					var a = parseInt(key1);
					var v = parseInt(key2);
					var obj = data_final[a][v];
					if(obj != null)
						createCrop(v,a,obj.growthState,obj.growthTrend);
					//function createCrop(vegeCode,areaID,growthState,growthTrend){
					}
			}
			
			
			
			//add child nodes
			stage.addChild(cropsGroup);
			stage.addChild(smileyGroup);
			//stage.addChild(dateBG);
			//stage.addChild(dateLabel);
			game.rootScene.addChild(stage);
			game.rootScene.addChild(dateGroup);
			
			
			game.rootScene.addEventListener(Event.TOUCH_START, function(e){
				if(stage.x < 0 || stage.y < 0 ){
					worker.toX = e.x - 16 + Math.abs(stage.x);
					worker.toY = e.y - 16 + Math.abs(stage.y);
				}else{
					worker.toX = e.x - 16;
					worker.toY = e.y - 16;
				}

			});
			
			
			game.rootScene.addEventListener(Event.TOUCH_MOVE, function(e){
				worker.toX = e.x - 16;
				worker.toY = e.y - 16;
			});
			
			 		
			game.rootScene.addEventListener(Event.ENTER_FRAME, function(e) {
				//Set stage XY coordinates
				var x = Math.min((game.width - 16) / 2 - worker.x, 0);
				var y = Math.min((game.height - 16) / 2 - worker.y, 0);
				x = Math.max(game.width, x + map.width) - map.width;
				y = Math.max(game.height, y + map.height) - map.height;
				stage.x = x;
				stage.y = y;
				
				/*
				console.log("game.width: " + game.width);
				console.log("game.height: " + game.height);
				console.log("map.width: " + map.width);
				console.log("map.height: " + map.height);
				console.log("worker.x: " + worker.x);
				console.log("worker.y: " + worker.y);
				console.log("stage.x: " + stage.x);
				console.log("stage.y: " + stage.y);
				*/
				
			});
			
			

			sign.addEventListener('touchstart', function() {
				//wikiQuery("carrot");
				addToInfoWindowWithoutLink("スマコムファームによこそ！","ここで情報があります。<br><img height=\"200px\" src=\"/game-view/smacom/img/teacupusagi.jpg\"></img>","");
			});

			dateGroup.addEventListener('touchstart', function() {
				logout(worker.x,worker.y);
			});
			
			//game.rootScene.addChild(makeMessage("username: " + sessiondata.user.username));
	}
	
	game.start();
			


//Crop class
var Crop = Class.create(Sprite, {
	initialize: function(imgFileName, areaID) {
		Sprite.apply(this, [48, 48]);

		this.image = game.assets['vegetable_materials/'+imgFileName+'.png'];
		this.areaID = areaID;
		
		this.addEventListener('touchstart', function(){
			showStatusMessage("Hello, my vegeCode is " + imgFileName,2000);
			if(imgFileName = "31700"){
				wikiQuery("cabbage");
			}else if(imgFileName = "33300"){
				wikiQuery("broccoli");
			}
			
		});
		
	},
	setFrame: function(frameNumber){
		this.frame = frameNumber;
	},
	setPosition: function(x,y){
		this.x = x;
		this.y = y;
	},
	setGrowthTrend: function(growthTrend){
		this.growthTrend = growthTrend;
	},
	onenterframe: function(){
	}
	
});

//Smiley Class
var Smiley = Class.create(Sprite, {
	initialize: function(growthTrend,x,y){
		//Sprite.apply(this, [16,16]);
		//this.image = game.assets['statusSmileys.png'];
		Sprite.apply(this, [16,16]);
		this.image = game.assets['smileys16.png'];
		this.growthTrend = growthTrend;
		this.x = x;
		this.y = y + 30;
		
		this.addEventListener('touchstart', function(){
			if(this.frame === 0){
				showStatusMessage("元気です！",2000);
			}else if(this.frame == 1){
				showStatusMessage("まあまあです。",2000);
			}else if(this.frame == 2){
				showStatusMessage("大丈夫じゃありません。",2000);
			}
		});
		
	},
	setFrame(frameNumber){
		
		if (frameNumber === 0)
			this.frame = 1;
		else if (frameNumber > 0)
			this.frame = 0;
		else
			this.frame = 2;
	},
	setPosition(x,y){
		this.x = x;
		this.y = y + 30;
	}
});

//Worker Class
var Worker = Class.create(Sprite, {
	initialize: function(){
		Sprite.apply(this, [32,32]);
		this.image = game.assets['chara0.png'];
		this.frame = 7;
		this.x = 0;
		this.y = GAME_Y/2 - 30;
		this.toX = this.x;
		this.toY = this.y;
		this.dir = DIR_DOWN;
		this.anim = [
        15, 16, 17, 16, //Left
        24, 25, 26, 24, //Right
        33, 34, 35, 34, //Up
        6, 7, 8, 7]; //Down
		
		this.addEventListener('touchstart', function(){
			$( "#dialog" ).dialog( "open" );
		});
		
		
		this.addEventListener(Event.ENTER_FRAME, function() {
			// console.log("frame: "+this.frame);
			// console.log("age:" + this.age)
			// console.log("dir" + this.dir);
			
            if (this.y > this.toY) {
            this.dir = DIR_UP;
                if (Math.abs(this.y - this.toY) < 3) {
                this.y=this.toY;
                } else {
                this.y -= 3;
                }
            }
            
            else if (this.y < this.toY) {
            this.dir = DIR_DOWN;
            if (Math.abs(this.y - this.toY) < 3) {
            this.y = this.toY;
            } else {
            this.y += 3;
            }
            }
            
            if (this.x > this.toX) {
            this.dir = DIR_LEFT;
            if (Math.abs(this.x - this.toX) < 3) {
            this.x = this.toX;
            } else {
            this.x -= 3;
            }
            }
            
            else if (this.x < this.toX) {
            this.dir = DIR_RIGHT;
            if (Math.abs(this.x- this.toX) < 3) {
            this.x = this.toX;
            } else {
            this.x += 3;
            }
            }
            
            
            if (this.x == this.toX && this.y == this.toY) this.age = 1;
            this.frame = this.anim[this.dir * 4 + (this.age % 4)];
            
        });
		

		
	}
});


//Functions


function wikiQuery(keyword){
	var wikiTitle = keyword;
	
	//english
	var wikiApiUrl = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exsentences=8&explaintext&titles=" + wikiTitle;
	
	//japanese
	//var wikiApiUrl = "https://ja.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exchar=100&explaintext&titles=" + wikiTitle;
	
	$.ajax( {
		url: wikiApiUrl,
		dataType: 'jsonp',
		headers: { 'Api-User-Agent': 'SmaComFarm Game View / 0.1 (matias.autio@metropolia.fi)' },
		success: function(data) {
			console.log(data);
			console.log(data.query.pages);
			parseData(data.query.pages);
		}
	} );
}


function parseData(data){
	$.each(data, function(key, value){
		//console.log(key, value);
		//console.log("Title: " + this.title);
		//console.log(this.extract);
		var title = this.title;
		var extract = this.extract;
		var pageid = this.pageid;
		var pageurl = "http://en.wikipedia.org/?curid=" + pageid;
		addToInfoWindow(title,extract,pageurl);
	});
}

function addToInfoWindow(title,extract,pageurl){
	$("#infowindow h3").html(title);
	$("#infowindow p").html(extract);
	$("#infowindow p").append(" " + "<a target=\"_blank\" id=\"wikipedialink\" href=" + pageurl + " >[Read more]</a>");
	$( "#infowindow" ).fadeIn();
}

function addToInfoWindowWithoutLink(title,extract){
	$("#infowindow h3").html(title);
	$("#infowindow p").html(extract);
	$( "#infowindow" ).fadeIn();
}


//maybe we won't use this but I'll leave it here
function makeMessage(text) {
    var label = new Label(text);
    label.font  = "16px sans-serif";
    label.color = "rgb(255,255,255)";
    label.backgroundColor = "rgba(0,0,0,0.6)";
    label.y     = GAME_Y - 32;
    label.width = GAME_X;
    label.height = 32;
    return label;
}

function showStatusMessage(text, time){ //time in milliseconds
	$( "#enchant-statusbar" ).fadeIn().delay(time).fadeOut();
	$("#statusText").html(text);
}



function getJapDate(){
	//create an object
	var date = new Date();

	//retrieve the current date
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var day = date.getDay();

	var japDays = ["日","月","火","水","木","金","土"];
	var japDate = y + '年' + m + '月' + d + '日' + '(' + japDays[day] + ')';

	return japDate;
}

function logout(x,y){
	//$.get("../logout.php");
	console.log(parent.document.getElementById(window.name));
    return false;
}


function SortData(data){
	var areaID_vegeCode_crop = {};

	for (var i = 0; i < MAX_GROUP_NUMBER; i++) {
		areaID_vegeCode_crop[i] = {};
	};

	for(var i in data){
		if(
			data[i].areaID != null &&
			data[i].vegeCode != null && 
			data[i].growthState != null &&
			data[i].growthTrend != null
			){	
				var obj = {'growthState':data[i].growthState,'growthTrend':data[i].growthTrend};
				areaID_vegeCode_crop[data[i].areaID][data[i].vegeCode]=obj;
			}
	}

	return areaID_vegeCode_crop;
}

};