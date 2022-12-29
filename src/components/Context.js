import React, { Component } from 'react'
import { rowData } from './AppData';

const ProductContext = React.createContext();
 class ProductProvider extends Component {
    state = {
        AllData: rowData,
        id: '',
        title: '',
        info: '',
        company: '',
        updateEdit:[]
     }
     onEdit = (id) => {
         const tempProduct = tempProduct.indexOf(this.getRecord(id));
     }
    render() {
        console.log(this.state.AllData);
    return (
        <div>
            <ProductContext.Provider
            value={{...this.state}}>
{this.props.children}
            </ProductContext.Provider>
      </div>
    )
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
