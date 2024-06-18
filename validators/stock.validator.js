function validateFournissourName(name) {
  if (!name) {
    document.getElementById("nom").style.borderColor = "red";
    return false;
  }
  return true;
}

function validateDate(date) {
  if (!date) {
    document.getElementById("date").style.borderColor = "red";
    return false;
  }
  return true;
}

function validateProductList(products) {
    console.lo
  if (products.length == 0) {
      document.getElementById("error").textContent = "you should add a product";
      return false;
  }
    return true;
}

function validateProductToStockList(product, quantity) {
    if (!product) {
        console.log('you can not add empty product');
        return false;
    }
    if (quantity == 0) {
      console.log("you can not add empty product");
      return false;
    }

    return true;
    
}
