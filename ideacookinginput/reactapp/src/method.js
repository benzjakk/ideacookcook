import React, { Component,useState,Fragment } from "react";
import './method.css';


class method extends Component {
        state = {
                meths: ['']
                
              }
            
              handleText = i => e => {
                let meths = [...this.state.meths]
                meths[i] = e.target.value
                this.setState({
                  meths
                })
              }
            
              handleDelete = i => e => {
                e.preventDefault()
                let meths = [
                  ...this.state.meths.slice(0, i),
                  ...this.state.meths.slice(i + 1)
                ]
                this.setState({
                  meths
                })
              }
            
              addMethod = e => {
                e.preventDefault()
                let meths = this.state.meths.concat([''])
                this.setState({
                  meths
                })
              }
            
              render() {
                return (
                  <Fragment>
                    {this.state.meths.map((meths, index) => (
                      <span key={index}>
                        <textarea
                          type="text"
                          rows="7"              
                          onChange={this.handleText(index)}
                          value={meths}
                        />
                        <input type="file" id="img" name="img" accept="image/*"></input>
                        <button id="xbut" onClick={this.handleDelete(index)}>X</button>
                      </span>
                    ))}
                    <button onClick={this.addMethod}>Add more method</button>
                  </Fragment>
                )
              }
            }

export default method;





/*<div>
        <hr />
        <li>
                <p>ขั้นตอนการทำ  </p>                
        </li>
        <textarea rows = "5" cols = "70" >
                
        </textarea>
        <li>
                <p>อัพโหลดรูปภาพ</p>
                <input type="file" id="img" name="img" accept="image/*"></input>
        </li>
        <hr />
        </div>*/