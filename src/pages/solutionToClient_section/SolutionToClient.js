import '../../css/SolutionToClient.css';

import  Slider  from '../../components/slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import rec_1 from '../../assets/rec1.jpg';
import rec_2 from '../../assets/rec2.jpg';
import rec_3 from '../../assets/rec3.jpg';
import rec_4 from '../../assets/rec4.jpg';



function solutionToClient() {
  return (
    
    <div class="container App">
    <h1 class="solution-header my-4">SOLUTIONS</h1>
    <p class="solution-statement mt-3">Web-based application for Point-of-Sales and Ordering Systems</p>
    <p class="solution-statement2 mt-3">
      We offer the QRave, a web-based application for point-of-sales for easy ordering and tracking sales, item history, purchases, and more.
    </p>

    <div class="row justify-content-center mt-6">
    <div class="col-12 col-sm-4 col-md-3 col-lg-2">
      <img src={rec_1} alt="" class="img-fluid" />
    </div>
    <div class="col-12 col-sm-6 col-md-3 col-lg-2">
      <img src={rec_2} alt="" class="img-fluid" />
    </div>
    <div class="col-12 col-sm-6 col-md-3 col-lg-2">
      <img src={rec_3} alt="" class="img-fluid" />
    </div>
    <div class="col-12 col-sm-6 col-md-3 col-lg-2">
      <img src={rec_4} alt="" class="img-fluid" />
    </div>
    </div>

    <div>
    <h2 class="solution-header client-margin">WHAT OUR CLIENT SAYS</h2>
  </div>

  

      <div>
        <Slider/>
        </div>
      
    </div>
    
    
  );
}

export default solutionToClient;
