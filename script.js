const addBtn = document.getElementById("btn_add_product");
const list = document.getElementById("products_list");
const productName = document.getElementById("input_form_name");
const productQuantity = document.getElementById("input_form_quantity");
const clearProducts = document.getElementById("btn_delete_products");

let products = [];



const showProducts = () => {
    list.innerHTML = "";
    products.forEach((t) => {
        const newProduct = document.createElement("li");
        newProduct.textContent = `${t.name}, ${t.quantity}`;;
        list.appendChild(newProduct);
    });
}

const addTask = () => {
    const text = productName.value;
    const quant = productQuantity.value;
    if (text != '' && quant != '') {
        products.push({
            name: text,
            quantity: quant
        });
        productName.value = "";
        productQuantity.value = "";
        showProducts();
        localStorage.setItem("products", JSON.stringify(products));
    }
}

const clearList = () => {
    const empty = document.createElement("li");
    products = [];
    localStorage.removeItem("products");
    showProducts();
    list.appendChild(empty)
}

addBtn.onclick = addTask;
clearProducts.onclick = clearList;


const lsProducts = localStorage.getItem("products");


if (lsProducts != null) {
    products = JSON.parse(lsProducts);
    showProducts();
}