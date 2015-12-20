// JavaScript Document

$(document).ready(function() {

      $('ul.mainnav a').smoothScroll();
	  $('.button1').smoothScroll();
	  $('.ring').smoothScroll();
      $('p.subnav a').click(function(event) {
        event.preventDefault();
        var link = this;
        $.smoothScroll({
 
		  //offset: 0,
		
		  // one of 'top' or 'left'
		  //direction: 'top',
		
		  // only use if you want to override default behavior
		  scrollTarget: link.hash,
		
		  // fn(opts) function to be called before scrolling occurs.
		  // `this` is the element(s) being scrolled
		  //beforeScroll: function() {},
		
		  // fn(opts) function to be called after scrolling occurs.
		  // `this` is the triggering element
		  afterScroll: function() {},
		  easing: 'swing',
		
		  // speed can be a number or 'auto'
		  // if 'auto', the speed will be calculated based on the formula:
		  // (current scroll position - target scroll position) / autoCoeffic
		  speed: 2400,
		
		  // autoCoefficent: Only used when speed set to "auto".
		  // The higher this number, the faster the scroll speed
		  autoCoefficient: 1,
		
		  // $.fn.smoothScroll only: whether to prevent the default click action
		  //preventDefault: true


        });
      });

      $('#change-speed').on('click', function() {
        var $p1 = $('ul.mainnav a').first(),
            p1Opts = $p1.smoothScroll('options') || {};

        p1Opts.speed = 2400;
		console.log(p1Opts.speed);
        $p1.smoothScroll('options', p1Opts);
      });

      $('button.scrollsomething').click(function() {
        $.smoothScroll({
          scrollElement: $('div.scrollme'),
          scrollTarget: '#findme'
        });
        return false;
      });
      $('button.scrollhorz').click(function() {
        $.smoothScroll({
          direction: 'left',
          scrollElement: $('div.scrollme'),
          scrollTarget: '.horiz'
        });
        return false;
      });

});