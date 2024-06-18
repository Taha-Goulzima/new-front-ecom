function randerSellOperationList(SellOperations) {
  cleanSellOperations();
  SellOperations.forEach((SellOperation) => {
    console.log(SellOperation);
    randerSellOperation(SellOperation);
  });
}

function randerSellOperation(SellOperation) {
  const table = document.getElementById("sell-operation-table");

  const row = table.insertRow(-1);
  row.id = `Sell-row-${SellOperation._id}`;
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);
  cell1.innerHTML = SellOperation._id;
  cell2.innerHTML = SellOperation.name;
  cell3.innerHTML = SellOperation.date.substring(0, 10);
  cell4.innerHTML = SellOperation.articles.length + " produits";
  const editIcon = document.createElement("i");
  editIcon.className = "fa fa-eye";
  editIcon.style.cursor = "pointer";
  editIcon.onclick = function () {
    // Function to handle edit operation
    console.log("hello");

    document.getElementById("editPopup-" + SellOperation._id).style.display =
      "flex";
  };
  var editPopup = document.createElement("div");
  editPopup.innerHTML = ` <div class="editPopup" id="editPopup-${
    SellOperation._id
  }">
  <div class="popupContent">
    <h2>Nouvelle Opération Sell</h2>
    <div class="inputFields">
      <div class="name1">
        <label for="nom">Nom Fournisseur</label>
        <input type="text" id="nom" value='${SellOperation.name}'>
      </div>
      <div class="date1">
        <label for="date">Date Livraison</label>
        <input type="date" id="date" class="dateInput" value='${SellOperation.date.substring(
          0,
          10
        )}'>
      </div>
    </div>
    <div class="down">
      <h3>Produit</h3>
      <table class="productTable">
        <tbody>
          ${SellOperation.articles.map((product) => {
            var row = document.createElement("tr");
            var nameCell = document.createElement("td");
            nameCell.textContent = product.product.title;
            row.appendChild(nameCell);
            var quantityCell = document.createElement("td");
            quantityCell.textContent = product.quantity;
            row.appendChild(quantityCell);
            console.log(row);
            return row.outerHTML;
          })}
        </tbody>
      </table>
    </div>
    <div class="btns">
      <button class="cancel" onclick="this.parentElement.parentElement.parentElement.style.display='none'">Annuler</button>
    </div>
  </div>
</div>`;
  cell5.appendChild(editIcon);

  const removeIcon = document.createElement("i");
  removeIcon.className = "fa fa-trash";
  removeIcon.style.cursor = "pointer";
  removeIcon.onclick = function () {
    // Function to handle remove operation
    deleteProduct();
  };
  var deletePopUp = document.createElement("dev");
  deletePopUp.innerHTML = `<div class="deletePopup" id="deletePopup">
  <div class="popupContent">
    <h2>Supprimer Opération Sell</h2>
    <p>Vous êtes entrain de supprimer l'opération de Sell de <span style="color: red;">${
      SellOperation.name
    }</span> le <span style="color: red;">${SellOperation.date.substring(
    0,
    10
  )}</span>.</p>
    <p>La suppression de cette opération va impacter la quantité du Sell des produits qui y sont inclus.
    </p>
    <p>Êtes-vous sûr de vouloir supprimer cette opération?</p>
    <div class="btns">
      <button class="cancel" onclick="closeDeletePopup()">Annuler</button>
      <button class="delete" onclick="removeSellOperation('${
        SellOperation._id
      }'); this.parentElement.parentElement.parentElement.style.display='none'">Supprimer</button>
    </div>
  </div>
</div>`;
  cell5.appendChild(removeIcon);
  cell5.appendChild(deletePopUp);
  cell5.appendChild(editPopup);
}

function cleanSellOperations() {
  removeAllSellOperation();
  let SellOperationTable = document.querySelector("#sell-operation-table");
  let rows = SellOperationTable.querySelectorAll("tbody tr");
  rows.forEach((row) => {
    if (row !== SellOperationTable.tBodies[0].rows[0]) {
      row.remove();
    }
  });
}

function alertAddSellOperations() {
  var popup = document.getElementById("sell-operation-popup");
  popup.style.display = "block";
}

function closeAleartAddSellOperations() {
  var popup = document.getElementById("sell-operation-popup");
  popup.style.display = "none";
}

function hidAddSellOperationPopup() {
  var popup = document.querySelector(".sell-operation-popup");
  popup.style.display = "none";
  document.getElementById("SellOperationName").value = "";
}

function closeEditPopup() {
  document.getElementById("editpopup").style.display = "none";
}

function closeRemovePopup() {
  document.getElementById("deletePopup").style.display = "none";
}

function randerProductOptions(products) {
  var select = document.getElementById("produitNom");
  products.forEach((product) => {
    var option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.title;
    select.appendChild(option);
  });
}

function addProductToSellList(productName, quantity) {
  var productTabel = document.getElementById("productSellTabel");
  var row = document.createElement("tr");
  var productCell = document.createElement("td");
  productCell.textContent = productName;
  row.appendChild(productCell);

  var quantityCell = document.createElement("td");
  quantityCell.textContent = quantity;
  row.appendChild(quantityCell);

  productTabel.appendChild(row);
}

function deleteProduct() {
  document.getElementById("deletePopup").style.display = "flex";
}

function closeDeletePopup() {
  document.getElementById("deletePopup").style.display = "none";
}
