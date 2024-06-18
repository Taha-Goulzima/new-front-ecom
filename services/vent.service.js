var SellOperationState = [];
const productQuantities = [];

function getSellOperationList() {
  getSells()
    .then((SellOperations) => {
      randerSellOperationList(SellOperations);
    })
    .catch((error) => {
      throw "can not fetch SellOperation list form backend " + error;
    });
}

function addSellOperation() {
  var name = document.getElementById("nom").value;
  var date = document.getElementById("date").value;
  if (
    validateClientName(name) &&
    validateDate(date) &&
    validateProductList(productQuantities)
  ) {
    postSells({
      name: name,
      date: date,
      articles: [...productQuantities],
    })
      .then((data) => {
        if (validateAddSellesData(data)) {
          getSellOperationList();
          document.getElementById("nom").value = "";
          document.getElementById("date").value = "";
          closeAleartAddSellOperations();
        }
      })
      .catch((error) => console.log(error));
  }
}

function removeSellOperation(SellOperationId) {
  deleteSellOperation(SellOperationId)
    .then((removedSellOperation) => getSellOperationList())
    .catch((error) => {
      throw "error can not remvoe SellOperation " + error;
    });
  closeRemovePopup();
}

function editSellOperation(SellOperationId) {
  let newTitle = document.getElementById("editinput").value;
  if (validateEditSellOperationTitileInput(newTitle)) {
    putSellOperationById(SellOperationId, newTitle)
      .then((SellOperation) => {
        getSellOperationList();
      })
      .catch((error) => {
        throw "can not edit SellOperation " + error;
      });
    closeEditPopup();
  }
}


function removeAllSellOperation() {
  SellOperationState.splice(0, SellOperationState.length);
}

function searchSellOperation() {
  var SellOperationTitle = document.getElementById(
    "search-sell-operation"
  ).value;
  searchSellOperationApi(SellOperationTitle)
    .then((SellOperations) => randerSellOperationList(SellOperations))
    .catch((error) => {
      throw "can not search SellOperation " + error;
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
  if (validateProductToSellList(select.value, quantity.value)) {
    var article = { product: select.value, quantity: quantity.value };
    console.log(quantity.value);
    productQuantities.push(article);
    console.log(productQuantities);
    addProductToSellList(
      select.options[select.selectedIndex].text,
      quantity.value
    );
  }
  select.selectedIndex = 0;
  quantity.value = "";
}
