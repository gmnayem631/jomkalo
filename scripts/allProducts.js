const loadAllProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => displayAllProducts(data));
};

const loadCategories = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data));
};

const displayAllProducts = (products) => {
  const allProductContainer = document.getElementById("all-products-container");
  allProductContainer.innerHTML = ``;

  products.forEach((product) => {
    // console.log(product.id);
    const card = document.createElement("div");
    card.innerHTML = `
         <div
            class="bg-white p-3 rounded-xl shadow-md h-full hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex flex-col justify-between">
              <div class="bg-[#E5E7EB] flex justify-center items-center p-4 rounded-lg">
                <img
                  src="${product.image}"
                  alt="${product.title}"
                  class="h-48"
                />
              </div>
              <div class="p-5">
                <div class="flex items-center justify-between mb-2 text-sm">
                  <span
                    class="text-purple-700 font-medium bg-purple-100 px-2.5 py-1 rounded-full"
                    >${product.category.toUpperCase()}</span
                  >
                  <div class="flex items-center text-yellow-500">
                    <i class="fas fa-star"></i>
                    <span class="ml-1 font-medium">${product.rating.rate}</span>
                    <span class="text-gray-500 ml-1">(${product.rating.count})</span>
                  </div>
                </div>
                <h3 class="font-semibold text-gray-900 mb-2 line-clamp-2">
                  ${product.title}
                </h3>
                <p class="text-xl font-bold text-gray-900 mb-4">$${product.price}</p>
              </div>
              <div class="flex gap-3">
                <button
                  class="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <i class="fas fa-eye text-gray-500"></i> Details
                </button>
                <button
                  class="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <i class="fas fa-shopping-cart"></i> Add
                </button>
              </div>
            </div>
          </div>
    `;

    allProductContainer.appendChild(card);
  });
};

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";

  categories.forEach((category) => {
    const btnDiv = document.createElement("button");
    btnDiv.innerHTML = `
    <button class="btn btn-primary btn-outline"> ${category.toUpperCase()} </button>
    `;

    categoryContainer.appendChild(btnDiv);
  });
};

loadAllProducts();
loadCategories();

// "id": 1,
// "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price": 109.95,
// "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category": "men's clothing",
// "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
// "rating": {
// "rate": 3.9,
// "count": 120
// }
