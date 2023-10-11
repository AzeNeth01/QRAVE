//Style Imports
import '../../css/App.css';

//Asset Imports
import Who from '../../assets/who.jpg'
import HeroHalf from '../../assets/half.jpg'

/**
 * @Author Azeneth01 (June Azeneth M. Suco)
 * Hero and Who We Are Section
 * @returns app
 */

export default function Hero() {
  return (
    <body className="h-screen">
      <div class="HeroSection w-full flex items-start justify-center flex-col bg-black relative">
        <img class="HeroImage w-full opacity-20" src={HeroHalf} alt="Hero Section Image"></img>
          <div className='HeroOverlayContents absolute justify-start items-start ml-16 flex-col text-white w-2/3 hero'>
            <p className='HeroTitleText text-extraLarge leading-none font-Sansita subtitle'>The One POS for Every Juan: <br/> Simplifying Business for All</p>
            <p className='HeroSubtitleText text-2xl font-Nunito leading-tight subtitle mt-8'>We provide customized POS systems tailored to meet the specific needs and requirements of your business, ensuring seamless and efficient management of your point-of-sale operations.</p>
              <div className='HeroCalltoActions flex flex-row gap-5 mt-8'>
                <button className='HeroConnectBtn bg-mainColor hover:bg-accent p-3 pl-9 pr-9 font-Nunito rounded-tl-3xl rounded-br-3xl'>Connect</button>
                <button className='HeroLearnMoreBtn text-mainColor ml-5 font-Nunito'>Learn More</button>
              </div>
        </div> 
      </div>

      <div className='flex m-20 text-gray-500 align-baseline section'>
        <div className='image'>
          <img className='w-50 pic' src={Who} alt="" />
        </div>
        <div className='ml-7 whowearetext'>
          <h3 className='text-mainColor text-large font-bold mb-7 text'>WHO WE ARE</h3>
          <p className='font-Nunito text-normal subtext'>DreamTech, founded by Richard Lee in the Philippines, began as a POS distributor, specializing in efficient off-the-shelf solutions. As their reach expanded, they shifted their focus to providing customized POS systems, addressing the unique requirements of businesses, especially in the VisMin region. This strategic transition allowed DreamTech to better cater to individualized client needs.</p>
        </div>
      </div>

    </body>
  );
}
