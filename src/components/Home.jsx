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
                    <th>Action</th>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        placeholder="title..."
                        value={value.title}
                        onChange={(e) => {
                          value.updateValue(e, "title");
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="info..."
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
                        placeholder="price..."
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
                        placeholder="Company..."
                        value={value.company}
                        onChange={(e) => {
                          value.updateValue(e, "company");
                        }}
                      />
                    </td>

                    <td>
                      <button
                        onClick={() => {
                          value.onSave(value.id);
                        }}
                      >
                        {value.id ? "Save" : "Add new"}
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
