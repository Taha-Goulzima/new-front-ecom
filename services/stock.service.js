var stockOperationState = [];
const productQuantities = [];

function getstockOperationList() {
  getStock()
    .then((stockOperations) => {
      randerStockOperationList(stockOperations);
    })
    .catch((error) => {
      throw "can not fetch stockOperation list form backend " + error;
    });
}

function addstockOperation() {
  var name = document.getElementById("nom").value;
  var date = document.getElementById("date").value;
  if (
    validateFournissourName(name) &&
    validateDate(date) &&
    validateProductList(productQuantities)
  ) {
    postStock({
      name: name,
      date: date,
      articles: [...productQuantities],
    })
      .then((data) => getstockOperationList())
      .catch((error) => console.log(error));

    document.getElementById("nom").value = "";
    document.getElementById("date").value = "";
    productQuantities = [];
    closeAleartAddStockOperations();
  }
}

function removeStockOperation(stockOperationId) {
  deleteStockOperation(stockOperationId)
    .then((removedstockOperation) => getstockOperationList())
    .catch((error) => {
      throw "error can not remvoe stockOperation " + error;
    });
  closeRemovePopup();
}

function editstockOperation(stockOperationId) {
  let newTitle = document.getElementById("editinput").value;
  if (validateEditstockOperationTitileInput(newTitle)) {
    putstockOperationById(stockOperationId, newTitle)
      .then((stockOperation) => {
        getstockOperationList();
      })
      .catch((error) => {
        throw "can not edit stockOperation " + error;
      });
    closeEditPopup();
  }
}

function serachstockOperation(stockOperationTitle) {
  searchstockOperationByTitle(stockOperationTitle)
    .then(
      (stockOperationResult) => (stockOperationState = stockOperationResult)
    )
    .catch((error) => {
      throw "can not search stockOperation" + error;
    });
}

function removeAllstockOperation() {
  stockOperationState.splice(0, stockOperationState.length);
}

function searchstockOperation() {
  var stockOperationTitle = document.getElementById(
    "search-stock-operation"
  ).value;
  searchStockOperation(stockOperationTitle)
    .then((stockOperations) => randerStockOperationList(stockOperations))
    .catch((error) => {
      throw "can not search stockOperation " + error;
    });
}

function getProductsName() {
  getProducts().then((products) => {
    randerProductOptions(products);
  });
}
getProductsName();

function addProdactToTable() {
  var select = document.getElementById("produitNom");
  var quantity = document.getElementById("produitQuantity");
  if (validateProductToStockList(select.value, quantity.value)) {
    var article = { product: select.value, quantity: quantity.value };
    console.log(quantity.value);
    productQuantities.push(article);
    console.log(productQuantities);
    addProductToStockList(
      select.options[select.selectedIndex].text,
      quantity.value
    );
  }
  select.selectedIndex = 0;
  quantity.value = "";
}
