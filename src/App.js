import React, { useState, useEffect } from "react";
import Amplify from "@aws-amplify/core";
import awsconfig from "./aws-exports";
import { DataStore } from "@aws-amplify/datastore";
import { Product as ProductModels } from "./models";

import "./assets/styles/global-style.css";

import Container from "./components/atoms/container";
import Header from "./components/organisms/header";
import Table from "./components/organisms/table";
import Product from "./components/organisms/product";
import Search from "./components/organisms/search";

Amplify.configure(awsconfig);

const App = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState({
    key: "id",
    ascending: true,
  });

  const getData = async () => {
    const products = await DataStore.query(ProductModels);
    setProducts(products);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    const todelete = await DataStore.query(ProductModels, id);
    DataStore.delete(todelete);
    getData();
  };

  const handleSort = (tableField) => {
    if (sort.key === tableField) {
      setSort({
        key: tableField,
        ascending: !sort.ascending,
      });
      sortProducts(tableField, !sort.ascending);
    } else {
      setSort({
        key: tableField,
        ascending: true,
      });
      sortProducts(tableField, true);
    }
  };

  const sortProducts = (key, ascending) => {
    const sortedProducts = products.sort((a, b) => {
      const firstCondition =
        key === "QuantityInStock" || key === "UnitValue" || key === "TotalValue"
          ? parseFloat(a[key]) < parseFloat(b[key])
          : a[key].toLowerCase() < b[key].toLowerCase();
      const secondCondition =
        key === "QuantityInStock" || key === "UnitValue" || key === "TotalValue"
          ? parseFloat(a[key]) > parseFloat(b[key])
          : a[key].toLowerCase() > b[key].toLowerCase();
      if (firstCondition) {
        return ascending ? -1 : 1;
      }
      if (secondCondition) {
        return ascending ? 1 : -1;
      }
      return 0;
    });
    setProducts(sortedProducts);
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    const productsList = JSON.parse(localStorage.getItem("products")) || [];
    const filteredProducts = productsList.filter((product) =>
      product.productName.toLowerCase().startsWith(value.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleStockChange = (id, operation) => {
    const changedProduct = products.find((product) => product.id === id);
    const index = products.findIndex((product) => product.id === id);
    let newStock;
    if (operation === "add") {
      newStock = Number(changedProduct.stock) + 1;
    }
    if (operation === "sub") {
      newStock = Number(changedProduct.stock) - 1;
    }
    if (newStock === 0) {
      handleDelete(id);
      return;
    }
    const newStockPrice = newStock * changedProduct.price;
    changedProduct.stock = newStock;
    changedProduct.stockPrice = newStockPrice;
    const newProducts = products.filter((product) => product.id !== id);
    newProducts.splice(index, 0, changedProduct);
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  return (
    <Container>
      <Header />
      <Product updateProducts={setProducts} />
      <Search onSearch={handleSearch} />
      <Table
        onDelete={handleDelete}
        onSort={handleSort}
        onChangeStock={handleStockChange}
        products={products}
      />
    </Container>
  );
};

export default App;
