import './App.css';
import Hero from './images/hero.jpg'
import Who from './images/who.jpg'
import Logo from './images/logoo.png'


function App() {
  return (
    <body className="h-screen">

    <div>
      <div className='flex items-center justify-center flex-col relative bg-black'>
        <img className='w-full h-auto opacity-50' src={Hero} alt="Hero Image"/>
        <div className='absolute flex items-center justify-center flex-col text-center text-white hero'>
          <img className='logo w-lg' src={Logo} alt="logo"/>
          {/* <h1 className='font-Sansita text-title italic title'>QRAVE</h1> */}
          <p className='italic text-2xl font-bold font-Poppins subtitle'>The One POS for Every Juan: Simplifying Business for All</p>
        </div>
      </div>

      <div className='flex m-20 text-gray-500 align-baseline section'>
        <div className='image'>
          <img className='w-50 pic' src={Who} alt="" />
        </div>
        <div className='ml-7 whowearetext'>
          <h3 className='text-main text-large font-bold mb-7 text'>WHO WE ARE</h3>
          <p className='font-Poppins text-normal subtext'>DreamTech, founded by Richard Lee in the Philippines, began as a POS distributor, specializing in efficient off-the-shelf solutions. As their reach expanded, they shifted their focus to providing customized POS systems, addressing the unique requirements of businesses, especially in the VisMin region. This strategic transition allowed DreamTech to better cater to individualized client needs.</p>
        </div>
      </div>
    </div>

    </body>
  );
}

export default App;