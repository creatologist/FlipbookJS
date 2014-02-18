#FlipbookJS
Flip through slides by animating each slide leading to your target slide.

### Example
[http://christophermil.es/FlipbookJS](http://christophermil.es/FlipbookJS)

### Example Code
```javascript
	
	// requires jQuery
	var flipbook = new Flipbook( $( '#container .slide' ) /*, onUpdateFunc */  );
	
	/*
	 * 	animation codes from example - http://christophermil.es/FlipbookJS
	 */
	
	// animate opacity - forward / back
	flipbook.flipTo( 5, 1000, { opacity: 0 } );
	flipbook.flipTo( 0, 1000, { opacity: 1 }, finishCallback );
	
	// animate opacity w/ pausing - forward / back
	flipbook.flipTo( 5, { totalDuration: 1000, pause: 300 }, { opacity: 0 } );
	flipbook.flipTo( 0, { totalDuration: 1000, pause: 200 }, { opacity: 1 }, finishCallback );
	
	// animate position - forward / back
	flipbook.flipTo( 5, 1000, { top: 300 } );
	flipbook.flipTo( 0, 1000, { top: 0 }, finishCallback );
	
	// animate position w/ pausing - forward / back
	flipbook.flipTo( 5, { totalDuration: 1000, pause: 300 }, { top: 300 } );
	flipbook.flipTo( 0, { totalDuration: 1000, pause: 200 }, { top: 0 }, finishCallback );
	
```

### 
```javascript
	// optional onUpdate fires whenever a slide finishes animating 
	var flipbook = new Flipbook( slides, function( atSlideNumber, slide, Flipbook ) {...} );
	
	flipbook.flipTo( slideNum, totalDuration, animationParams, finishCallback );
	
	// with a pause between each slide
	flipbook.flipTo( slideNum, { totalDuration: dT, pause: p }, animationParams, finishCallback );
	
	// duration is time per slide
	flipbook.flipTo( slideNum, { duration: dT, pause: p }, animationParams, finishCallback );
```
