$(document).ready(function () {
	$("select").niceSelect();
});
$("#cart-select").change(function () {
	$(this).removeClass("errorr");
});

$(".open2").on("click", function () {
	$(".cart-tab").addClass("hiden");
	$(".cart2").removeClass("hiden");
	$(".line-div").removeClass("op1 op3");
	$(".ld1, .ld2").addClass("op2");
	$(".icon-div").removeClass("active");
	$(".open2").addClass("active");
});
$(".open1").on("click", function () {
	$(".cart-tab").addClass("hiden");
	$(".cart1").removeClass("hiden");
	$(".line-div").removeClass("op2 op3");
	$(".ld1").addClass("op1");
	$(".icon-div").removeClass("active");
	$(".open1").addClass("active");
});
$(".open3").on("click", function () {
	let selectDistrict = document.getElementById("cart-select");

	if (selectDistrict.value.length == 0) {
		selectDistrict.classList.add("errorr");
	} else {
		selectDistrict.classList.remove("errorr");
	}

	$("#exact-address,#tel-number").each(function () {
		if ($(this).val().length <= 0) {
			$(this).parent().addClass("errorr");
			console.log(`${$(this)} failed!`);
		} else {
			$(this).parent().removeClass("errorr");
		}
	});

	if ($(".errorr")[0]) {
		return;
	} else {
		$(".cart-tab").addClass("hiden");
		$(".cart3").removeClass("hiden");
		$(".line-div").removeClass("op1 op2");
		$(".ld2").addClass("op3");
		$(".icon-div").removeClass("active");
		$(".open3").addClass("active");
	}
});

$("#final-submit").on("click", function () {
	if (!document.getElementById("input3").checked) {
		return false;
	}
});
