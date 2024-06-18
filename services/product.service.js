var productState = [];

function getProductList() {
  getProducts()
    .then((products) => {
      randerProductList(products);
    })
    .catch((error) => {
      throw "can not fetch product list form backend " + error;
    });
}

function addProduct() {
  const productName = document.getElementById("productName").value;
  if (vaidateProductTitleInput(productName)) {
    postProducts({ title: productName })
      .then((product) => getProductList())
      .catch((error) => {
        throw "can not add product to backend" + error;
      });
    hidAddProductPopup();
  }
}

function removeProduct(productId) {
  deleteProductById(productId)
    .then((removedProduct) => getProductList())
    .catch((error) => {
      throw "error can not remvoe product " + error;
    });
  closeRemovePopup();
}

function editProduct(productId) {
  let newTitle = document.getElementById("editinput").value;
  if (validateEditProductTitileInput(newTitle)) {
    putProductById(productId, newTitle)
      .then((product) => {
        getProductList();
      })
      .catch((error) => {
        throw "can not edit product " + error;
      });
    closeEditPopup();
  }
}

function serachProduct(productTitle) {
  searchProductByTitle(productTitle)
    .then((productResult) => (productState = productResult))
    .catch((error) => {
      throw "can not search product" + error;
    });
}

function removeAllProduct() {
  productState.splice(0, productState.length);
}

function searchProduct() {
  var productTitle = document.getElementById("search-product").value;
  searchProductByTitle(productTitle)
    .then((products) => randerProductList(products))
    .catch((error) => {
      throw "can not search product " + error;
    });
}
