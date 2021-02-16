$(function(){
	$('#human-and-animals-carousel').carousel({
		interval: 2000
	});
	$('#animals a.leptailurus-serval').tooltip({
		placement: "bottom",
		title: "我是薮猫"
	});
	$('#animals a.vulpes-zerda').tooltip({
		placement: "bottom",
		title: "我是耳廓狐"
	});
	$('#animals a.procyon-lotor').tooltip({
		placement: "bottom",
		title: "我是浣熊"
	});
});
