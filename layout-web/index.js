function checkFileExists(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("HEAD", url, false);
  xhr.send();

  if (xhr.status == "404") {
    console.warn("File not found: " + url);
    return false;
  } else {
    return true;
  }
}

$(document).ready(function () {
  console.log("layout-v1.js loaded");
  //your code here
  var includes = $("[data-include]");
  $.each(includes, function () {
    try {
      var html = "./components/" + $(this).data("include") + ".html";
      var css = "./styles/" + $(this).data("include") + ".css";
      var js = "./js/" + $(this).data("include") + ".js";

      const errors = [html, css, js].map((item) => {
        return checkFileExists(item);
      });
      const isValid = errors.every((item) => item === true);
      if (!isValid) return;

      $(this).load(html, () => {
        $("head").append(`<link rel="stylesheet" href="${css}" />`);
        $.getScript(js);
      });

      // $(this).load(js);
    } catch (error) {
      console.log(error.message);
    }
  });
});
