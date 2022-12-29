import React, { Component } from 'react'
import { ProductConsumer } from './Context'
export default class Home extends Component {
  render() {
    return (
        <div>
            <h3>Crud operation</h3>
            <ProductConsumer>
                
            </ProductConsumer> 




      </div>
    )
  }
}
