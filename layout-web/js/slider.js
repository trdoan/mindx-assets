{
  console.log("slider.js loaded");
  const MY_NODE = document.getElementById("slider");

  const imageUrls = [
    "https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1467218958640-6bfb1bb56863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80",
    "https://images.unsplash.com/photo-1464268677664-166ed687faa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80",
  ];

  const renderSlider = () => {
    const htmlString = imageUrls.reduce((accHTML, item) => {
      return (accHTML += `
      <img src=${item} class='slider-item' alt="slider-item" />
    `);
    }, "");
    MY_NODE.innerHTML = htmlString;
  };

  $(document).ready(function () {
    renderSlider();
    $(".slider").slick({});
  });
}
