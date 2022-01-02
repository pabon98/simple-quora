import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand ms-5 text-danger" href="#Quora">Quora</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-5 mb-2 mb-lg-0">
        <li class="nav-item font">
          <a class="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#following">Following</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#answer">Answer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#space">Spaces</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#notification">Notification</a>
        </li>
        
      </ul>
      <form class="d-flex ms-5">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;