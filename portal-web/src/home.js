import React from 'react';
import image1 from './campaing-1.jpg';
import image2 from './campaing.jpeg';

export default class Home  extends React.Component {
  state = {

  }
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h1>Our Campaings</h1>
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src={image1} alt=""></img>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={image2} alt=""></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
    )
  };

}
