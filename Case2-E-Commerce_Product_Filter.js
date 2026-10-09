const products = [
  { name: "Laptop", price: 1000, active: true },
  { name: "Mouse", price: 20, active: false },
  { name: "Keyboard", price: 50, active: true },
];

const activeProducts = products.filter((product) => {
  return product.active === true;
});

const newArray = products.map((product) => {
  return product.name.toUpperCase();
});

const totalPrice = activeProducts.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log("Produk aktif:", activeProducts);
console.log("Nama produk:", newArray);
console.log("Total harga:", totalPrice);