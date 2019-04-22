$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('html').addClass('ios');
	};
	$('body').removeClass('loaded');
});

$(function(){

	$('.js-add-card').on('click', function(){
		$('.basket-fly').addClass('add-open');
		setTimeout(function() {
		 $('.basket-fly').addClass('add');
		}, 300);
		
		setTimeout(function() {
		  $('.basket-fly').removeClass('add');
		}, 2000);
		return false;
	});

	$('.sort-filter__links .item').on('click', function(){
		$('.sort-filter__links .item').removeClass('active')
		$(this).addClass('active')
		
	});
	$('.open-main-menu').on('click', function(){
		openOverlay();
		$('.mobile-navbar').addClass('open');
		$('.desktop-navbar').addClass('open');
		
	});
	$('.main-menu__close').on('click', function(){
		closeOverlay();
	});

	$('.sort-filter__button').on('click', function(){
		$(this).parent().find('.sort-filter__list').toggleClass('open')
		return false;
	});

	$('.sort-filter__list .m-dropdown-menu__link').on('click', function(){
		var thisText = $(this).text();
		$('.sort-filter__list .m-dropdown-menu__link').removeClass('active')
		$(this).addClass('active').parents('.sort-filter').find('.sort-filter__button-text').text(thisText)
		$(this).parents('.sort-filter__list').removeClass('open');
		return false;
	});

	$(document).click( function(event){
      if( $(event.target).closest(".sort-filter__list").length ) 
        return;

      $('.sort-filter__list').removeClass('open')
      event.stopPropagation();
    });

	$('.filter-button__open').on('click', function(){
		openOverlay();
		$('.filter').addClass('open');
		$(this).parent().addClass('active');
		return false;
	});
	$('.filter-button__close').on('click', function(){
		closeOverlay();
		$('.filter').removeClass('open');
		$(this).parent().removeClass('active');
		return false;
	});
    
	
	$('.basket-fly').on('click', function(){
		$(this).toggleClass('open')
	});

	$(document).click( function(event){
      if( $(event.target).closest(".basket-fly").length ) 
        return;

      $('.basket-fly').removeClass('open')
      event.stopPropagation();
    });


	function disableDocumentScrolling() {
	    if (document.documentElement.style.position != 'fixed') {
	        // Get the top vertical offset.
	        var topVerticalOffset = (typeof window.pageYOffset != 'undefined') ?
	            window.pageYOffset : (document.documentElement.scrollTop ? 
	            document.documentElement.scrollTop : 0);
	        // Set the document to fixed position (this is the only way around IOS' overscroll "feature").
	        document.documentElement.style.position = 'fixed';
	        // Set back the offset position by user negative margin on the fixed document.
	        document.documentElement.style.marginTop = '-' + topVerticalOffset + 'px';

	    }
	}

	function enableDocumentScrolling() {
	    if (document.documentElement.style.position == 'fixed') {
	        // Remove the fixed position on the document.
	        document.documentElement.style.position = '';
	        // Calculate back the original position of the non-fixed document.
	        var scrollPosition = -1 * parseFloat(document.documentElement.style.marginTop);
	        // Remove fixed document negative margin.
	        document.documentElement.style.marginTop = '';
	        document.documentElement.style.width = '';
	        // Scroll to the original position of the non-fixed document.
	        window.scrollTo(0, scrollPosition);
	    }
	}

	function openOverlay(){
    	$('.overlay').show();
    	// $('html').addClass('b-fixed')
    	// disableDocumentScrolling();
    }

    function closeOverlay(){
    	$('.overlay').hide();
    	// $('html').removeClass('b-fixed');
    	// enableDocumentScrolling();
    	$('.mobile-navbar').removeClass('open');
    	$('.desktop-navbar').removeClass('open');
    	$('.filter').removeClass('open');
		$('.filter-button').removeClass('active');
    }

    $('.overlay').on('click', function(){
    	closeOverlay();
    })

    $('.js-minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.js-plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
    
	/* ---------------------------------------------- /*
	 * Styler
	/* ---------------------------------------------- */
    if($('.styler').length){
        $('.styler').styler({
        	singleSelectzIndex: '5',
        });
    };

    /* ---------------------------------------------- /*
	 * Slick slider
	/* ---------------------------------------------- */
    if($('.brands-slider').length){
        $('.brands-slider').slick({
        	slidesToShow: 8,
        	slidesToScroll: 1,
        	prevArrow: '<button class="slick-arrow slick-prev"><i class="fas fa-chevron-left"></i></button>',
        	nextArrow: '<button class="slick-arrow slick-next"><i class="fas fa-chevron-right"></i></button>',
        	responsive: [
        		{
        			breakpoint: 1200,
        			settings: {
        				slidesToShow: 5
        			}
        		},
        		{
        			breakpoint: 992,
        			settings: {
        				slidesToShow: 4
        			}
        		}
        	]
        });
    };

    if($('.card-slider').length){
		$('.card-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			adaptiveHeight: true,
			asNavFor: '.card-previews',
			prevArrow: '<button class="slick-arrow slick-prev"><i class="fas fa-chevron-left"></i></button>',
        	nextArrow: '<button class="slick-arrow slick-next"><i class="fas fa-chevron-right"></i></button>',
        	responsive: [

        		{
        			breakpoint: 575,
        			settings: {
        				arrows: true
        			}
        		}
        	]
		});
		$('.card-previews').slick({
			slidesToShow: 15,
			slidesToScroll: 1,
			asNavFor: '.card-slider',
			focusOnSelect: true
		});
    }
    

    /* ---------------------------------------------- /*
	 * Slider range
	/* ---------------------------------------------- */
	if($('#slider-range').length){
	    $( "#slider-range" ).slider({
			range: true,
			min: 6800,
			max: 35670,
			values: [ 12800, 25700 ],
			slide: function( event, ui ) {

				$( "#f-price1" ).val( ui.values[ 0 ] );
				$( "#f-price2" ).val( ui.values[ 1 ] );
				$( ".slider-values__min" ).val( ui.min );
				$( ".slider-values__max" ).val( ui.max );
			}
	    });
	    $( "#f-price1" ).val( $( "#slider-range" ).slider( "values", 0 ) );
	    $( "#f-price2" ).val( $( "#slider-range" ).slider( "values", 1 ) );

	    $("#f-price1").on('change keyup paste', function() {
	        $("#slider-range").slider('values', 0, $(this).val());
	    });

	    $("#f-price2").on('change keyup paste', function() {
	        $("#slider-range").slider('values', 1, $(this).val());
	    });


	} 




    /* ---------------------------------------------- /*
	 * Slinky menu
	/* ---------------------------------------------- */
    if($('#mymenu').length){
		var slinky = $('#mymenu').slinky({
			title: true
		});
	}

	/* ---------------------------------------------- /*
	 * Fancybox
	/* ---------------------------------------------- */

	if($('.fancybox').length) {
		$(".fancybox").fancybox({
			autoSize : true,
			width : 'auto',
			maxWidth : '100%',
			helpers: {
				overlay: {
					locked: true
				},

			}
		});
	}
	if($('.fancybox-thumb').length) {
		$(".fancybox-thumb").fancybox({
			nextEffect : 'none', 
			prevEffect: 'none',
			helpers: {

				thumbs: {
					width	: 120,
					height	: 96,

				}
			}
		});
	}
	
	/* ---------------------------------------------- /*
	 * Tabs
	/* ---------------------------------------------- */
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		var target = $(this).attr('href'),
            bl_top = $(target).offset().top - 100;
		$('body,html').animate({scrollTop: bl_top}, 400);


		return false;
	});

});

var hf = function(){
	var basketFlyWidth = $('.basket-fly').width();
	$('.basket-fly').css('width', basketFlyWidth )

}

$(window).on('load', hf);