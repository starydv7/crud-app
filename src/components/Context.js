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
         const selectRecord = tempProduct[index];
         this.setState({
             id: selectRecord['id'],
             title: selectRecord['title'],
             info: selectRecord['info'],
             price: selectRecord['price'],
             company:selectRecord['company']
             
         })
     }
    render() {
        console.log(this.state.AllData);
    return (
        <div>
            <ProductContext.Provider
                value={{
                    ...this.state,
                onEdit:this.onEdit}}>
{this.props.children}
            </ProductContext.Provider>
      </div>
    )
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
