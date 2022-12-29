import React, { Component } from "react";
import { ProductConsumer } from "./Context";
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
                    <th>InCart</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        value={value.info}
                        onChange={(e) => {
                          value.updateValue(e, "info");
                        }}
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        value={value.price}
                        onChange={(e) => {
                          value.updateValue(e, "price");
                        }}
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        value={value.company}
                        onChange={(e) => {
                          value.updateValue(e, "company");
                        }}
                      />
                            </td>
                            <td>

                                <button onClick={() => { value.onsave(value.id) }}>
                                Save
                            </button>
                            </td>
                            
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
                          <button
                            onClick={() => {
                              value.onEdit(item.id);
                            }}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              value.onDelete(item.id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
