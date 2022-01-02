import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import logo from "../../images/science logo.png";
import science from "../../images/science.jpg";
import quantamlogo from "../../images/quantam.jpg";
import quantam1 from "../../images/quantam1.jpg";
import algorithmlogo from "../../images/algorithm logo.png";
import algorithm from "../../images/algorithm.png";
import mindblowscience from "../../images/mindblowsciencelogo.png";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="row d-flex justify-content-center my-2">
        <div className="col-md-5">
          <h4>Improve Your feed</h4>
          <form action="">
            <input type="checkbox" name="visit" id="" />
            <label className="ms-2" htmlFor="visit">
              Visit your feed
            </label>
            <br />
            <input type="checkbox" name="follow" id="" />
            <label className="ms-2" htmlFor="follow">
              follow 2 more space
            </label>
            <br />
            <input type="checkbox" name="update" id="" />
            <label className="ms-2" htmlFor="update">
              Update 5 more space of content
            </label>
            <br />
            <input type="checkbox" name="question" id="" />
            <label className="ms-2" htmlFor="question">
              Ask me a question
            </label>
          </form>
          <br />
          <h4>Recent</h4>
          <div className="row  justify-content-center">
            <div className="col-md-1">
              <img width="50px" src={logo} alt="" />
            </div>
            <div className="col-md-4">
              <h6>The Science Space</h6>
            </div>
          </div>
          <div className="row  justify-content-center">
            <div className="col-md-1">
              <img width="50px" src={logo} alt="" />
            </div>
            <div className="col-md-4">
              <h6>Bengali Language</h6>
            </div>
          </div>
          <div className="row  justify-content-center">
            <div className="col-md-1">
              <img width="50px" src={mindblowscience} alt="" />
            </div>
            <div className="col-md-4">
              <h6>Mindblowing Science</h6>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <form>
            <textarea
              placeholder="What is your question or link"
              name="question"
              id=""
              cols="40"
              rows="2"
            ></textarea>
          </form>
          <h5>Posts</h5>
          <div className="row d-flex justify-content-center">
            <div className="col-md-1">
              <img width="60px" src={logo} alt="" />
            </div>
            <div className="col-md-4">
              <h3>The science Space</h3>
              <p>Posted by ahad 22 December</p>
              <img src={science} alt="" />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-1">
              <img width="60px" src={quantamlogo} alt="" />
            </div>
            <div className="col-md-4">
              <h3>The Quantam Mechanics</h3>
              <p>Posted by bhusan 25 December</p>
              <img src={quantam1} alt="" />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-1">
              <img width="40px" src={algorithmlogo} alt="" />
            </div>
            <div className="col-md-4">
              <h3>Algorithm</h3>
              <p>Posted by Vijay Krishman 18 December</p>
              <img width="200px" src={algorithm} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
