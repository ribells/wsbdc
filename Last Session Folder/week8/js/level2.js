function init_l2() {
	
	document.getElementById('scene_text').innerHTML = 
	"TO BE CONTINUED...";		
	
	plats = [];	
	
	enemies = [];
            
	bullets = [];
	
	e_bullets = [];
	
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
/*	for (i=0;i<enemies.length;i++) {
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
	} */
}	

function level2() {
	init_l2();
	cut_scene_active = true;
	frameloop();
}	