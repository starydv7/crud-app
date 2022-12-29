import React, { Component } from 'react'
import { ProductConsumer } from './Context'
export default class Home extends Component {
  render() {
    return (
        <div>
            <h3>Crud operation</h3>
            <ProductConsumer>
                {(value) => {
                    return (
                        <table>
                            <tbody>
                                <tr>
                                    <th>Title</th>
                                    <th>Info</th>
                                    <th>Company</th>
                                    <th>Actions</th>
                                </tr>
                            </tbody>
                        </table>
                    )
                }}
            </ProductConsumer> 




      </div>
    )
  }
}
