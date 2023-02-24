const quantityCategories = document.querySelectorAll(".item");
// console.log(quantityCategories);
console.log(`Number of categories: ${quantityCategories.length}`);

const categoriesArray = [...quantityCategories]
  .map(
    (categories) => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);
