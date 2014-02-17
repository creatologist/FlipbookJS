#FlipbookJS
Flip through slides by animating each slide leading to your target slide.

### Example
[http://christophermil.es/FlipbookJS](http://christophermil.es/FlipbookJS)

### Example Code
```javascript
	
	// requres jQuery
	var flipbook = new Flipbook( $( '#container .slide' ) );
	
	/*
	 * 	animation codes from example - http://christophermil.es/FlipbookJS
	 */
	
	// animate opacity - forward / back
	flipbook.flipTo( 5, 1000, { opacity: 0 } );
	flipbook.flipTo( 0, 1000, { opacity: 1 }, finishCallback );
	
	// animate opacity w/ pausing - forward / back
	flipbook.flipTo( 5, { duration: 1000, pause: 300 }, { opacity: 0 } );
	flipbook.flipTo( 0, { duration: 1000, pause: 200 }, { opacity: 1 }, finishCallback );
	
	// animate position - forward / back
	flipbook.flipTo( 5, 1000, { top: 300 } );
	flipbook.flipTo( 0, 1000, { top: 0 }, finishCallback );
	
	// animate position w/ pausing - forward / back
	flipbook.flipTo( 5, { duration: 1000, pause: 300 }, { top: 300 } );
	flipbook.flipTo( 0, { duration: 1000, pause: 200 }, { top: 0 }, finishCallback );
	
```

### 
```javascript
	flipbook.flipTo( slideNum, duration, animationParams, finishCallback );
	
	// with a pause between each slide
	flipbook.flipTo( slideNum, { duration: d, pause: p }, animationParams, finishCallback );
```
