# Basic Background Rotator

This Project creates a animation which rotates a object in 360. You can click and drag mouse on the image and it will rotate.

## How does this work

First I called one of friend who is currently working with Maya and asked him to send me a set of images of a vehicle, rendered in angle of 10 degree for all 360 degrees. Then using Adobe Photoshop, I merge these image into a one single image. Then I set it as a background in a div which is size is equal to a single image of a car.

Then I wrote this JS functions that can determine mouse direction and distance mouse travelled. I took these measurements 
and send it to a function which change the X position of the background-image according to the given values.

No miracle huh ?

## Setup

```
git clone https://github.com/johnceylonit/bg-rotate.git
```

## Configure

#### Change Background Image

You can change background image as you change background image in any div element. Just CSS.
In the test.html file I have put, you can edit below line.

test.html, line #9

```css
	9.	#bg_holder { width: 732px; height: 390px; background: url('grand-white.jpg'); }
```

#### Change width and height

bg_holder is the div element, which is responsible for rendering the background image. Therefore you 
can change dimensions of this div element to change the view-port size. But since we are using, the 
rotating image as a background image, we can't change that image's dimensions.

test.html, line #9

```css
	9.	#bg_holder { width: 732px; height: 390px; background: url('grand-white.jpg'); }
```

#### Change the number of images in bg and the speec

You can set both of these values in rotating function.

test.html line#13

```javascript
	13.	$(document).ready(function() { rotate_bg('#bg_holder', [slowness INT], [image count INT]); });
```

## Use in your own page.
	1. Include JQuery first
	2. Include bg_rotator.js after JQuery.
	3. Call below function with the id of element you want to render the rotation image

```javascript
	$(document).ready(function() { rotate_bg('[element_id STRING]', [slowness INT], [image count INT]); });
```
