var powerup_x = 600;
var powerup_y = 700;
var powerup_active = -1;
var powerup_countdown = -1;

function process_powerup(level) {
	powerup_countdown--;
	if(powerup_countdown < 0) {
		powerup_active = -1;
	}
	for(var h=0;h<powerup.length;h++) {	
		document.getElementById('powerup'+h).style.left = (powerup[h][0]+bgs) + "px";
		
		if(powerup_active < 1) {
			if(hit_test(powerup[h][0],tobi_x+20,powerup[h][1],tobi_y, 40)) {
				powerup[h][1] = -1000; //figure out how to delay for one second
				//roll dice to choose powerup (four choices available)
				powerup_active = Math.floor(1+Math.random()*4);
				if(powerup_active == 1) {
					document.getElementById('powerup_image'+h).src = "/images/adrenaline.png";
				} else if(powerup_active == 2) {
					document.getElementById('powerup_image'+h).src = "/images/speed_potion.png";
				} else if(powerup_active == 3) {
					document.getElementById('powerup_image'+h).src = "/images/poison.png";
				} else if(powerup_active == 4) {
					document.getElementById('powerup_image'+h).src = "/images/mindcontrol_potion.png";
				}
				powerup_countdown = 500;
			}
		}

		document.getElementById('powerup'+h).style.top = (powerup[h][1]) + "px";
	}
	
	if(powerup_active==1) { //adrenaline increase attack
		for(e=0;e<bullets.length;e++) {
			if(bullets[e][1] == -1000) { //find unused bullets
				if (Math.random() < 0.002) {			
					bullets[e][0] = tobi_x;
					bullets[e][1] = tobi_y + 40;
					bullets[e][2] = Math.floor(Math.random() * 4);
				}
			}
			bullets[e][0] += (1.5 * (green_knight_x + bgs - bullets[e][0]) / 200); //X movement
			bullets[e][1] += (1.5 * (green_knight_y - bullets[e][1]) / 200); //Y movement
		}		
	}
	if(powerup_active==2) { //increase speed
		speed = 3.0;
	}
	if(powerup_active==3) { //poison
		health = health - 1;
		console.log(health);
		document.getElementById('healthbar').style.height = "" + health + "px";
	}
	if(powerup_active==4) { //anthus attacks!
		for(a=0;a<e_bullets.length;a++) {
			if(e_bullets[a][2] == -1) {
				if (Math.random () < 0.002) {
					e_bullets[a][0] = anthus_x;
					e_bullets[a][1] = anthus_y + 40;
					e_bullets[a][2] = Math.floor(Math.random() * 4);
				}
			}
			e_bullets[a][0] += (1.5 * (tobi_x + bgs - anthus_x) / 200); //X movement
			e_bullets[a][1] += (1.5 * (tobi_y - anthus_y) / 200); //Y movement
		}
	}
}
