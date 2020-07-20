

export const mergeStoreToProduct = (product, store) => {
  console.log(product, store);
  product.producedBy = {id: store.id, name: store.name};
}