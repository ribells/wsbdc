function init_p2() {

	x = 0;
	y = -100;
	bx = -50;
	by = 0;
	score = 0;
	health = 0;
	green_knight_health = 800;
	tobi_x = 100; 
	tobi_y = 629;	
	
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
		[0,-1000,1], //x, y, and [0:not-active, 1:active]
		[0,-1000,1],
		[0,-1000,1],
		[0,-1000,1],
		[0,-1000,1],
		[0,-1000,1],
		[0,-1000,1],
		[0,-1000,1],
		[0,-1000,1],
		[0,-1000,1],
		[0,-1000,1]
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
	
	enemy_count = 10;

	for(i=0;i<bullets.length;i++) {
		document.getElementById('the_bullets').innerHTML += '<div id="bullet' + i + '" style="position:absolute;top:0px;left:0px;z-index:600"><img style="opacity:1.0; visibility:visible;" src="images/minecraftSwordBullet.png" alt="bullet" id="dot_image"></div>';
		bullets[i][1] = -1000.0;
	}

	for(i=0;i<e_bullets.length;i++) {
		document.getElementById('the_bullets').innerHTML += '<div id="e_bullet' + i + '" style="position:absolute;top:0px;left:0px;z-index:600"><img style="opacity:1.0; visibility:visible;" src="images/minecraftSwordBullet.png" alt="bullet"></div>';
		e_bullets[i][1] = -1000.0;
	}
	
	for(i=0;i<enemies.length;i++) {
		if(i<10) {
			document.getElementById('the_enemies').innerHTML += '<div id="enemy' + i + '" style="position:absolute;top:0px;left:0px;z-index:700"><img id="enemy_image' + i + '" src="images/GoldenKnight.gif" width="90" style="position:relative;top:12px" /></div>';
		} else {
			document.getElementById('the_enemies').innerHTML += '<div id="enemy' + i + '" style="position:absolute;top:0px;left:0px;z-index:700"><img id="enemy_image' + i + '" src="images/Knight_melee.png" width="90" style="position:relative;top:12px" /></div>';
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
		document.getElementById('enemy' + i).style.left = enemies[i][0] + "px";
		document.getElementById('enemy' + i).style.top = enemies[i][1] + "px";
	}
}	

function prologue2() {
	init_p2();
	//frameloop();
}	