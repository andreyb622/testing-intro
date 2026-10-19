const products = require("../../src/data/products");
const { sortProductsByPrice } = require("../../src/catalog");

describe("sortProductsByPrice", () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const result = sortProductsByPrice(products, "asc").map(
      (product) => product.id,
    );
    const expected = [3, 6, 5, 4, 2, 1];
    expect(result).toEqual(expected);
  });

  test("все товары без направления сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const result = sortProductsByPrice(products).map((product) => product.id);
    const expected = [3, 6, 5, 4, 2, 1];
    expect(result).toEqual(expected);
  });

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const selectedProducts = products.filter((product) =>
      [1, 3, 4].includes(product.id),
    );
    const result = sortProductsByPrice(selectedProducts, "asc").map(
      (product) => product.id,
    );
    const expected = [3, 4, 1];
    expect(result).toEqual(expected);
  });

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const result = sortProductsByPrice(products, "desc").map(
      (product) => product.id,
    );
    const expected = [1, 2, 4, 5, 6, 3];
    expect(result).toEqual(expected);
  });

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const selectedProducts = products.filter((product) =>
      [3, 1, 4].includes(product.id),
    );
    const result = sortProductsByPrice(selectedProducts, "desc").map(
      (product) => product.id,
    );
    const expected = [1, 4, 3];
    expect(result).toEqual(expected);
  });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const selectedProducts = products.filter((product) =>
      [5, 2, 6].includes(product.id),
    );
    const result = sortProductsByPrice(selectedProducts, "desc").map(
      (product) => product.id,
    );
    const expected = [2, 5, 6];
    expect(result).toEqual(expected);
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const selectedProducts = products.filter((product) =>
      [1, 3, 4].includes(product.id),
    );

    sortProductsByPrice(selectedProducts, "asc");

    const result = selectedProducts.map((product) => product.id);
    const expected = [1, 3, 4];
    expect(result).toEqual(expected);
  });

  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const selectedProducts = products.filter((product) =>
      [1, 3, 4].includes(product.id),
    );

    sortProductsByPrice(selectedProducts, "desc");

    const result = selectedProducts.map((product) => product.id);
    const expected = [1, 3, 4];
    expect(result).toEqual(expected);
  });

  test("направление по умолчанию не меняет исходный массив всех товаров", () => {
    sortProductsByPrice(products);
    const result = products.map((product) => product.id);
    const expected = [1, 2, 3, 4, 5, 6];
    expect(result).toEqual(expected);
  });
});
