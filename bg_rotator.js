// config vars
var default_slowness = 2;
var default_num_images = 36; // assume default image count is 36 (1 image for each 10 degree)

var bg_holder;
var img_width;
var slow_factor;
var num_imgs;

var start_rotating = false;
var should_change = false;

var prev_loc = 0;
var current_loc = 0;
var last_position = {};
var speed_count = 0; 

// initializing function
function rotate_bg(container, slowness, img_count) {
	// setting config vars
	bg_holder = container;
	slow_factor = slowness || default_slowness; // if slowness not given, set it to default value 2
	num_imgs = img_count || default_num_images;

	if (typeof(bg_holder) != 'undefined') {
		img_width = $(bg_holder).width();

		// event binders
		$(bg_holder).mousedown(function(e) { start_rotating = true; });
		$(bg_holder).mousemove(function(e) { if (start_rotating) { drive_bg_img(e); } });
		$(bg_holder).mouseup(function() { start_rotating = false; });
	}
}

// determine the mouse direcction and drive bg image accordingly
function drive_bg_img(event) {
    if (typeof(last_position.x) != 'undefined') {
    	var deltaX = last_position.x - event.clientX, deltaY = last_position.y - event.clientY;
		if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0) { //left
	        if (should_change) { drive_left(); }
		} else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) { //right
	    	if (should_change) { drive_right(); }
		}
	}
	last_position = { x:event.clientX, y:event.clientY };
	if (speed_count > slow_factor) { speed_count = 0; should_change = true; }
	speed_count++;
}

// drive image to the left hand side
function drive_left() {
	current_loc = (prev_loc - img_width);
	if (current_loc > 0) {
		current_loc = current_loc * -1;
	}
	change_bg_x(current_loc);
	prev_loc = current_loc;
	should_change = false;
}

// drive image to the right hand side
function drive_right() {
	current_loc = (prev_loc + img_width);
	if (current_loc > 0) {
		current_loc = (num_imgs * img_width * -1);
	}
	change_bg_x(current_loc);
	prev_loc = current_loc;
	should_change = false;
}

// bg img position changing
function change_bg_x(new_x) {
	$(bg_holder).css('background-position', ''+new_x+' 0');
}