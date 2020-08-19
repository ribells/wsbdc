function init_p1() {
	
	plats = [
		[0,688,90000,718], //x_start, y_start, x_end, y_end
		[90,500,520,520],
		[20,330,380,350],
		[100,80,500,100],
		[690,340,870,364],
		[840,490,1000,532],
		[950,250,1020,280],
		[1100,380,1170,410],
		[1310,180,1170,210],
		[1520,270,1170,300],
		[1700,530,1835,560],
	];	
	
	current_platform = 1;
	
	enemies = [
		[0,0,1] //x, y, and [0:dead, 1:alive]
	];
            
	bullets = [];
	
	e_bullets = [
		// [0,-1000,-1] x, y, and [-1:not-active, 1:active]
	];
	
	enemy_count = 1;

	for(i=0;i<bullets.length;i++) {
		document.getElementById('the_bullets').innerHTML += '<div id="bullet' + i + '" style="position:absolute;top:0px;left:0px;z-index:600"><img style="opacity:1.0; visibility:visible;" src="images/minecraftSwordBullet.png" alt="bullet" id="dot_image"></div>';
		bullets[i][1] = -1000.0;
	}

	for(i=0;i<e_bullets.length;i++) {
		document.getElementById('the_bullets').innerHTML += '<div id="e_bullet' + i + '" style="position:absolute;top:0px;left:0px;z-index:600"><img style="opacity:1.0; visibility:visible;" src="images/minecraftSwordBullet.png" alt="bullet"></div>';
		e_bullets[i][1] = -1000.0;
	}
	
	for(i=0;i<enemies.length;i++) {
		document.getElementById('the_enemies').innerHTML += '<div id="enemy' + i + '" style="position:absolute;top:0px;left:0px;z-index:700"><img id="enemy_image' + i + '" src="images/bear.png" width="120" style="position:relative;top:12px" /></div>';
	}

	for (i=0;i<enemies.length;i++) {
		//put the bear on the platform
		enemies[i][0] = plats[current_platform][0]+32;
		enemies[i][1] = plats[current_platform][1]+32;
		document.getElementById('enemy' + i).style.left = enemies[i][0] + "px";
		document.getElementById('enemy' + i).style.top = enemies[i][1] + "px";
	}
	
	document.getElementById('scrollingBG').style.backgroundImage = "url('images/prologue1.jpeg')";
	document.getElementById('plats_image').style.backgroundImage = "url('images/prologue1_platforms.png')";
}

function check_the_bear() {
	if(hit_test(enemies[0][0],tobi_x+20,enemies[0][1],tobi_y+72, 100)) {
		//find the next platform to the right
		if(current_platform == plats.length-1) {
			level++;
			prologue2();
			return;
		} else {
			current_platform++;
		}
		enemies[0][0] = plats[current_platform][0]+32;
		enemies[0][1] = plats[current_platform][1]+32;
		document.getElementById('enemy' + 0).style.left = enemies[0][0] + "px";
		document.getElementById('enemy' + 0).style.top = enemies[0][1] + "px";
	}		
}

function prologue1() {
	init_p1();
	frameloop();
}	