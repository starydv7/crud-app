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
     updateValue = (e, test) => {
         if (test === "title") {
             this.state.title = e.target.value;
         }
         if (test === 'info') {
             this.state.info = e.target.value;
         }
         if (test === 'price') {
             this.state.price = e.target.value;
         }
         if (test === 'company') {
             this.state.company = e.target.value;
         } const tempArr =
             [this.state.id, this.state.title, this.state.info
             , this.state.price, this.state.company];
         this.setState({
             updateEdit: tempArr
         })
     }
     onSave = (id) => {
         if (id !== '') {
             const SaveRecord = this.state.AllData;;
             const index = SaveRecord.indexOf(this.getRecord(id));
             const Record = SaveRecord[index];
         }
         
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
