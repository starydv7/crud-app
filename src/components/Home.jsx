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
                                    <th>Price</th>
                                    <th>Company</th>
                                    <th>Actions</th>
                                </tr>
                                {value.AllData.map((item) => {
                                    return (
                                      <tr>
                                        <td>{item.title}</td>
                                        <td>{item.info}</td>
                                        <td>{item.price}</td>
                                            <td>{item.company}</td>
                                            <td>{item.inCart.toString()}</td>
                                            <td> 
                                                <button onClick={() => { value.onEdit() }}>
Edit
                                                </button>
                                            </td>
                                      </tr>
                                    );
                               })} 
                            </tbody>
                        </table>
                    )
                }}
            </ProductConsumer> 




      </div>
    )
  }
}
