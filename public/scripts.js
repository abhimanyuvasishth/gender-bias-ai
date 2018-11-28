let logged_data = {
	'start time local': '',
	'condition_order': [],
	'ai1': {},
	'ai2': {},
	'overall': {},
	'answers': {},
	'demographic': {},
	'time GMT': '',
	'time local': '',
	'location': {}
};

let condition_order;
let ai1;

function init(){
	let date = new Date();
	logged_data['start time local'] = date.toTimeString();
	let num = Math.round(Math.random());
	if (num < 0.5) {
		condition_order = ['Mary', 'James'];
	}
	else {
		condition_order = ['James', 'Mary'];
	}
	console.log(condition_order);
	logged_data['condition_order'] = condition_order;
	update_desc();
}

function update_desc(){
	let ai1 = condition_order[0];
	let ai2 = condition_order[1];

	// Meet your AI
	$("#meet-ai1-header").text("Meet " + ai1 + ", Your First GRE Tutor");
	$("#meet-ai1").text("Hi! I am " + ai1 + " and I'll walk you through a GRE problem.");
	$("#first-ai1-img").attr("src","media/" + ai1 + "-full.png");

	// Questions and explanations
	$("#first-ai2-img").attr("src","media/" + ai1 + ".png");
	$("#first-ai3-img").attr("src","media/" + ai1 + ".png");
	$("#first-ai4-img").attr("src","media/" + ai1 + ".png");
	$("#first-ai5-img").attr("src","media/" + ai1 + ".png");
	$("#question-ai1-img").attr("src","media/" + ai1 + ".png");
	$("#question-ai2-img").attr("src","media/" + ai1 + ".png");
	$("#question-ai3-img").attr("src","media/" + ai1 + ".png");
	$("#question-ai4-img").attr("src","media/" + ai1 + ".png");

	// Meet your AI
	$("#meet-ai2-header").text("Meet " + ai2 + ", Your Second GRE Tutor");
	$("#meet-ai2").text("Hi! I am " + ai2 + " and I'll show you how to approach a GRE problem.");
	$("#second-ai1-img").attr("src","media/" + ai2 + "-full.png");

	// Questions and explanations
	$("#second-ai2-img").attr("src","media/" + ai2 + ".png");
	$("#second-ai3-img").attr("src","media/" + ai2 + ".png");
	$("#second-ai4-img").attr("src","media/" + ai2 + ".png");
	$("#second-ai5-img").attr("src","media/" + ai2 + ".png");
	$("#question-ai5-img").attr("src","media/" + ai2 + ".png");
	$("#question-ai6-img").attr("src","media/" + ai2 + ".png");
	$("#question-ai7-img").attr("src","media/" + ai2 + ".png");
	$("#question-ai8-img").attr("src","media/" + ai2 + ".png");
}

// A function to accept an object and POST it to the server as JSON
function record_results(data) {
	console.log("Posting data");
	console.log(data);
	$.ajax({
		url: "/save",
		contentType: "application/json",
		type: "POST",
		data: JSON.stringify(data),
		success: function (resp) {},
		error: function (resp) {
			console.log(resp);
		}
	});
}

$("#introduction1-button").on("click", function(){
	let option = $('input[name=radioName]:checked', '#form-introduction1').val();
	if (!option){
		$("#introduction1-error").addClass("red");
		return;
	}
	else {
		$(".introduction1").hide();
		$(".introduction2").show();
		$.getJSON('http://www.geoplugin.net/json.gp?jsoncallback=?', function(data) {
			logged_data['location'] = data;
		});
	}
});

$("#introduction2-button").on("click", function(){
  $(".introduction2").hide();
  $(".introduction3").show();
});

$("#introduction3-button").on("click", function(){
  $(".introduction3").hide();
  $(".first-ai1").show();
});

$("#first-ai1-button").on("click", function(){
  $(".first-ai1").hide();
  $(".first-ai2").show();
});

$("#first-ai2-button").on("click", function(){
  $(".first-ai2").hide();
  $(".first-ai3").show();
});

$("#first-ai3-button").on("click", function(){
  $(".first-ai3").hide();
  $(".first-ai4").show();
});

$("#first-ai4-button").on("click", function(){
  $(".first-ai4").hide();
  $(".first-ai5").show();
});

$("#first-ai5-button").on("click", function(){
  $(".first-ai5").hide();
  $(".question-ai1").show();
});

$("#question-ai1-button").on("click", function(){
	let option = $('input[name=radioName]:checked', '#form1-ai1').val();
	if (!option){
		$("#question-ai1-error").addClass("red");
		return;
	}
	else {
		logged_data['answers']['question1-ai1'] = option;
		$(".question-ai1").hide();
	  $(".question-ai2").show();
	}
});

$("#question-ai2-button").on("click", function(){
	let option = $('input[name=radioName]:checked', '#form2-ai1').val();
	if (!option){
		$("#question-ai2-error").addClass("red");
		return;
	}
	else {
		logged_data['answers']['question2-ai1'] = option;
		$(".question-ai2").hide();
	  $(".question-ai3").show();
	}
});

$("#question-ai3-button").on("click", function(){
	let option = $('input[name=radioName]:checked', '#form3-ai1').val();
	if (!option){
		$("#question-ai3-error").addClass("red");
		return;
	}
	else {
		logged_data['answers']['question3-ai1'] = option;
		$(".question-ai3").hide();
	  $(".question-ai4").show();
	}
});

$("#question-ai4-button").on("click", function(){
	let option = $('input[name=radioName]:checked', '#form4-ai1').val();
	if (!option){
		$("#question-ai4-error").addClass("red");
		return;
	}
	else {
		logged_data['answers']['question4-ai1'] = option;
		$(".question-ai4").hide();
	  $(".middle1").show();
	}
});

$("#middle1-button").on("click", function(){
	let concepts = $('#concepts-middle1').val();
	let correct = $('#correct-middle1').val();
	let friendly = $('#friendly-middle1').val();
	let trust = $('#trust-middle1').val();
	let relevant = $('#relevant-middle1').val();
	if (concepts === "0" || correct === "0" || friendly === "0" || trust === "0" || relevant === "0"){
		$("#middle1-error").addClass("red");
		return;
	}
	else {
		logged_data['ai1'] = {"concepts": concepts, "correct": correct, "friendly": friendly,
													"trust": trust, "relevant": relevant};
		$(".middle1").hide();
		$(".transition1").show();
	}
});

$("#transition1-button").on("click", function(){
  $(".transition1").hide();
  $(".second-ai1").show();
});

$("#second-ai1-button").on("click", function(){
  $(".second-ai1").hide();
  $(".second-ai2").show();
});

$("#second-ai2-button").on("click", function(){
  $(".second-ai2").hide();
  $(".second-ai3").show();
});

$("#second-ai3-button").on("click", function(){
  $(".second-ai3").hide();
  $(".second-ai4").show();
});

$("#second-ai4-button").on("click", function(){
  $(".second-ai4").hide();
  $(".second-ai5").show();
});

$("#second-ai5-button").on("click", function(){
  $(".second-ai5").hide();
  $(".question-ai5").show();
});

$("#question-ai5-button").on("click", function(){
	let option = $('input[name=radioName]:checked', '#form1-ai2').val();
	if (!option){
		$("#question-ai5-error").addClass("red");
		return;
	}
	else {
		logged_data['answers']['question1-ai2'] = option;
		$(".question-ai5").hide();
	  $(".question-ai6").show();
	}
});

$("#question-ai6-button").on("click", function(){
	let option = $('input[name=radioName]:checked', '#form2-ai2').val();
	if (!option){
		$("#question-ai6-error").addClass("red");
		return;
	}
	else {
		logged_data['answers']['question2-ai2'] = option;
		$(".question-ai6").hide();
	  $(".question-ai7").show();
	}
});

$("#question-ai7-button").on("click", function(){
	let option = $('input[name=radioName]:checked', '#form3-ai2').val();
	if (!option){
		$("#question-ai7-error").addClass("red");
		return;
	}
	else {
		logged_data['answers']['question3-ai2'] = option;
		$(".question-ai7").hide();
	  $(".question-ai8").show();
	}
});

$("#question-ai8-button").on("click", function(){
	let option = $('input[name=radioName]:checked', '#form4-ai2').val();
	if (!option){
		$("#question-ai8-error").addClass("red");
		return;
	}
	else {
		logged_data['answers']['question4-ai2'] = option;
		$(".question-ai8").hide();
	  $(".middle2").show();
	}
});

$("#middle2-button").on("click", function(){
	let concepts = $('#concepts-middle2').val();
	let correct = $('#correct-middle2').val();
	let friendly = $('#friendly-middle2').val();
	let trust = $('#trust-middle2').val();
	let relevant = $('#relevant-middle2').val();
	if (concepts === "0" || correct === "0" || friendly === "0" || trust === "0" || relevant === "0"){
		$("#middle2-error").addClass("red");
		return;
	}
	else {
		logged_data['ai2'] = {"concepts": concepts, "correct": correct, "friendly": friendly,
													"trust": trust, "relevant": relevant};
		$(".middle2").hide();
		$(".end1").show();
	}
});

$("#end1-button").on("click", function(){
  let why = $('#why-end1').val();
	let thoughts = $('#thoughts-end1').val();
  let prefer = $('#prefer-end1').val();
  if (prefer === "0"){
    $("#end1-error").addClass("red");
    return;
  }
  else {
    logged_data['overall'] = {"prefer": prefer, "why": why, "thoughts": thoughts}
    $(".end1").hide();
    $(".end2").show();
  }
});

$("#end2-button").on("click", function(){
	let gender = $('#gender-end2').val();
	let age = $('#age-end2').val();
	let education = $('#education-end2').val();
	let ethnicity = $('#ethnicity-end2').val();
	let gre = $('#gre-end2').val();
  let familiar = $('#familiar-end2').val();
  if (gender === "0" || age === "0" || education === "0" || gre === "0" || familiar === "0"){
    $("#end2-error").addClass("red");
    return;
  }
  else {
    logged_data['demographic'] = {"gender": gender, "age": age, "education": education,
																	"gre": gre, "familiar": familiar, "ethnicity": ethnicity}
		let date = new Date();
		logged_data['time local'] = date.toTimeString();
		logged_data['time GMT'] = date.toGMTString();
    record_results(logged_data);
    $(".end2").hide();
    $(".end3").show();
  }
});

$(document).ready(function() {
	init();
  $(".introduction1").show();
  $(".introduction2").hide();
  $(".introduction3").hide();
	$(".middle1").hide();
	$(".transition1").hide();
  $(".end1").hide();
  $(".end2").hide();
	$(".end3").hide();
});
