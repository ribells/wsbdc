function process_crab_boss(level) {
	document.getElementById('green_knight_image').style.visibility = "visible";
	if(powerup_active < 0) {
		powerup_active = 0;
	}
	bg_sound = new Audio("audio/level1boss_music.mp3");

	green_knight_x = green_knight_x + (tobi_x + bgs - green_knight_x)*0.0002;
	if(green_knight_x - bgs > 2290 ) {
		green_knight_x = bgs + 2290;
	}
	document.getElementById('green_knight').style.left = green_knight_x + "px";
	green_knight_y = green_knight_y + ((tobi_y+40) - green_knight_y)*0.0004;
	document.getElementById('green_knight').style.top = green_knight_y + "px";
	
	//Have Tobi or Father bullets hit?
	for(b=0;b<bullets.length;b++) {
		if(hit_test(bullets[b][0],green_knight_x - 30,bullets[b][1],green_knight_y+124,100)) {
			document.getElementById('green_knight_image').src="images/bandit_damaged.png";
			death_sequence=100;
			bullets[b][1]=-1000;
			score += 100;
			document.getElementById('thescore').innerHTML = score;
			green_knight_health -= 100;
			document.getElementById('green_knight_healthbar').style.height = "" + (green_knight_health) + "px";
			if (green_knight_health == -400) {
				e_bullet_speed = 50;
			}
			if (green_knight_health <= 0) {
				document.getElementById('green_knight_image').src="images/bandit_damaged.png";
				level++;
				level2();
				//document.getElementById('plats_image').style.backgroundImage = "url('images/win.png')";
			//	game_active = -1;
			}
		}
	}
	
	//document.getElementById('green_knight_healthbar').style.height = "" + green_knight_health + "px";
	if(death_sequence == 0) {
		document.getElementById('green_knight_image').src="images/bandit_melee.gif";
	}
}

function process_crab_boss_weapons(level) {
	for(c=0;c<e_bullets.length;c++) {
		if(e_bullets[c][2] == -1) {
			if (Math.random () < 0.0005) {
				e_bullets[c][0] = green_knight_x;
				e_bullets[c][1] = green_knight_y + 40;
				e_bullets[c][2] = Math.floor(Math.random() * 2);
			}
		}
		e_bullets[c][0] += (1.2 * (tobi_x + bgs - green_knight_x) / 200); //X movement
		e_bullets[c][1] += (1.2 * (tobi_y - green_knight_y) / 200); //Y movement
	}
}