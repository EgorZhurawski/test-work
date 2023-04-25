$(document).ready(function() {

	var header = $(".header");
	var scrollChange = 1;
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= scrollChange) header.addClass('active');
		else header.removeClass("active");
	});

	$('.header-items-bar button').click(function() {

		var btn = $(this);

		if (btn.attr('data-show') === 'false') {
			btn.addClass('active');
			$('.header-items-menu').addClass('active');
			btn.attr('data-show', 'true');
		} else {
			btn.removeClass('active');
			$('.header-items-menu').removeClass('active');
			btn.attr('data-show', 'false');
		}
	});

	$(document).mouseup(function (e) {
		var container = $("header-items-menu.active");
		if (container.has(e.target).length === 0){
			$('.header-items-bar button').removeClass('active');
			$('.header-items-menu').removeClass('active');
		}
	});
	
	document.querySelectorAll('.dropdown').forEach(function (dropdownWrapper) {
		const dropdownBtn = dropdownWrapper.querySelector('.dropdown__button');
		const dropdownList = dropdownWrapper.querySelector('.dropdown__list');
		const dropdownItems = dropdownList.querySelectorAll('.dropdown__list-item');
		const dropdownInput = dropdownWrapper.querySelector('.dropdown__input_hidden')

		dropdownBtn.addEventListener('click', function () {
			dropdownList.classList.toggle('dropdown__list_visible');
			this.classList.toggle('dropdown__button_active');
		});

		dropdownItems.forEach(function(listItem) {
			listItem.addEventListener('click', function (e) {
				dropdownItems.forEach(function(el) {
					el.classList.remove('dropdown__list-item_active');
				})
				e.target.classList.add('dropdown__list-item_active');
				dropdownBtn.innerText = this.innerText;
				dropdownInput.value = this.dataset.value;
				dropdownList.classList.remove('dropdown__list_visible');
			})
		})

		document.addEventListener('click', function (e) {
			if ( e.target !== dropdownBtn ){
				dropdownBtn.classList.remove('dropdown__button_active');
				dropdownList.classList.remove('dropdown__list_visible');
			}
		})

		document.addEventListener('keydown', function (e) {
			if( e.key === 'Tab' || e.key === 'Escape' ) {
				dropdownBtn.classList.remove('dropdown__button_active');
				dropdownList.classList.remove('dropdown__list_visible');
			}
		})

	});

	$('.checkout-item-group-range input[name="count"]').change(function() {
		$('#count-range').text($(this).val()+' %');
	})


});