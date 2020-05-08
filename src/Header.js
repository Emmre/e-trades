import React, { Component } from "react";
import button from "react-bootstrap/Button";

class Header extends Component {    
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Greengrocer</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Choose, Love, Take it" aria-label="Search" onChange={this.onchange}/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <ul class="navbar-nav ml-auto mr-auto">
            <li>
            <div class="cart-info">
            <table>
              <tbody>
                <tr>
                  <td>No. of items</td>
                  <td>:</td>
                  <td>
                    <strong></strong>
                  </td>
                </tr>
                <tr>
                  <td>Sub Total</td>
                  <td>:</td>
                  <td>
                    <strong></strong>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
            </li>
            <ul>
            <a class="cart-icon" href="#">
              <img class=" " src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png" alt="Cart"/>
              <span class="cart-count"></span>
            </a>
            </ul>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;
