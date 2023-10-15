import Carousel from 'react-bootstrap/Carousel';

//Asset Imports
import business from '../../assets/images/business.png';


function Slider() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div class="mx-auto p-5" style={{ maxwidth: '100rem' }}>
          <div class="row g-0 m-2">
            <div class="col-md-4">
              <img src={business} alt="Client Logo" class="img-fluid w-75 w-sm-65 w-md-65 to-right" />
            </div>
            <div class="col-md-7 d-flex align-items-center">
              <p class="text-2xl mx-auto p-1 solution-statement3 text-white">
                “My business’s POS was created by DreamTech in 2018. The process involved planning, conceptualizing, and designing and rebranding my the POS in a way that is functional and efficient. I am so grateful to DreamTech for their efforts in providing me a POS system that is fit for my business.”<br />- ROMY PAREDES, ANTOJITOS MEXICANOS
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="mx-auto p-5" style={{ maxwidth: '100rem' }}>
          <div class="row g-0 m-2">
            <div class="col-md-4">
              <img src={business} alt="Client Logo" class="img-fluid w-75 w-sm-65 w-md-65" />
            </div>
            <div class="col-md-7 d-flex align-items-center">
              <p class="text-2xl mx-auto p-1 solution-statement3 text-white">
                “My business’s POS was created by DreamTech in 2018. The process involved planning, conceptualizing, and designing and rebranding my the POS in a way that is functional and efficient. I am so grateful to DreamTech for their efforts in providing me a POS system that is fit for my business.”<br />- ROMY PAREDES, ANTOJITOS MEXICANOS
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="mx-auto p-5" style={{ maxwidth: '100rem' }}>
          <div class="row g-0 m-2 ml-5">
            <div class="col-md-4 justify-center">
              <img src={business} alt="Client Logo" class="img-fluid w-75 w-sm-65 w-md-65" />
            </div>
            <div class="col-md-7 d-flex align-items-center">
              <p class="text-2xl mx-auto p-1 solution-statement3 text-white">
                “My business’s POS was created by DreamTech in 2018. The process involved planning, conceptualizing, and designing and rebranding my the POS in a way that is functional and efficient. I am so grateful to DreamTech for their efforts in providing me a POS system that is fit for my business.”<br />- ROMY PAREDES, ANTOJITOS MEXICANOS
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;