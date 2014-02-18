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

var Flipbook = function( slides, onUpdate ) {
	
	slides = slides.toArray().reverse();
	
	this.atSlide = 0;
	this.currentSlide = slides[0];
	
	this.slides = slides;	
	this.totalSlides = slides.length;
	
	this.onUpdate;
	
	if ( onUpdate ) this.onUpdate = onUpdate;
	
	for ( var i = 0, len = this.totalSlides; i < len; i++ ) {
		$( this.slides[i] ).attr( 'flipbookSlide', i );
	}
};

Flipbook.prototype = {
	
	reset : function( style ) {
		this.atSlide = 0;
		for ( var i = 0, len = this.totalSlides; i < len; i++ ) {
			$( this.slides[i] ).css( style );
		}
	},
	
	flipTo : function( slideNum, duration, animationParams, finishCallback ) {
		
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
		var last = false;
		
		for ( var i = 0, len = totalSlides; i < len; i++ ) {
			var n = i;
			if ( !forward ) n = -n;
			
			n = this.atSlide + n;
			
			if ( forward && i == len - 1 ) last = true;
			else if ( !forward && n == slideNum + 1 ) last = true;
			
			if ( last ) {
				$( this.slides[n] ).delay( delay + ( pause * i ) ).animate( animationParams, dTime, function() {
					
					var slideIndex = Number( $( this ).attr( 'flipbookSlide' ) );
					
					if ( forward ) self.atSlide = slideIndex + 1;
					else self.atSlide = slideIndex;
					
					if ( self.onUpdate ) self.onUpdate( self.atSlide, self.slides[ self.atSlide ], self );
					
					if ( finishCallback ) finishCallback();
				} );
			} else {
				$( this.slides[n] ).delay( delay + ( pause * i ) ).animate( animationParams, dTime, function() {
					var slideIndex = Number( $( this ).attr( 'flipbookSlide' ) );
					
					if ( forward ) self.atSlide = slideIndex + 1;
					else self.atSlide = slideIndex;
					
					if ( self.onUpdate ) self.onUpdate( self.atSlide, self.slides[ self.atSlide ], self );
				} );
			}
			
			
			delay += dTime;
		}
		
	}
	
};
