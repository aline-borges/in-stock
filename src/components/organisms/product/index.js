import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      toast.warning("Preço não pode ser 0...🤔", {
        position: "top-right",
        theme: "dark",
        role: "stock-zero-alert",
      })
      return
    }
    if(parseFloat(product.QuantityInStock) === 0 || product.QuantityInStock === '') {
      toast.warning("Estoque não pode ser abaixo de 1...🤨", {
        position: "top-right",
        theme: "dark",
        role: "stock-below-alert",
      })
      return
    }

    if (window.confirm('Está tudo certo com os seus dados??')) {
      await DataStore.save(new ProductModel(product));
      setProduct({
        Name: '',
        UnitValue: '',
        QuantityInStock: '',
        TotalValue: 0,
      });
      props.updateProducts();
      toast.success("Produto criado com sucesso! 👌", {
        position: "top-right",
        theme: "dark",
        role: "create-product-alert",
      })
    } else {
      toast.info("Nenhum produto foi criado. 😥", {
        position: "top-right",
        theme: "dark",
        role: "none-product-alert",
      })
    }
  }

  return(
    <section className="product">
      <ToastContainer />
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
