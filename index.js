// let arrow = document.querySelectorAll(".arrow");
// for (var i = 0; i < arrow.length; i++) {
//   arrow[i].addEventListener("click", (e) => {
//     let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
//     arrowParent.classList.toggle("showMenu");
//   });
// }
// let sidebar = document.querySelector(".sidebar");
// let sidebarBtn = document.querySelector(".bx-menu");
// console.log(sidebarBtn);
// sidebarBtn.addEventListener("click", () => {
//   sidebar.classList.toggle("close");
// });

// function alertAddProducts() {
//   var popup = document.querySelector(".popup");
//   popup.style.display = "block";
// }

// document.getElementById("cancelButton").addEventListener("click", function () {
//   var popup = document.querySelector(".popup");
//   popup.style.display = "none";
// });

// async function editProduct(currentEditingProductId) {
//   let newTitle = document.getElementById("editinput").value;
//   if (newTitle) {
//     try {
//       console.log(newTitle);
//       const response = await editProductById(currentEditingProductId, newTitle);
//       if (response) {
//         console.log("Product updated successfully:", response);
//         // Close the edit popup
//         // Optionally, refresh the products list or update the UI as needed
//         // Clear the existing rows in the table before adding new product rows
//         let productTable = document.querySelector("#productTable");
//         let rows = productTable.querySelectorAll("tbody tr");
//         rows.forEach((row) => {
//           if (row !== productTable.tBodies[0].rows[0]) {
//             // Assuming the first row is the header
//             row.remove();
//           }
//         });
//         addProduct();
//       }
//     } catch (error) {
//       console.error("Failed to update product:", error);
//     }
//   } else {
//     alert("Please enter a product name.");
//   }
//   document.getElementById("editpopup").style.display = "none";
// }

// async function deleteProduct(productId) {
//   try {
//     const response = await deleteProductById(productId);
//     if (response) {
//       console.log("Product deleted successfully:", response);
//       // Refetch the products to update the table
//       let productTable = document.querySelector("#productTable");
//       let rows = productTable.querySelectorAll("tbody tr");
//       rows.forEach((row) => {
//         if (row !== productTable.tBodies[0].rows[0]) {
//           // Assuming the first row is the header
//           row.remove();
//         }
//       });
//       addProduct();
//     }
//   } catch (error) {
//     console.error("Failed to delete product:", error);
//   }
//   document.getElementById("deletepopup").style.display = "none";
// }

//  function showProducs(product) {
// //   let table = document.querySelector("#productTable tbody");
// //   let row = document.createElement("tr");
// //   let idCell = document.createElement("td");
// //   idCell.textContent = product.id;
// //   row.appendChild(idCell);

// //   let titleCell = document.createElement("td");
// //   titleCell.textContent = product.title;
// //   row.appendChild(titleCell);

// //   let stockCell = document.createElement("td");
// //   stockCell.textContent = product.stocks + " Unites";
// //   row.appendChild(stockCell);

// //   let sellsCell = document.createElement("td");
// //   sellsCell.textContent = product.sells + " Unites";
// //   row.appendChild(sellsCell);

// //   let actionCell = document.createElement("td");
// //   let editButton = document.createElement("i");
// //   editButton.className = "fa fa-edit";
// //   editButton.style.cursor = "pointer";
// //   editButton.onclick = () => {
// //     let editPopup = document.createElement("div");
// //     editPopup.innerHTML = `
// //         <div id="editpopup" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);">
// //         <p><input id="editinput" type="text" value="${product.title}"></p>
// //         <button onclick="editProduct('${product.id}')">Confirm</button>
// //         <button onclick="this.parentElement.style.display='none'">Cancel</button>
// //       </div>
      
// //         `;
// //     document.body.appendChild(editPopup);
// //   };
// //   actionCell.appendChild(editButton);

// //   let deleteButton = document.createElement("i");
// //   deleteButton.className = "fa fa-trash";
// //   deleteButton.style.cursor = "pointer";
// //   deleteButton.onclick = () => {
// //     let confirmationPopup = document.createElement("div");
// //     confirmationPopup.innerHTML = `
// //         <div id="deletepopup" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);">
// //           <p>Do you really want to delete this product?</p>
// //           <button onclick="deleteProduct('${product.id}')">Confirm</button>
// //           <button onclick="this.parentElement.style.display='none'">Cancel</button>
// //         </div>
// //       `;
// //     document.body.appendChild(confirmationPopup);
// //   };
// //   actionCell.appendChild(deleteButton);

// //   row.appendChild(actionCell);
// //   table.appendChild(row);
//  }

// // function addProduct() {
// //   getProducts()
// //     .then((products) => {
// //       products.forEach((product)=>showProducs(product));
// //     })
// //     .catch((error) => {
// //       console.error("Failed to load products:", error);
// //     });
// // }

// window.addEventListener("load", addProduct);

// document.getElementById("cancelButton").addEventListener("click", function () {
//   document.querySelector(".edit").style.display = "none";
// });

// document.getElementById("deleteCancel").addEventListener("click", function () {
//   document.querySelector(".delete").style.display = "none";
// });

// // Event listener for confirm buttons
// document
//   .getElementById("editConfirmButton")
//   .addEventListener("click", function () {
//     // Perform edit confirmation actions here
//     document.querySelector(".edit").style.display = "none";
//   });

// document
//   .getElementById("deleteConfirmButton")
//   .addEventListener("click", function () {
//     // Perform delete confirmation actions here
//     document.querySelector(".delete").style.display = "none";
//   });

// function addProductFromInput() {
//   const productName = document.getElementById("productName").value;
//   if (productName) {
//     postProducts({ title: productName })
//       .then((response) => {
//         console.log("Product added successfully:", response);
//         // Clear input after posting
//         document.getElementById("productName").value = "";
//         // Add the new product to the table with stock and sales values from the response
//         getProducts()
//           .then((products) => {
//             let table = document.querySelector("#productTable tbody");
//             // Remove all rows except the header
//             while (table.rows.length > 1) {
//               table.deleteRow(1);
//             }
//             products.forEach((product) => {
//               let row = document.createElement("tr");
//               let idCell = document.createElement("td");
//               idCell.textContent = product.id;
//               row.appendChild(idCell);

//               let titleCell = document.createElement("td");
//               titleCell.textContent = product.title;
//               row.appendChild(titleCell);

//               let stockCell = document.createElement("td");
//               stockCell.textContent = product.stocks + " Unites";
//               row.appendChild(stockCell);

//               let sellsCell = document.createElement("td");
//               sellsCell.textContent = product.sells + " Unites";
//               row.appendChild(sellsCell);

//               let actionCell = document.createElement("td");

//               let editButton = document.createElement("i");
//               editButton.className = "fa fa-edit";
//               editButton.style.cursor = "pointer";
//               editButton.onclick = () => editProduct(product.id);
//               actionCell.appendChild(editButton);

//               let deleteButton = document.createElement("i");
//               deleteButton.className = "fa fa-trash";
//               deleteButton.style.cursor = "pointer";
//               deleteButton.onclick = () => deleteProduct(product.id);
//               actionCell.appendChild(deleteButton);

//               row.appendChild(actionCell);
//               table.appendChild(row);
//             });
//           })
//           .catch((error) => {
//             console.error("Failed to load products:", error);
//           });
//         document.getElementById("productName").value = "";
//       })
//       .catch((error) => {
//         console.error("Error adding product:", error);
//       });
//   } else {
//     console.error("Product name is empty.");
//   }
// }

// document
//   .getElementById("confirmButton")
//   .addEventListener("click", addProductFromInput);

// function fetchAndDisplaySellOperations() {
//   var name = document.getElementById("search-product").value;
//   let stockOperationTable = document.querySelector("#productTable");
//   let rows = stockOperationTable.querySelectorAll("tbody tr");
//   rows.forEach((row) => {
//     if (row !== stockOperationTable.tBodies[0].rows[0]) {
//       row.remove();
//     }
//   });
//   searchProduct(name)
//     .then((products) => {
//       products.forEach((product) => showProducs(product));
//     })
//     .catch((error) => {
//       console.error("Error fetching stock operations:", error);
//     });
// }



getProductList();