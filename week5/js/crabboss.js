function process_crab_boss(level) {
	green_knight_x = green_knight_x + (tobi_x - green_knight_x)*0.0002;
	document.getElementById('green_knight').style.left = green_knight_x + "px";
	green_knight_y = green_knight_y + ((tobi_y+40) - green_knight_y)*0.0004;
	document.getElementById('green_knight').style.top = green_knight_y + "px";
	green_knight_health = green_knight_health;
	document.getElementById('green_knight_healthbar').style.height = "" + green_knight_health + "px";
	if(death_sequence == 0) {
		document.getElementById('green_knight_image').src="images/KnightGeneral.gif";
	}
}

function process_crab_boss_weapons(level) {
	if(e_bullets[j][2] == -1) {
		// if (Math.random () < 0.002) {
		e_bullets[j][0] = green_knight_x;
		e_bullets[j][1] = green_knight_y + 40;
		e_bullets[j][2] = Math.floor(Math.random() * 4);
		// }
	}
	e_bullets[j][0] += (1.5 * (tobi_x - green_knight_x) / 200); //X movement
	e_bullets[j][1] += (1.5 * (tobi_y - green_knight_y) / 200); //Y movement
}