var hasClass = function (elem, className){
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

var addClass = function (elem, className){
	if(!hasClass(elem, className)) {
		elem.className += ' ' + className;
	}
}

var removeClass = function(elem, className){
	var newClass = ' ' + elem.className.replace(/[\t\r\n]/g,' ')+' ';
	if(hasClass(elem, className)) {
		while (newClass.indexOf(' ' + className + ' ') >= 0){
			newClass = newClass.replace(' ' + className + ' ', ' ');
		}
		elem.className = newClass.replace(/^\s+|\s+$/g, '');
	}
}

if ( 'querySelector' in document && 'addEventListener' in window) {

	var body = document.querySelector('body'),
			sectionHeader = document.querySelector('section header'),
			triggerAmount = 0.5;

	document.addEventListener('scroll', function(){
		//console.log('scrolling')
		var scrollTop = (document.documentElement.scrollTop||document.body.scrollTop), headerHeight = document.querySelector('.site-header').offsetHeight;
		if(scrollTop >= 5) {
			addClass(body,'scrolling')
		} else {
			removeClass(body,'scrolling')
		}
	});

	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: triggerAmount
		}
	});

	if(sectionHeader){
		var it = new TimelineMax(), animContent = '.animated-content';
		it.set(animContent, {force3D: true, transformOrigin: "center center"})
			.from(animContent, 1, {opacity: 1, scale: 1 })
			.to(animContent, 1, {opacity: 0, scale: 1.2 });
		var homeScene = new ScrollMagic.Scene({
			triggerElement: sectionHeader,
			offset: -50,
			duration: 1500
		})
		.setTween(it)
		.addTo(controller)
	}
}
