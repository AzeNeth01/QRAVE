//Style Imports
import './hero_styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Asset Imports
import HeroHalf from '../../assets/images/half.jpg'

/**
 * @Author Azeneth01 (June Azeneth M. Suco)
 * Hero and Who We Are Section
 * @returns app
 */

export default function Hero() {
  return (
    <div className="HeroSection w-full flex flex-col  relative">
      <div className="card text-white cardContent">
        <img src={HeroHalf} class="heroImage" alt="..." />
        <div className="ml-[1.2rem] mr-[1.2rem] flex flex-col heroContent">
          <p className="titleHero h1">The One POS for Every Juan: <br /> Simplifying Business for All</p>
          <p className="card-text mt-3">We provide customized POS systems tailored to meet the specific needs and requirements of your business, ensuring seamless and efficient management of your point-of-sale operations.</p>
          <button className="mt-1 bg-customColor text-white customBtn">Connect</button>
        </div>
      </div>
    </div>
  );
}
