$(document).ready(function () {
  console.log("layout-v1.js loaded");
  //your code here
  var includes = $("[data-include]");
  $.each(includes, function () {
    try {
      var html = "./components/" + $(this).data("include") + ".html";
      var css = "./styles/" + $(this).data("include") + ".css";
      var js = "./js/" + $(this).data("include") + ".js";
      $("head").append(`<link rel="stylesheet" href="${css}" />`);
      $(this).load(html, () => {
        $.getScript(js);
      });

      // $(this).load(js);
    } catch (error) {
      console.log(error.message);
    }
  });
});
