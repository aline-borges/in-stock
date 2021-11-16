import React, { useState, useEffect } from 'react'

import './assets/styles/global-style.css'

import Container from './components/atoms/container'
import Header from './components/organisms/header'
import Table from './components/organisms/table'
import Product from './components/organisms/product'
import Search from './components/organisms/search'

import './assets/styles/global-style.css'

const App = () => {
  const [products, setProducts] = useState([])
  const [nextId, setNextId] = useState(1)
  const [sort, setSort] = useState({
    key: 'id',
    ascending: true
  })

  useEffect(() => {
    const productsList = JSON.parse(localStorage.getItem('products')) || []
    getNextId()
    setProducts(productsList)
  }, [])

  const handleDelete = (id) => {
    const filteredProducts =  products.filter((product) => product.id !== id )
    setProducts(filteredProducts)
    localStorage.setItem('products', JSON.stringify(filteredProducts))
    getNextId()
  }

  const handleSort = (tableField) => {
    if (sort.key === tableField) {
      setSort({
        key: tableField,
        ascending: !sort.ascending,
      })
      sortProducts(tableField, !sort.ascending)
    } else {
      setSort({
        key: tableField,
        ascending: true,
      })
      sortProducts(tableField, true)
    }
  }

  const sortProducts = (key, ascending) => {
    const sortedProducts = products.sort((a, b) => {
      const firstCondition = key === 'stock' || key === 'stockPrice' || 
      key === 'id' ? parseFloat(a[key]) < parseFloat(b[key]) : 
      a[key].toLowerCase() < b[key].toLowerCase()
      const secondCondition = key === 'stock' || key === 'stockPrice' || 
      key === 'id' ? parseFloat(a[key]) > parseFloat(b[key]) : 
      a[key].toLowerCase() > b[key].toLowerCase()
      if (firstCondition) {
        return ascending ? -1 : 1
      }
      if (secondCondition) {
        return ascending ? 1 : -1
      }
      return 0
    })
    setProducts(sortedProducts)
  }

  const handleSearch = (event) => {
    const { value } = event.target
    const productsList = JSON.parse(localStorage.getItem('products')) || []
    const filteredProducts = productsList.filter(product =>
      product.productName.toLowerCase().startsWith(value.toLowerCase()))
    setProducts(filteredProducts)
  }

  const handleStockChange = (id, operation) => {
    const changedProduct = products.find(product => product.id === id)
    const index = products.findIndex(product => product.id === id)
    let newStock
    if (operation === 'add') {
      newStock = Number(changedProduct.stock) + 1
    }
    if (operation === 'sub') {
      newStock = Number(changedProduct.stock) - 1
    }
    if (newStock === 0) {
      handleDelete(id)
      return
    }
    const newStockPrice = newStock * changedProduct.price
    changedProduct.stock = newStock
    changedProduct.stockPrice = newStockPrice
    const newProducts = products.filter(product => product.id !== id)
    newProducts.splice(index, 0, changedProduct)
    setProducts(newProducts)
    localStorage.setItem('products', JSON.stringify(newProducts))
  }

  const getNextId = () => {
    const products = JSON.parse(localStorage.getItem('products')) || []
    if (!products.length) {
      setNextId(1)
      return
    }
    const nextId = products.find((product, index) => {
      return product.id - 1 !== index
    })

    if (nextId) {
      setNextId(nextId.id - 1)
      return
    }

    setNextId(products.length + 1)
  }

  return (
    <>
      <Container>
        <Header />
        <Product updateProducts={setProducts} nextId={nextId} getNextId={getNextId} />
        <Search onSearch={handleSearch} />
        <Table
          onDelete={handleDelete}
          onSort={handleSort}
          onChangeStock={handleStockChange}
          products={products} />
      </Container>
    </>
  );
}

export default App;
