"use strict"
var currentURL      = window.location.href;

function addSwitcher(){	

	var dzSwitcher = '<div class=sidebar-right><div class=bg-overlay></div><a class="sidebar-right-trigger wave-effect wave-effect-x"href=javascript:void(0); data-original-title="Change Layout"data-placement=right data-toggle=tooltip><span><i class="fa fa-cog fa-spin"></i> </span><span class=text>Switcher</span></a><div class=sidebar-right-inner><h4>Pick your style <a class="btn btn-primary btn-sm pull-right"href=javascript:void(0); onclick=deleteAllCookie()>Delete All Cookie</a></h4><div class=admin-settings><div class=row><div class=col-sm-12><p>Background</p><select class="default-select form-control"id=theme_version name=theme_version><option value="disabled selected hidden">Choose Mode<option value=light>Light<option value=dark>Dark</select></div><div class=col-sm-6><p>Primary Color<div><span data-placement=top data-toggle=tooltip title="Color 1"><input class="chk-col-primary filled-in"id=primary_color_1 name=primary_bg type=radio value=color_1> <label for=primary_color_1 class=bg-label-pattern></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_2 name=primary_bg type=radio value=color_2> <label for=primary_color_2></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_3 name=primary_bg type=radio value=color_3> <label for=primary_color_3></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_4 name=primary_bg type=radio value=color_4> <label for=primary_color_4></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_5 name=primary_bg type=radio value=color_5> <label for=primary_color_5></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_6 name=primary_bg type=radio value=color_6> <label for=primary_color_6></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_7 name=primary_bg type=radio value=color_7> <label for=primary_color_7></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_8 name=primary_bg type=radio value=color_8> <label for=primary_color_8></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_9 name=primary_bg type=radio value=color_9> <label for=primary_color_9></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_10 name=primary_bg type=radio value=color_10> <label for=primary_color_10></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_11 name=primary_bg type=radio value=color_11> <label for=primary_color_11></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_12 name=primary_bg type=radio value=color_12> <label for=primary_color_12></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_13 name=primary_bg type=radio value=color_13> <label for=primary_color_13></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_14 name=primary_bg type=radio value=color_14> <label for=primary_color_14></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_15 name=primary_bg type=radio value=color_15> <label for=primary_color_15></label></span></div></div><div class=col-sm-6><p>Navigation Header<div><span><input class="chk-col-primary filled-in"id=nav_header_color_1 name=navigation_header type=radio value=color_1> <label for=nav_header_color_1 class=bg-label-pattern></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_2 name=navigation_header type=radio value=color_2> <label for=nav_header_color_2></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_3 name=navigation_header type=radio value=color_3> <label for=nav_header_color_3></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_4 name=navigation_header type=radio value=color_4> <label for=nav_header_color_4></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_5 name=navigation_header type=radio value=color_5> <label for=nav_header_color_5></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_6 name=navigation_header type=radio value=color_6> <label for=nav_header_color_6></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_7 name=navigation_header type=radio value=color_7> <label for=nav_header_color_7></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_8 name=navigation_header type=radio value=color_8> <label for=nav_header_color_8></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_9 name=navigation_header type=radio value=color_9> <label for=nav_header_color_9></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_10 name=navigation_header type=radio value=color_10> <label for=nav_header_color_10></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_11 name=navigation_header type=radio value=color_11> <label for=nav_header_color_11></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_12 name=navigation_header type=radio value=color_12> <label for=nav_header_color_12></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_13 name=navigation_header type=radio value=color_13> <label for=nav_header_color_13></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_14 name=navigation_header type=radio value=color_14> <label for=nav_header_color_14></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_15 name=navigation_header type=radio value=color_15> <label for=nav_header_color_15></label></span></div></div><div class=col-sm-6><p>Header<div><span><input class="chk-col-primary filled-in"id=header_color_1 name=header_bg type=radio value=color_1> <label for=header_color_1 class=bg-label-pattern></label> </span><span><input class="chk-col-primary filled-in"id=header_color_2 name=header_bg type=radio value=color_2> <label for=header_color_2></label> </span><span><input class="chk-col-primary filled-in"id=header_color_3 name=header_bg type=radio value=color_3> <label for=header_color_3></label> </span><span><input class="chk-col-primary filled-in"id=header_color_4 name=header_bg type=radio value=color_4> <label for=header_color_4></label> </span><span><input class="chk-col-primary filled-in"id=header_color_5 name=header_bg type=radio value=color_5> <label for=header_color_5></label> </span><span><input class="chk-col-primary filled-in"id=header_color_6 name=header_bg type=radio value=color_6> <label for=header_color_6></label> </span><span><input class="chk-col-primary filled-in"id=header_color_7 name=header_bg type=radio value=color_7> <label for=header_color_7></label> </span><span><input class="chk-col-primary filled-in"id=header_color_8 name=header_bg type=radio value=color_8> <label for=header_color_8></label> </span><span><input class="chk-col-primary filled-in"id=header_color_9 name=header_bg type=radio value=color_9> <label for=header_color_9></label> </span><span><input class="chk-col-primary filled-in"id=header_color_10 name=header_bg type=radio value=color_10> <label for=header_color_10></label> </span><span><input class="chk-col-primary filled-in"id=header_color_11 name=header_bg type=radio value=color_11> <label for=header_color_11></label> </span><span><input class="chk-col-primary filled-in"id=header_color_12 name=header_bg type=radio value=color_12> <label for=header_color_12></label> </span><span><input class="chk-col-primary filled-in"id=header_color_13 name=header_bg type=radio value=color_13> <label for=header_color_13></label> </span><span><input class="chk-col-primary filled-in"id=header_color_14 name=header_bg type=radio value=color_14> <label for=header_color_14></label> </span><span><input class="chk-col-primary filled-in"id=header_color_15 name=header_bg type=radio value=color_15> <label for=header_color_15></label></span></div></div><div class=col-sm-6><p>Sidebar<div><span><input class="chk-col-primary filled-in"id=sidebar_color_1 name=sidebar_bg type=radio value=color_1> <label for=sidebar_color_1 class=bg-label-pattern></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_2 name=sidebar_bg type=radio value=color_2> <label for=sidebar_color_2></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_3 name=sidebar_bg type=radio value=color_3> <label for=sidebar_color_3></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_4 name=sidebar_bg type=radio value=color_4> <label for=sidebar_color_4></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_5 name=sidebar_bg type=radio value=color_5> <label for=sidebar_color_5></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_6 name=sidebar_bg type=radio value=color_6> <label for=sidebar_color_6></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_7 name=sidebar_bg type=radio value=color_7> <label for=sidebar_color_7></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_8 name=sidebar_bg type=radio value=color_8> <label for=sidebar_color_8></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_9 name=sidebar_bg type=radio value=color_9> <label for=sidebar_color_9></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_10 name=sidebar_bg type=radio value=color_10> <label for=sidebar_color_10></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_11 name=sidebar_bg type=radio value=color_11> <label for=sidebar_color_11></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_12 name=sidebar_bg type=radio value=color_12> <label for=sidebar_color_12></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_13 name=sidebar_bg type=radio value=color_13> <label for=sidebar_color_13></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_14 name=sidebar_bg type=radio value=color_14> <label for=sidebar_color_14></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_15 name=sidebar_bg type=radio value=color_15> <label for=sidebar_color_15></label></span></div></div><div class=col-sm-6><p>Layout</p><select class="default-select form-control"id=theme_layout name=theme_layout><option value="disabled selected hidden">Choose Layout<option value=vertical>Vertical<option value=horizontal>Horizontal</select></div><div class=col-sm-6><p>Header position</p><select class="default-select form-control"id=header_position name=header_position><option value="disabled selected hidden">Choose Header Positon<option value=static>Static<option value=fixed>Fixed</select></div><div class=col-sm-6><p>Sidebar</p><select class="default-select form-control"id=sidebar_style name=sidebar_style><option value="disabled selected hidden">Choose Sidebar<option value=full>Full<option value=mini>Mini<option value=compact>Compact<option value=modern>Modern<option value=overlay>Overlay<option value=icon-hover>Icon-hover</select></div><div class=col-sm-6><p>Sidebar position</p><select class="default-select form-control"id=sidebar_position name=sidebar_position><option value="disabled selected hidden">Choose Sidebar Position<option value=static>Static<option value=fixed>Fixed</select></div><div class=col-sm-6><p>Container</p><select class="default-select form-control"id=container_layout name=container_layout><option value="disabled selected hidden">Choose Container<option value=wide>Wide<option value=boxed>Boxed<option value=wide-boxed>Wide Boxed</select></div><div class=col-sm-6><p>Direction</p><select class="default-select form-control"id=theme_direction name=theme_direction><option value="disabled selected hidden">Choose Direction<option value=ltr>LTR<option value=rtl>RTL</select></div><div class=col-sm-6><p>Body Font</p><select class="default-select form-control"id=typography name=typography><option value="disabled selected hidden">Choose Font<option value=roboto>Roboto<option value=poppins>Poppins<option value=opensans>Open Sans<option value=HelveticaNeue>HelveticaNeue</select></div></div></div><div class=note-text><span class=text-danger>*Note :</span> This theme switcher is not part of product. It is only for demo. you will get all guideline in documentation. please check <a class=text-primary href=https://qerza.dexignzone.com/documentation/ target=_blank>documentation.</a></div></div></div>';
	
	
	var demoPanel = '<div class=dz-demo-panel><div class=bg-close></div><a class=dz-demo-trigger href=javascript:void(0) data-original-title="Check out more demos"data-placement=right data-toggle=tooltip><svg class=layer fill=none height=26 stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 viewBox="0 0 24 24"width=26 xmlns=http://www.w3.org/2000/svg><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg> <svg class=close fill=none height=26 stroke=#fff stroke-linecap=round stroke-linejoin=round stroke-width=2 viewBox="0 0 24 24"width=26 xmlns=http://www.w3.org/2000/svg><circle cx=12 cy=12 r=10></circle><line x1=15 x2=9 y1=9 y2=15></line><line x1=9 x2=15 y1=9 y2=15></line></svg> <span>Demos</span></a><div class=dz-demo-inner><a class="btn btn-sm btn-primary mb-3 px-2 py-1"href=javascript:void(0); onclick=deleteAllCookie()>Delete All Cookie</a><div class=dz-demo-header><h4>8 Unique Demos</h4></div><div class="dz-demo-content row text-center"><div class="col-6 mb-5"><div class="rounded-lg dz-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic1.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary dz_theme_demo me-2"href=javascript:void(0); data-theme=1>Default</a> <a class="btn btn-sm btn-info dz_theme_demo_rtl"href=https://qerza.dexignzone.com/xhtml/index.html data-theme=1>LTR Version</a></div></div><h5 class=text-black>Demo 1</h5></div><div class="col-6 mb-5"><div class="rounded-lg dz-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic2.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary dz_theme_demo me-2"href=javascript:void(0); data-theme=2>Default</a> <a class="btn btn-sm btn-info dz_theme_demo_rtl"href=https://qerza.dexignzone.com/xhtml/index.html data-theme=2>LTR Version</a></div></div><h5 class=text-black>Demo 2</h5></div><div class="col-6 mb-5"><div class="rounded-lg dz-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic3.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary dz_theme_demo me-2"href=javascript:void(0); data-theme=3>Default</a> <a class="btn btn-sm btn-info dz_theme_demo_rtl"href=https://qerza.dexignzone.com/xhtml/index.html data-theme=3>LTR Version</a></div></div><h5 class=text-black>Demo 3</h5></div><div class="col-6 mb-5"><div class="rounded-lg dz-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic4.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary dz_theme_demo me-2"href=javascript:void(0); data-theme=4>Default</a> <a class="btn btn-sm btn-info dz_theme_demo_rtl"href=https://qerza.dexignzone.com/xhtml/index.html data-theme=4>LTR Version</a></div></div><h5 class=text-black>Demo 4</h5></div><div class="col-6 mb-5"><div class="rounded-lg dz-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic5.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary dz_theme_demo me-2"href=javascript:void(0); data-theme=5>Default</a> <a class="btn btn-sm btn-info dz_theme_demo_rtl"href=https://qerza.dexignzone.com/xhtml/index.html data-theme=5>LTR Version</a></div></div><h5 class=text-black>Demo 5</h5></div><div class="col-6 mb-5"><div class="rounded-lg dz-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic6.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary dz_theme_demo me-2"href=javascript:void(0); data-theme=6>Default</a> <a class="btn btn-sm btn-info dz_theme_demo_rtl"href=https://qerza.dexignzone.com/xhtml-rtl/index.html data-theme=6>LTR Version</a></div></div><h5 class=text-black>Demo 6</h5></div><div class="col-6 mb-5"><div class="rounded-lg dz-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic7.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary dz_theme_demo me-2"href=javascript:void(0); data-theme=7>Default</a> <a class="btn btn-sm btn-info dz_theme_demo_rtl"href=https://qerza.dexignzone.com/xhtml/index.html data-theme=7>LTR Version</a></div></div><h5 class=text-black>Demo 7</h5></div><div class="col-6 mb-5"><div class="rounded-lg dz-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic8.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary dz_theme_demo me-2"href=javascript:void(0); data-theme=8>Default</a> <a class="btn btn-sm btn-info dz_theme_demo_rtl"href=https://qerza.dexignzone.com/xhtml/index.html data-theme=8>LTR Version</a></div></div><h5 class=text-black>Demo 8</h5></div></div><div class=note-text><span class=text-danger>*Note :</span> This theme switcher is not part of product. It is only for demo. you will get all guideline in documentation. please check <a class=text-primary href=https://qerza.dexignzone.com/documentation/ target=_blank>documentation.</a></div></div></div>';
	
	if($("#dzSwitcher").length == 0) {
		jQuery('body').append(dzSwitcher+demoPanel);
		
			
		 const ps = new PerfectScrollbar('.admin-settings');
		 //console.log(ps.reach.x);	
			ps.isRtl = false;
				
		  $('.sidebar-right-trigger').on('click', function() {
				$('.sidebar-right').toggleClass('show');
		  });
		  $('.sidebar-close-trigger,.bg-overlay').on('click', function() {
				$('.sidebar-right').removeClass('show');
		  });
	}
}

(function($) {
    "use strict"
	addSwitcher();

	
    const body = $('body');
    const html = $('html');

    //get the DOM elements from right sidebar
    const typographySelect = $('#typography');
    const versionSelect = $('#theme_version');
    const layoutSelect = $('#theme_layout');
    const sidebarStyleSelect = $('#sidebar_style');
    const sidebarPositionSelect = $('#sidebar_position');
    const headerPositionSelect = $('#header_position');
    const containerLayoutSelect = $('#container_layout');
    const themeDirectionSelect = $('#theme_direction');

    //change the theme typography controller
    typographySelect.on('change', function() {
        body.attr('data-typography', this.value);
		
		setCookie('typography', this.value);
    });

    //change the theme version controller
    versionSelect.on('change', function() {
		body.attr('data-theme-version', this.value);
		
		if(this.value === 'dark'){
			jQuery('.dz-theme-mode').addClass('active');
			
			
			//jQuery(".nav-header .logo-abbr").attr("src", "./images/logo-white.png");
			jQuery(".nav-header .logo-compact").attr("src", "images/logo-text-white.png");
			jQuery(".nav-header .brand-title").attr("src", "images/logo-text-white.png");
			
			setCookie('logo_src', './images/logo-white.png');
			setCookie('logo_src2', 'images/logo-text-white.png');
		}else{
			jQuery('.dz-theme-mode').removeClass('active');
			
			jQuery(".nav-header .logo-abbr").attr("src", "./images/logo.png");
			jQuery(".nav-header .logo-compact").attr("src", "images/logo-text.png");
			jQuery(".nav-header .brand-title").attr("src", "images/logo-text.png");
			
			setCookie('logo_src', './images/logo.png');
			setCookie('logo_src2', 'images/logo-text.png');
		}
		
		setCookie('version', this.value);
    });
	
	

    //change the sidebar position controller
    sidebarPositionSelect.on('change', function() {
        this.value === "fixed" && body.attr('data-sidebar-style') === "modern" && body.attr('data-layout') === "vertical" ? 
        alert("Sorry, Modern sidebar layout dosen't support fixed position!") :
        body.attr('data-sidebar-position', this.value);
		setCookie('sidebarPosition', this.value);
    });

    //change the header position controller
    headerPositionSelect.on('change', function() {
        body.attr('data-header-position', this.value);
		setCookie('headerPosition', this.value);
    });

    //change the theme direction (rtl, ltr) controller
    themeDirectionSelect.on('change', function() {
        html.attr('dir', this.value);
        html.attr('class', '');
        html.addClass(this.value);
        body.attr('direction', this.value);
		setCookie('direction', this.value);
    });

    //change the theme layout controller
    layoutSelect.on('change', function() {
        if(body.attr('data-sidebar-style') === 'overlay') {
            body.attr('data-sidebar-style', 'full');
            body.attr('data-layout', this.value);
            return;
        }

        body.attr('data-layout', this.value);
		setCookie('layout', this.value);
    });
    
    //change the container layout controller
    containerLayoutSelect.on('change', function() {
        if(this.value === "boxed") {

            if(body.attr('data-layout') === "vertical" && body.attr('data-sidebar-style') === "full") {
                body.attr('data-sidebar-style', 'overlay');
                body.attr('data-container', this.value);
                
                setTimeout(function(){
                    $(window).trigger('resize');
                },200);
                
                return;
            }
            
            
        }

        body.attr('data-container', this.value);
		setCookie('containerLayout', this.value);
    });

    //change the sidebar style controller
    sidebarStyleSelect.on('change', function() {
        if(body.attr('data-layout') === "horizontal") {
            if(this.value === "overlay") {
                alert("Sorry! Overlay is not possible in Horizontal layout.");
                return;
            }
        }

        if(body.attr('data-layout') === "vertical") {
            if(body.attr('data-container') === "boxed" && this.value === "full") {
                alert("Sorry! Full menu is not available in Vertical Boxed layout.");
                return;
            }

            if(this.value === "modern" && body.attr('data-sidebar-position') === "fixed") {
                alert("Sorry! Modern sidebar layout is not available in the fixed position. Please change the sidebar position into Static.");
                return;
            }
        }

        body.attr('data-sidebar-style', this.value);

         if(body.attr('data-sidebar-style') === 'icon-hover') {
            $('.deznav').on('hover',function() {
			$('#main-wrapper').addClass('iconhover-toggle'); 
            }, function() {
			$('#main-wrapper').removeClass('iconhover-toggle'); 
            });
        } 
		
		setCookie('sidebarStyle', this.value);
	});

    
	
	/* jQuery("#nav_header_color_1").on('click',function(){
		jQuery(".nav-header .logo-abbr").attr("src", "./images/logo.png");
		setCookie('logo_src', './images/logo.png');
		return false;
    }); */
    
	/* jQuery("#sidebar_color_2, #sidebar_color_3, #sidebar_color_4, #sidebar_color_5, #sidebar_color_6, #sidebar_color_7, #sidebar_color_8, #sidebar_color_9, #sidebar_color_10, #sidebar_color_11, #sidebar_color_12, #sidebar_color_13, #sidebar_color_14, #sidebar_color_15").on('click',function(){
		jQuery(".nav-header .logo-abbr").attr("src", "./images/logo-white.png");
		jQuery(".nav-header .brand-title").attr("src", "./images/logo-text-white.png");
		setCookie('logo_src', './images/logo-white.png');
		return false;
    }); */
   
    /* jQuery("#nav_header_color_3").on('click',function(){
		jQuery(".nav-header .logo-abbr").attr("src", "./images/logo-white.png");
		setCookie('logo_src', './images/logo-white.png');
		return false;
    }); */

	/* Move LTR to RTL and RTL to LTR */
	var currentURL = window.location.href;
	
	jQuery('#theme_direction').on('change',function(){
		if(currentURL.indexOf('xhtml-rtl') > -1){
			currentURL = currentURL.replace('xhtml-rtl', 'xhtml')
		}else{
			currentURL = currentURL.replace('xhtml', 'xhtml-rtl')
		}
		
		window.location.href = currentURL;
		
	});
	if(currentURL.indexOf('xhtml-rtl') > -1){
		jQuery('#theme_direction').val('rtl');
	}else{
		jQuery('#theme_direction').val('ltr');
	}
	/* Move LTR to RTL and RTL to LTR END */
	
	//change the nav-header background controller
    $('input[name="navigation_header"]').on('click', function() {
		body.attr('data-nav-headerbg', this.value);
		setCookie('navheaderBg', this.value);
    });
	
    //change the header background controller
    $('input[name="header_bg"]').on('click', function() {
        body.attr('data-headerbg', this.value);
		setCookie('headerBg', this.value);
    });

    //change the sidebar background controller
    $('input[name="sidebar_bg"]').on('click', function() {
        body.attr('data-sidebarbg', this.value);
		setCookie('sidebarBg', this.value);
    });
	
	//change the primary color controller
    $('input[name="primary_bg"]').on('click', function() {
        body.attr('data-primary', this.value);
		setCookie('primary', this.value);
    });
	
	

})(jQuery);


