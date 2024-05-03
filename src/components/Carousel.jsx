import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
  state = {
    currentIndex: 0,
  };

  goToPrevious = () => {
    const { currentIndex } = this.state;
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    this.setState({ currentIndex: newIndex });
  };

  goToNext = () => {
    const { currentIndex } = this.state;
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    this.setState({ currentIndex: newIndex });
  };

  render() {
    const { currentIndex } = this.state;

    return (
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image.img} />
              <div className="carousel-caption">
                <h3>{image.title}</h3>
                <p>{image.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <button className="carousel-control" onClick={this.goToPrevious}>
            <ArrowBackIosIcon />
          </button>
          <button className="carousel-control" onClick={this.goToNext}>
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
