/*	
		=========================================================================================
 		*
		*	FlipbookJS
 		*
 		=========================================================================================
		*----------------------------------------------------------------------------------------
 		*
 		*	slide animator that animates each slide leading to the target slide
 		*
 		=========================================================================================
		*
		*   author          >>  Christopher Miles
		* 
		*   site            >>  http://ChristopherMil.es
		*   github          >>  http://github.com/creatologist
		*
		=========================================================================================
*/

//===============================================================================================
//----------------------------------------------------------------------------------------------- DO IT

var Flipbook = function( slides ) {
	
	slides = slides.toArray().reverse();
	
	this.atSlide = 0;
	this.currentSlide = slides[0];
	
	this.slides = slides;	
	this.totalSlides = slides.length;
	
	for ( var i = 0, len = this.totalSlides; i < len; i++ ) {
		$( this.slides[i] ).attr( 'flipbookSlide', i );
	}
};

Flipbook.prototype = {
	
	flipTo : function( slideNum, duration, animationParams ) {
		
		if ( slideNum < this.atSlide ) slideNum -= 1;
		
		var totalSlides = slideNum - this.atSlide;
		
		var forward = true;
		if ( totalSlides < 0 ) forward = false;
		
		totalSlides = Math.abs( totalSlides );
		
		var t,
			pause = 0;
			
		if ( typeof duration == 'number' ) t = duration;
		else {
			t = duration.duration;
			pause = duration.pause;
		}
		
		var dTime = t / totalSlides;
		var delay = 0;
		
		var self = this;
		
		for ( var i = 0, len = totalSlides; i < len; i++ ) {
			var n = i;
			if ( !forward ) n = -n;
			
			n = this.atSlide + n;
			
			$( this.slides[n] ).delay( delay + ( pause * i ) ).animate( animationParams, dTime, function() {
				if ( forward ) self.atSlide = Number( $( this ).attr( 'flipbookSlide' ) ) + 1;
				else self.atSlide = Number( $( this ).attr( 'flipbookSlide' ) );
			} );
			
			delay += dTime;
		}
		
	}
	
};
