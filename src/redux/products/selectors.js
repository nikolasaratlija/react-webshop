export const selectCategories = (state) =>
    [...new Set(state.productsStore.products.map(product => product.category))]

export const selectProducts = (state) =>
    state.productsStore.products

export const selectIsLoading = (state) =>
    state.productsStore.loading