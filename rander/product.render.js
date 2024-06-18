function randerProductList(products) {
  cleanProducts();
  products.forEach((product) => {
    console.log(product);
    randerProduct(product);
  });
}

function randerProduct(product) {
  let table = document.querySelector("#productTable tbody");
  let row = document.createElement("tr");
  let idCell = document.createElement("td");
  idCell.textContent = product._id;
  row.appendChild(idCell);

  let titleCell = document.createElement("td");
  titleCell.textContent = product.title;
  row.appendChild(titleCell);

  let stockCell = document.createElement("td");
  stockCell.textContent = product.stocks + " Unites";
  row.appendChild(stockCell);

  let sellsCell = document.createElement("td");
  sellsCell.textContent = product.sells + " Unites";
  row.appendChild(sellsCell);

  let actionCell = document.createElement("td");
  let editButton = document.createElement("i");
  editButton.className = "fa fa-edit";
  editButton.style.cursor = "pointer";
  editButton.onclick = () => {
    let editPopup = document.createElement("div");
    editPopup.innerHTML = `
        <div id="editpopup" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);">
        <p><input id="editinput" type="text" value="${product.title}"></p>
        <span id="error" class="error"></span>
        <button onclick="editProduct('${product.id}')">Confirm</button>
        <button onclick="this.parentElement.style.display='none'">Cancel</button>
      </div>
      
        `;
    document.body.appendChild(editPopup);
  };
  actionCell.appendChild(editButton);

  let deleteButton = document.createElement("i");
  deleteButton.className = "fa fa-trash";
  deleteButton.style.cursor = "pointer";
  deleteButton.onclick = () => {
    let confirmationPopup = document.createElement("div");
    confirmationPopup.innerHTML = `
        <div id="deletepopup" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);">
          <p>Do you really want to delete this product?</p>
          <button onclick="removeProduct('${product.id}')">Confirm</button>
          <button onclick="this.parentElement.style.display='none'">Cancel</button>
        </div>
      `;
    document.body.appendChild(confirmationPopup);
  };
  actionCell.appendChild(deleteButton);

  row.appendChild(actionCell);
  table.appendChild(row);
}

function cleanProducts() {
  removeAllProduct();
  let productTable = document.querySelector("#productTable");
  let rows = productTable.querySelectorAll("tbody tr");
  rows.forEach((row) => {
    if (row !== productTable.tBodies[0].rows[0]) {
      row.remove();
    }
  });
}

function alertAddProducts() {
  var popup = document.querySelector(".popup");
  popup.style.display = "block";
}

function hidAddProductPopup() {
  var popup = document.querySelector(".popup");
  popup.style.display = "none";
  document.getElementById("productName").value = "";
}


function closeEditPopup() {
    document.getElementById("editpopup").style.display ='none';
}

function closeRemovePopup() {
    document.getElementById("deletepopup").style.display='none';
}
