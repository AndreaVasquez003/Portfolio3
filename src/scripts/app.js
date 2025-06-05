"use strict"

import { gsap } from "gsap";   
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";


const menuBurgerBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBurgerBtn.addEventListener('click', () => {
	menuBurgerBtn.classList.toggle('open');
	menu.classList.toggle('open');
});


// gsap.from(".ligne__yellow",{height:"0%", duration:2, ease: "power2.out", delay:0.5});
// gsap.from(".scroll__circle",{scale:0, duration:2, ease: "power2.out", delay:0.5});
// gsap.from(".circle__el",{scale:0, duration:2, ease: "power2.out", delay:0.7});
gsap.registerPlugin(ScrollTrigger,SplitText);

let split;
SplitText.create(" h1", {
	type: "words,lines",
	linesClass: "line",
	autoSplit: true,
	mask: "lines",
	onSplit: (self) => {
	split = gsap.from(self.lines, {
		duration: 1,
		yPercent: 300,
		opacity: 0,
		stagger: 0.1,
		ease: "power2.out",
	});
	return split;
	}
});

SplitText.create(".container__Grid p", {
	type: "words,lines",
	linesClass: "line",
	autoSplit: true,
	mask: "lines",
	onSplit: (self) => {
	split = gsap.from(self.lines, {
		duration: 1,
		yPercent: -300,
		opacity: 0,
		stagger: 0.1,
		ease: "power2.out",
	});
	return split;
	}
});

const split2 = new SplitText(".item__Portrait h2");
const split3 = new SplitText(".item__ProjetJanus p");
const split4 = new SplitText(".item__Probleme p");
const split5 = new SplitText(".item__Challenge p");

gsap.from(split2.lines, {
    duration: 1,
    yPercent: 100,
    stagger: 0.1,
    ease: "power2.out",
	mask: "lines",
    scrollTrigger: {
        trigger: ".item__Portrait h2",
        start: "top 80%",
		scrub:true,
    }
});


gsap.to(".container__CaseScroll h2", {
  scrollTrigger: {
    trigger: ".container__CaseScroll h2",
    start: "top 20%",
    pin:true,
    scrub:true,
  }
});

gsap.to(".container__BlocTextCaseStdy2 h2", {
  scrollTrigger: {
    trigger: ".container__BlocTextCaseStdy2 h2",
    start: "top 20%",
    pin:true,
    scrub:true,
  }
});



gsap.set(".item__Portrait", { overflow:"hidden"});
gsap.set(".Portrait2__el", { y:-1000});
gsap.to(".Portrait2__el", {
    y:0,
  scrollTrigger: {
    trigger: ".Portrait2__el",
    start: "top 20%",
    scrub: 1,
  }
});

gsap.set(".Portrait3__el", { x:-1000});
gsap.to(".Portrait3__el", {
    x:0,
  scrollTrigger: {
    trigger: ".Portrait3__el",
    start: "top 120%",
    scrub: true,
  }
});


gsap.set(".Portrait4__el", { y:500});
gsap.to(".Portrait4__el", {
    y:0,
  scrollTrigger: {
    trigger: ".Portrait4__el",
    start: "top 250%",
    scrub: 1,
  }
});


gsap.set(".item__ProjetJanus p", { x:50, opacity:0});
gsap.to(".item__ProjetJanus p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__ProjetJanus p",
    start: "top 80%",
  }
});

gsap.set(".item__Probleme p", { x:-50, opacity:0});
gsap.to(".item__Probleme p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__Probleme p",
    start: "top 80%",
  }
});

gsap.set(".item__Challenge p", { x:50, opacity:0});
gsap.to(".item__Challenge p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__Challenge p",
    start: "top 80%",
  }
});

gsap.set(".item__Choix p", { x:-50, opacity:0});
gsap.to(".item__Choix p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__Choix p",
    start: "top 80%",
  }
});

gsap.set(".item__MisePage1 p", { x:50, opacity:0});
gsap.to(".item__MisePage1 p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__MisePage1 p",
    start: "top 80%",
  }
});

gsap.set(".item__MisePage3 p", { x:50, opacity:0});
gsap.to(".item__MisePage3 p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__MisePage3 p",
    start: "top 80%",
  }
});

gsap.set(".item__MisePage5 p", { x:-50, opacity:0});
gsap.to(".item__MisePage5 p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__MisePage5 p",
    start: "top 80%",
  }
});

gsap.set(".item__Interactivite1 p", { x:50, opacity:0});
gsap.to(".item__Interactivite1 p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__Interactivite1 p",
    start: "top 80%",
  }
});

gsap.set(".item__Interactivite4 p", { x:50, opacity:0});
gsap.to(".item__Interactivite4 p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__Interactivite4 p",
    start: "top 80%",
  }
});

gsap.set(".item__Interactivite3 p", { x:-50, opacity:0});
gsap.to(".item__Interactivite3 p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__Interactivite3 p",
    start: "top 80%",
  }
});

gsap.set(".item__Interactivite6 p", { x:-50, opacity:0});
gsap.to(".item__Interactivite6 p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__Interactivite6 p",
    start: "top 80%",
  }
});

gsap.set(".item__FontsCouleur1 p", { x:50, opacity:0});
gsap.to(".item__FontsCouleur1 p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__FontsCouleur1 p",
    start: "top 80%",
  }
});

gsap.set(".item__FontsCouleur3 p", { x:-50, opacity:0});
gsap.to(".item__FontsCouleur3 p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__FontsCouleur3 p",
    start: "top 80%",
  }
});

gsap.set(".item__FontsCouleur5 p", { x:50, opacity:0});
gsap.to(".item__FontsCouleur5 p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__FontsCouleur5 p",
    start: "top 80%",
  }
});

gsap.set(".item__FontsCouleur7 p", { x:-50, opacity:0});
gsap.to(".item__FontsCouleur7 p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__FontsCouleur7 p",
    start: "top 80%",
  }
});

gsap.set(".item__MisePage6--modif p", { x:-50, opacity:0});
gsap.to(".item__MisePage6--modif p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__MisePage6--modif p",
    start: "top 80%",
  }
});

gsap.set(".item__Interactivite2--modif p", { x:-50, opacity:0});
gsap.to(".item__Interactivite2--modif p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__Interactivite2--modif p",
    start: "top 80%",
  }
});

gsap.set(".item__Code1 p", { x:50, opacity:0});
gsap.to(".item__Code1 p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__Code1 p",
    start: "top 80%",
  }
});

gsap.set(".item__Code2 p", { x:50, opacity:0});
gsap.to(".item__Code2 p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__Code2 p",
    start: "top 80%",
  }
});

gsap.set(".item__Figma p", { x:-50, opacity:0});
gsap.to(".item__Figma p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__Figma p",
    start: "top 80%",
  }
});

gsap.set(".item__IA p", { x:50, opacity:0});
gsap.to(".item__IA p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__IA p",
    start: "top 80%",
  }
});

gsap.set(".item__VsCode p", { x:-50, opacity:0});
gsap.to(".item__VsCode p", {
    opacity:1,
	x:0,
	ease:"power2.out",
  scrollTrigger: {
    trigger: ".item__VsCode p",
    start: "top 80%",
  }
});

Janus.onclick = function(){
	document.location.href="CaseStudies.html"
}

DataPlay.onclick = function(){
	document.location.href="CaseStudyDataPlay.html"
}

SiteVegeCan.onclick = function(){
	document.location.href="http://vasquez-andrea.be/www/projets/6G_Vasquez_Andrea_SITEWEB_SIPS5/"
}

SiteJanus.onclick = function(){
	document.location.href="http://vasquez-andrea.be/www/projets/Janus/"
}

SiteDataPlay.onclick = function(){
	document.location.href="http://vasquez-andrea.be/www/projets/DataPlay/"
}

SiteDesignFiction.onclick = function(){
	document.location.href="http://vasquez-andrea.be/www/projets/Design-Fiction/"
}



// window.onmousemove = function(){

//     var abs =window.event.clientX
//     var ord =window.event.clientY

//     var abs2 =((window.event.clientX/window.innerWidth)*30)-10;
//     var ord2 =((window.event.clientY/window.innerWidth)*30)-10; 

//     gsap.to(".svg__el1", {x:abs2, y:ord2});
//     // gsap.to(".Cercle1Page2", {x:-abs2, y:-ord2});
//     // gsap.to(".CerclePage3", {x:abs2, y:ord2});
//     // gsap.to(".CerclePage4", {x:abs2, y:ord2});
// };

window.onmousemove = function(event) {
    var abs2 = ((event.clientX / window.innerWidth) * 30) - 100;
    var ord2 = ((event.clientY / window.innerHeight) * 30) - 100;

    gsap.to(".svg__el1", { x: abs2, y: ord2 });
};




