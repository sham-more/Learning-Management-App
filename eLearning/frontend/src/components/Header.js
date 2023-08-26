import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Header = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  return (
    <div>
      {/* Top Header */}
      {/* ... Top header code ... */}

      {/* Header */}
      <div className="header">
        <div className="container">
          <div className="mobile-header">
            <div className="container ">
              <div
                className="row "
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="logo" src="/images/logo.png" />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu" id="header_add">
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>

                      <Link className="dropdown-item" to="#">
                        Logout
                      </Link>
                    </div>
                  </div>
                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">4</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div className="pc-header">
            <div
              className="pc-header"
              style={{
                backgroundColor: "grey",
                borderRadius: "2px",
              }}
            >
              <div
                className="row"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "20px",
                  padding: "5px",
                }}
              >
                <div
                  className="col-md-3 col-4 d-flex align-items-center"
                  style={{
                    width: "150px",
                  }}
                >
                  <Link className="navbar-brand" to="/">
                    <img
                      alt="logo"
                      src="/images/logo.png"
                      style={{ borderRadius: "50%" }}
                    />
                  </Link>
                </div>

                {/* Search Bar */}

                <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                  <div className="btn-group">
                    <button
                      id="header_add"
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      User
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/">
                        User
                      </Link>

                      <Link className="dropdown-item" to="/login">
                        Admin
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
