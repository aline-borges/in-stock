import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const productsRef = useRef();
  
  const getData = async () => {
    const products = await DataStore.query(ProductModels);
    setProducts(products);
    productsRef.current = products;
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    const todelete = await DataStore.query(ProductModels, id);

    if (window.confirm('Você tem certeza que deseja deletar esse produto? 😮')) {
      DataStore.delete(todelete);
      getData();
      toast.success("Produto removido com sucesso! 👍", {
        position: "top-right",
        theme: "dark",
        role: "delete-alert",
      })
    } else {
      toast.info("Nenhum produto foi removido. 😥", {
        position: "top-right",
        theme: "dark",
        role: "none-product-alert",
      })
    }
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
    const filteredProducts = productsRef.current.filter((product) =>
      product.Name.toLowerCase().startsWith(value.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleStockChange = async (id, operation) => {
    const original = await DataStore.query(ProductModels, id);

    let newStock;
    if (operation === "add") {
      newStock = Number(original.QuantityInStock) + 1;
    }
    if (operation === "sub") {
      newStock = Number(original.QuantityInStock) - 1;
    }
    if (newStock === 0) {
      handleDelete(id);
      return;
    }
    const newStockPrice = newStock * original.UnitValue;

    await DataStore.save(
      ProductModels.copyOf(original, updated => {
        updated.QuantityInStock = newStock;
        updated.TotalValue = newStockPrice
      })
    );
    getData();
  };

  return (
    <Container>
      <Header />
      <ToastContainer />
      <Product updateProducts={getData} />
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
