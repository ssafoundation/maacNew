import React from "react";
import { Container } from "react-bootstrap";

const SearchBox = () => {
  return (
    <div className="search-box-main-container">
      <Container>
        <div className="searchbox-inner-wrap">
          <input type="search" name="" id="" />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default SearchBox;
