{
  console.log("product-list.js loaded");
  const MY_NODE = document.getElementById("product-list");

  const getProductList = async () => {
    try {
      renderLoadingItems();
      const { data } = await axios({
        url: "https://6044315ca20ace001728eb74.mockapi.io/api/products",
        method: "GET",
      });
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const renderProductList = (productList) => {
    const htmlString = productList.reduce((accHTML, item) => {
      return (accHTML += `
      <div class="card product-item" style="width: 18rem;">
        <img src=${`${item.image}`} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.desc}</p>
          <a href="#" class="btn btn-primary">${item.price}$</a>
        </div>
      </div>
    `);
    }, "");
    MY_NODE.innerHTML = htmlString;
  };

  const renderLoadingItems = () => {
    const htmlString = [...new Array(8)].reduce((accHTML, item) => {
      return (accHTML += `
      <div class="card product-loading" aria-hidden="true">
        <div class="card-img-top-loading" alt="..."></div>
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
          </p>
          <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
        </div>
      </div>
    `);
    }, "");
    MY_NODE.innerHTML = htmlString;
  };

  const fetchProductList = getProductList();
  // SUCCESS
  fetchProductList.then((data) => {
    renderProductList(data);
  });
  // ERROR
  fetchProductList.catch((error) => {});
}
