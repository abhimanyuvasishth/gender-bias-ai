let logged_data = {
	'ai1': {},
	'ai2': {},
	'overall': {},
	'time': '',
	'location': {}
};

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
  $(".introduction1").hide();
  $(".introduction2").show();
	$.getJSON('http://www.geoplugin.net/json.gp?jsoncallback=?', function(data) {
  	logged_data['location'] = data;
	});
});

$("#introduction2-button").on("click", function(){
  $(".introduction2").hide();
  $(".introduction3").show();
});

$("#introduction3-button").on("click", function(){
  $(".introduction3").hide();
  $(".middle1").show();
});

$("#middle1-button").on("click", function(){
	let easy = $('#easy-middle1').val();
	let prefer = $('#prefer-middle1').val();
	if (easy === "0" || prefer === "0"){
		$("#middle1-error").addClass("red");
		return;
	}
	else {
		logged_data['ai1'] = {"easy": easy, "prefer": prefer}
		$(".middle1").hide();
		$(".transition1").show();
	}
});

$("#transition1-button").on("click", function(){
  $(".transition1").hide();
  $(".middle2").show();
});

$("#middle2-button").on("click", function(){
	let easy = $('#easy-middle2').val();
	let prefer = $('#prefer-middle2').val();
	if (easy === "0" || prefer === "0"){
		$("#middle2-error").addClass("red");
		return;
	}
	else {
		logged_data['ai2'] = {"easy": easy, "prefer": prefer}
		$(".middle2").hide();
		$(".end1").show();
	}
});

$("#end1-button").on("click", function(){
  let easy = $('#easy-end1').val();
  let prefer = $('#prefer-end1').val();
  if (easy === "0" || prefer === "0"){
    $("#end1-error").addClass("red");
    return;
  }
  else {
    logged_data['overall'] = {"easy": easy, "prefer": prefer}
		logged_data['time'] = new Date();
    record_results(logged_data);
    $(".end1").hide();
    $(".end2").show();
  }
});

$(document).ready(function() {
  $(".introduction1").show();
  $(".introduction2").hide();
  $(".introduction3").hide();
	$(".middle1").hide();
	$(".transition1").hide();
  $(".end1").hide();
  $(".end2").hide();
});
