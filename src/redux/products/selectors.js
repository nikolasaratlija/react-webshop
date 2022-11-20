export const selectCategories = (state) =>
    [...new Set(state.productsStore.products.map(product => product.category))]
