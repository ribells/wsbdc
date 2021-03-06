function init_l1() {

	document.getElementById('scene_text').innerHTML = 
	"After Tobi kills the Bandit Leader, the rest of the bandits start to " +
	"flee away from the forest<br/><br/>" +
	"Tobi starts complaining towards Anthus about how irritating he was when " +
	"he was fighting against the bandits<br/><br/>" +
	"Anthus apologizes and begs to stay by his side";	


	bg_sound = new Audio("audio/level1_music.mp3");

	x = 0;
	y = -100;
	bx = -50;
	by = 0;
	score = 0;
	health = 800;
	green_knight_health = 800;
	tobi_x = 100; 
	tobi_y = 629;	

	plats = [
		[0,678,10000,718], //x_start, y_start, x_end, y_end
		[195,450,720, 500],
		[50, 10, 650, 50],
		[745, 250, 1300, 300],
		[645, 100, 1050, 150],
		[1600, 10, 2150, 40],
		[1900, 400, 2400, 450],
		[2450, 150, 2985, 200],
		[1290, 100, 1680, 150],
		[2200, 225, 2575, 325],
	];
	
	enemies = [
		[0,678,1], //x, y, and [0:dead, 1:alive]
		[226,556,1],
		[589,0,1],
		[866,656,1],
		[380,120,1],
		[0,678,1],
		[226,556,1],
		[589,0,1],
		[866,656,1],
		[380,120,1],
		[400,656,5]
	];
            
	bullets = [
		[0,-1000,-1], //x, y, and [0:not-active, 1:active]
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1]
	];
	
	e_bullets = [
		[0,-1000,-1], //x, y, and [-1:not-active, 1:active]
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1],
		[0,-1000,-1]
	];

	powerup = [
		[0,0,0], //x, y, and [0:inactive, 1:active]
		[0,0,0],
		[0,0,0],
		[0,0,0]
    ];
	
	enemy_count = -1;

	for(i=0;i<bullets.length;i++) {
		document.getElementById('the_bullets').innerHTML += '<div id="bullet' + i + '" style="position:absolute;top:0px;left:0px;z-index:600"><img style="opacity:1.0; visibility:visible;" src="images/arrow.png" alt="bullet" id="dot_image"></div>';
		bullets[i][1] = -1000.0;
	}

	for(i=0;i<e_bullets.length;i++) {
		document.getElementById('the_bullets').innerHTML += '<div id="e_bullet' + i + '" style="position:absolute;top:0px;left:0px;z-index:600"><img style="opacity:1.0; visibility:visible;" src="images/bandit_axe.png" alt="bullet"></div>';
		e_bullets[i][1] = -1000.0;
	}
	
	for(i=0;i<enemies.length;i++) {
		if(i<10) {
			document.getElementById('the_enemies').innerHTML += '<div id="enemy' + i + '" style="position:absolute;top:0px;left:0px;z-index:700"><img id="enemy_image' + i + '" src="images/bandit_melee.gif" width="90" style="position:relative;top:12px" /></div>';
		} else {
			document.getElementById('the_enemies').innerHTML += '<div id="enemy' + i + '" style="position:absolute;top:0px;left:0px;z-index:700"><img id="enemy_image' + i + '" src="images/SoD_melee.gif" width="90" style="position:relative;top:12px" /></div>';
		}
	}
	for (i=0;i<enemies.length;i++) {
		//pick a random platform
		p = Math.floor(Math.random() * (plats.length-2) + 1);
		//put the enemy there
		if(p==1) {
			enemies[i][0] = plats[p][0];
		} else {
			enemies[i][0] = plats[p][0]+(10*i);
		}
		enemies[i][1] = plats[p][1]+32;
			enemies[i][0]=-1000;
			enemies[i][1]=-1000;
			enemies[i][2]=0;
		document.getElementById('enemy' + i).style.left = enemies[i][0] + "px";
		document.getElementById('enemy' + i).style.top = enemies[i][1] + "px";
	}
	
	document.getElementById('scrollingBG').style.backgroundImage = "url('images/level1_background.png')";
	document.getElementById('plats_image').style.backgroundImage = "url('images/level1_platforms.png')";
	
	for(var g=0;g<powerup.length;g++) {
		var x = 20 + Math.floor(Math.random()*780);
		var y = 20 + Math.floor(Math.random()*580);
		document.getElementById('the_powerups').innerHTML += '<div id="powerup' + g + '" style="position:absolute;top:' + y + 'px;left:' + x + 'px;z-index:740"><img id="powerup_image' + g + '" src="images/powerup.gif" width="80" style="position:relative;visibility:hidden;" /></div>';
		powerup[g][0] = x;
		powerup[g][1] = y;

		document.getElementById('powerup_image' + g).style.visibility = "visible";
	}	
}	

function level1() {
	init_l1();
	frameloop();
}
