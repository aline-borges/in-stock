import React, { useState } from 'react';
import { DataStore } from "@aws-amplify/datastore";
import { Product as ProductModel } from "../../../models";
import './style.css';

import Input from '../../atoms/input';
import Button from '../../atoms/buttons/button';

import create from '../../../assets/icons/create.svg';

const Product = (props) => {
  const [product, setProduct] = useState({
    Name: '',
    UnitValue: '',
    QuantityInStock: '',
    TotalValue: 0
  })

  const handleChange = (event) => {
    const { value, name } = event.target;
    if (name === 'QuantityInStock') {
        setProduct(prevState => ({
            ...prevState,
            [name]: parseFloat(value),
            TotalValue: parseFloat(prevState.QuantityInStock) * parseFloat(value)
        }))
        return;
    }
    if (name === 'UnitValue') {
        setProduct(prevState => ({
            ...prevState,
            [name]: parseFloat(value),
            TotalValue: parseFloat(prevState.QuantityInStock) * parseFloat(value)
        }))
        return;
    }
    setProduct(prevState => ({
        ...prevState,
        [name]: value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (parseFloat(product.UnitValue) === 0 || product.UnitValue === '') {
      alert('Preço não pode ser 0')
      return
    }
    if(parseFloat(product.QuantityInStock) === 0 || product.QuantityInStock === '') {
      alert('Estoque não pode ser abaixo de 1')
      return
    }
    await DataStore.save(new ProductModel(product));
    setProduct({
      Name: '',
      UnitValue: '',
      QuantityInStock: '',
      TotalValue: 0,
    });
    props.updateProducts();
  }

  return(
    <section className="product">
      <form className="product-form" onSubmit={handleSubmit}>
        <p className="title-form">Criar Item</p>
        <Input 
        type="text"
        placeholder="Ex: Mesa"
        attribute="Nome:"
        name="Name"
        onChangeText={handleChange}
        value={product.Name}
        required="required"
        />

        <Input
        type="number"
        placeholder="Ex: 250.50"
        attribute="Preço Unitário:" 
        name="UnitValue"
        onChangeText={handleChange}
        value={product.UnitValue}
        />
        
        <Input
        type="number"
        placeholder="Ex: 100"
        attribute="Em Estoque:" 
        name="QuantityInStock"
        onChangeText={handleChange}
        value={product.QuantityInStock}
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
