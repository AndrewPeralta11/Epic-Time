$("button").click(function() {
 var message = $(".firstImportant").val();
 var message2 = parseInt($(".Important").val());
  message2 = message2 + 10;
 var message3 = parseInt($(".alsoImportant").val());
  message3 = message3 + 10;
 $("p").append("<h1>" + message + ", at year " + message2 + ", you will be " + message3 + " years of age!" + "</h1>");
 $(".bigBoi").hide();
});