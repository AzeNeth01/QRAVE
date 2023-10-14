//Style Imports
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Asset Imports
import Who from '../../assets/images/who.jpg'

/**
 * @Author Azeneth01 (June Azeneth M. Suco)
 * Hero and Who We Are Section
 * @returns app
 */

export default function WhoWeAre() {
  return (
    <div>
      <div className='container containerCustomStyle'>
          <img className='image img-fluid' src={Who} alt="..."/>
          <div class="mt-4 containerContent">
            <h5 class="customTextStyle2 containerContent">WHO WE ARE</h5>
              <p class="customTextStyle1 containerContent">DreamTech, founded by Richard Lee in the Philippines, began as a POS distributor, specializing in efficient off-the-shelf solutions. As their reach expanded, they shifted their focus to providing customized POS systems, addressing the unique requirements of businesses, especially in the VisMin region. This strategic transition allowed DreamTech to better cater to individualized client needs.</p>
            </div>
          </div>
      </div>
  );
}
