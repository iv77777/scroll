const menuIconInner = document.querySelector('.menu__icon-inner');
const menuBody = document.querySelector('.menu__body');
const menuIcon = document.querySelector('.menu__icon');
const menuLinks = document.querySelectorAll('.menu__link');

if (menuIconInner) {
	menuIconInner.addEventListener('click', function () {
		menuBody.classList.toggle('menu__body--active');
		menuIcon.classList.toggle('menu__icon--active');
		document.body.classList.toggle('_lock');
		// console.log('click');
	});
}

document.addEventListener('click', function (e) {
	// console.log(e.target);
	if (!e.target.closest('.menu') && document.querySelector('.menu__body').classList.contains('menu__body--active')) {
		menuBody.classList.remove('menu__body--active');
		menuIcon.classList.remove('menu__icon--active');
		document.body.classList.remove('_lock');
	}
});

menuLinks.forEach(function (menuLink) {
	menuLink.addEventListener('click', function () {

		scrollMenu("#" + this.href.split('#')[1]);

		if (document.querySelector('.menu__body').classList.contains('menu__body--active')) {
			menuBody.classList.remove('menu__body--active');
			menuIcon.classList.remove('menu__icon--active');
			document.body.classList.remove('_lock');
		}

	});

});



// Для плавного скролла подключаем к документу следующий скрипт
function anim(duration) {
	var temp;
	return function (sel) {
		cancelAnimationFrame(temp);
		var start = performance.now();
		var from = window.pageYOffset || document.documentElement.scrollTop,
			to = document.querySelector(sel).getBoundingClientRect().top;
		requestAnimationFrame(function step(timestamp) {
			var progress = (timestamp - start) / duration;
			1 <= progress && (progress = 1);
			window.scrollTo(0, from + to * progress | 0);
			1 > progress && (temp = requestAnimationFrame(step))
		})
	}
};
var scrollMenu = anim(500)


// button.addEventListener("click", function () {
// 	window.scrollTo({
//               top:1000,
//               behavior: 'smooth'
//         });
// 	console.log(button)
// });









