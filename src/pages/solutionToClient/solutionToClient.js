import '../../css/solutionToClient.css';

import { Carousel } from '../../components/Carousel';

import rec_1 from '../../assets/rec1.jpg';
import rec_2 from '../../assets/rec2.jpg';
import rec_3 from '../../assets/rec3.jpg';
import rec_4 from '../../assets/rec4.jpg';
import business from '../../assets/business.png';



function solutionToClient() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold Poppins text-violet-500 my-4">SOLUTIONS</h1>
      <p className="text-2xl font-Poppins mt-3">Web-based application for Point-of-Sales and Ordering Systems</p>
      <p className="text-2xl font-Poppins italic text-almostGray mt-3">
        We offer the QRave, a web-based application for point-of-sales for easy ordering and tracking sales, item history, purchases, and more.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <img src= {rec_1} alt="" className="w-full sm:w-4 md:w-1/4 lg:w-1/6" />
        <img src= {rec_2} alt="" className="w-full h-full sm:w-1/2 md:w-1/4 lg:w-1/6" />
        <img src= {rec_3} alt="" className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6" />
        <img src= {rec_4} alt="" className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6" />
      </div>

      <div className="mx-4 sm:mx-24 md:mx-96">
        <h2 className="text-3xl font-bold Poppins text-violet-500 mt-16">What Our Clients Say</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center relative">
        <img src= {business} alt="Client Logo" className="w-full sm:w-40 md:w-48" />
          <p className="text-2xl font-poppins mx-4 sm:mx-10">
            “My business’s POS was created by DreamTech in 2018. The process involved planning, conceptualizing, and designing and rebranding my the POS in a way that is functional and efficient. I am so grateful to DreamTech for their efforts in providing me a POS system that is fit for my business.”
            - ROMY PAREDES, ANTOJITOS MEXICANOS
          </p>
        </div>
      </div>
      <div>
        <Carousel />
        
      </div>
    
    </div>
    
  );
}

export default solutionToClient;
