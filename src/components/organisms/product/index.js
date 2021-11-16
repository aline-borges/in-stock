import React, { useState, useEffect } from 'react'
import './style.css'

import Input from '../../atoms/input'
import Button from '../../atoms/buttons/button'

import create from '../../../assets/icons/create.svg'

const Product = (props) => {
  const [product, setProduct] = useState({
    id: 1,
    productName: '',
    price: '',
    stock: '',
    stockPrice: 0
  })

  useEffect(() => {
    setProduct({
      id: props.nextId,
      productName: '',
      price: '',
      stock: '',
      stockPrice: 0,
    })
  }, [props.nextId])

  const handleChange = (event) => {
    const { value, name } = event.target;
    if (name === 'stock') {
        setProduct(prevState => ({
            ...prevState,
            [name]: value,
            stockPrice: prevState.price * value
        }))
        return;
    }
    if (name === 'price') {
        setProduct(prevState => ({
            ...prevState,
            [name]: value,
            stockPrice: prevState.stock * value
        }))
        return;
    }
    setProduct(prevState => ({
        ...prevState,
        [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (parseFloat(product.price) === 0 || product.price === '') {
      alert('Preço não pode ser 0')
      return
    }
    if(parseFloat(product.stock) === 0 || product.stock === '') {
      alert('Estoque não pode ser abaixo de 1')
      return
    }
    const products = JSON.parse(localStorage.getItem('products')) || []
    products.push(product)
    const orderedProducts = products.sort((a, b) => a.id - b.id)
    localStorage.setItem('products', JSON.stringify(orderedProducts))
    setProduct({
      id: props.nextId,
      productName: '',
      price: '',
      stock: '',
      stockPrice: 0,
    })
    props.updateProducts(products)
    props.getNextId()
  }

  return(
    <section className="product">
      <form className="product-form" onSubmit={handleSubmit}>
        <p className="title-form">Criar Item</p>
        <Input
        type="number"
        attribute="Cod:"
        readOnly
        value={product.id}
        />

        <Input 
        type="text"
        placeholder="Ex: Mesa"
        attribute="Nome:"
        name="productName"
        onChangeText={handleChange}
        value={product.productName}
        required="required"
        />

        <Input
        type="number"
        placeholder="Ex: 250.50"
        attribute="Preço Unitário:" 
        name="price"
        onChangeText={handleChange}
        value={product.price}
        />
        
        <Input
        type="number"
        placeholder="Ex: 100"
        attribute="Em Estoque:" 
        name="stock"
        onChangeText={handleChange}
        value={product.stock}
        />

        <Button 
        id="create-product-button"
        text="Criar"
        src={create}
        alt="create-icon"
        />
      </form>
    </section>
  )
}

export default Product 
