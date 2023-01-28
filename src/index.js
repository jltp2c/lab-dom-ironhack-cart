// ITERATION 1

function updateSubtotal(product) {
  // console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");
  // console.log("Prix :", price.innerHTML);
  // console.log("Quantité(s) :", quantity.value);

  total = price.innerHTML * quantity.value;
  // console.log(total);

  subtotal.innerHTML = total;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const subtotal = document.querySelectorAll(".subtotal span");
  const totalValue = document.getElementById("total-value");
  let itemStored = [];
  const product = document.getElementsByClassName("product");
  // on peut utiliser querySelectorAll qui renvoie un tab
  for (let i = 0; i < product.length; i++) {
    itemStored.push(product[i]);
  }
  itemStored.forEach((item) => {
    // console.log(item);
    updateSubtotal(item);
  });
  // ITERATION 3
  let total = 0;
  for (let i = 0; i < subtotal.length; i++) {
    // console.log(subtotal[i].innerHTML);
    total += parseInt(subtotal[i].innerHTML);
  }
  totalValue.innerHTML = `Total: $${total}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  let parent = target.parentNode.parentNode.parentNode;
  let children = target.parentNode.parentNode;
  parent.removeChild(children);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const parent = document.querySelector("#cart tbody");
  const newProduct = document.createElement("tr");
  const CreateNewProduct = document.querySelector(".create-product");
  let inputName = CreateNewProduct.querySelector("input");
  let inputPrice = CreateNewProduct.querySelector("input[type='number']");
  let inputPriceFormat = parseFloat(inputPrice.value);
  let inputPriceDecimal = inputPriceFormat.toFixed(2);

  newProduct.className = "product";
  newProduct.innerHTML = `
        <td class="name">
          <span>${inputName.value}</span>
        </td>
        <td class="price">$<span>${inputPriceDecimal}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>
  `;
  console.log(newProduct);
  console.log("input name", inputName.value);
  console.log("input price", inputPriceDecimal);

  parent.appendChild(newProduct);
  const btnRemoval = document.querySelectorAll(".btn-remove");
  btnRemoval.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  });

  inputName.value = "";
  ValuePrice = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const btnRemoval = document.querySelectorAll(".btn-remove");
  btnRemoval.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  });

  document.getElementById("create").addEventListener("click", createProduct);
});
