/*function init_p1() {
	
	plats = [
		[0,678,1000,718], //x_start, y_start, x_end, y_end
		[380,568,570,588],
		[100,500,290,520],
		[410,410,540,430],
		[60,310,250,330],
		[460,270,575,290],
		[100,70,400,100],
		[840,510,1000,532],
		[720,340,870,364],
	];	
	
	enemies = [
		[0,678,1] //x, y, and [0:dead, 1:alive]
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
		if(i<10) {
			document.getElementById('the_enemies').innerHTML += '<div id="enemy' + i + '" style="position:absolute;top:0px;left:0px;z-index:700"><img id="enemy_image' + i + '" src="images/bear.gif" width="120" style="position:relative;top:12px" /></div>';
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

function prologue1() {
	init_p1();
	frameloop();
}	

*/