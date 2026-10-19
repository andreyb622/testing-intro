const products = require("../../src/data/products");
const { searchProducts } = require("../../src/catalog");

describe("searchProducts", () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const result = searchProducts(products, "Наушники").map(
      (product) => product.id,
    );
    const expected = [1];
    expect(result).toEqual(expected);
  });

  test("'Чистый код' возвращает товар с ID 6", () => {
    const result = searchProducts(products, "Чистый код").map(
      (product) => product.id,
    );
    const expected = [6];
    expect(result).toEqual(expected);
  });

  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const result = searchProducts(products, "Настольная лампа").map(
      (product) => product.id,
    );
    const expected = [4];
    expect(result).toEqual(expected);
  });

  test("'javascript' возвращает товар с ID 3", () => {
    const result = searchProducts(products, "javascript").map(
      (product) => product.id,
    );
    const expected = [3];
    expect(result).toEqual(expected);
  });

  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const result = searchProducts(products, "ЧЕХОЛ").map(
      (product) => product.id,
    );
    const expected = [5];
    expect(result).toEqual(expected);
  });

  test("'наушники' возвращает товар с ID 1", () => {
    const result = searchProducts(products, "наушники").map(
      (product) => product.id,
    );
    const expected = [1];
    expect(result).toEqual(expected);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = searchProducts(products, "").map((product) => product.id);
    const expected = [1, 2, 3, 4, 5, 6];
    expect(result).toEqual(expected);
  });

  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = searchProducts(products, "   ").map((product) => product.id);
    const expected = [1, 2, 3, 4, 5, 6];
    expect(result).toEqual(expected);
  });

  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = searchProducts(products, "\t\n").map(
      (product) => product.id,
    );
    const expected = [1, 2, 3, 4, 5, 6];
    expect(result).toEqual(expected);
  });
});
