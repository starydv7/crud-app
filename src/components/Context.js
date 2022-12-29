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
     getRecord=(id)=>{
         const product = this.state.AllData.find(item => item.id === id);
         return product;
     }
     onEdit = (id) => {
         const tempProduct = this.state.AllData;
         const index = tempProduct.indexOf(this.getRecord(id));
         const selectProduct = tempProduct[index];
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
