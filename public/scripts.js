let data = {};

// A function to accept an object and POST it to the server as JSON
function record_results(data) {
	console.log("Posting data");
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
});

$("#introduction2-button").on("click", function(){
  $(".introduction2").hide();
  $(".introduction3").show();
});

$("#introduction3-button").on("click", function(){
  $(".introduction3").hide();
  $(".end1").show();
});

$("#end1-button").on("click", function(){
  let easy = $('#easy-overall').val();
  let prefer = $('#prefer-overall').val();
  if (easy === "0" || prefer === "0"){
    $("#error").addClass("red");
    return;
  }
  else {
    data = {"easy": easy, "prefer": prefer}
    record_results(data);
    $(".end1").hide();
    $(".end2").show();
  }
});

$(document).ready(function() {
  $(".introduction1").show();
  $(".introduction2").hide();
  $(".introduction3").hide();
  $(".end1").hide();
  $(".end2").hide();
});
