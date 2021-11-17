import React from 'react'
import './style.css'

import EditButton from '../../atoms/buttons/editButton/'
import StockButton from '../../atoms/buttons/stockButton/'

import settings from '../../../assets/icons/settings.svg'
import del from '../../../assets/icons/delete.svg'

const Table = (props) => {
  const renderRow = product => {
    return(
      <tr 
      key={product.id}
      className="products-row">
      <td 
      className="products-item" id="product-id">{product.id}</td>
      <td 
      className="products-item">{product.Name}</td>
      <td 
      className="products-item">{(product.UnitValue).toFixed(2)}</td>
      <td 
      className="products-item">
        <StockButton 
        text="-"
        onClick={() =>props.onChangeStock(product.id, 'sub')}/>
          {product.QuantityInStock}
        <StockButton 
        text="+"
        onClick={() =>props.onChangeStock(product.id, 'add')}/>
      </td>
      <td 
      className="products-item">R${(product.UnitValue * product.QuantityInStock).toFixed(2)}</td>
      <td className="products-item">
        <EditButton
        id="delete-button" 
        src={del} 
        alt="delete-icon"
        onClick={() => props.onDelete(product.id)}
        />
      </td>
    </tr>
    )
  }

  return(
    <section className="products-list">
      <table className="products-table">
        <thead className="products-header">
          <tr className="products-row">
            <th className="products-attribute">
              <button
                onClick={() => props.onSort('id')}
              >
                Cod
              </button>
            </th>
            <th className="products-attribute">
              <button
                onClick={() => props.onSort('Name')}
              >
                Nome
              </button>
            </th>
            <th className="products-attribute">
              <button
                onClick={() => props.onSort('UnitValue')}
              >
                Preço Unitário 
              </button>
            </th>
            <th className="products-attribute">
              <button
                onClick={() => props.onSort('QuantityInStock')}
              >
                Em Estoque
              </button>              
            </th>
            <th className="products-attribute">
              <button
                onClick={() => props.onSort('TotalValue')}
              >
                Preço do Estoque 
              </button>
            </th>
            <th className="products-attribute">
              <img 
              className="settings-icon" 
              src={settings} 
              alt="settings-icon" />
            </th>
          </tr>
        </thead>

        <tbody className="products-body">
          {props.products.map(product => renderRow(product))}
        </tbody>
      </table>
    </section>
  )
}

export default Table 
