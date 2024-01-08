import './TopNews.css'
import imgCard1 from '../../assets/image-retro-pcs.jpg';
import imgCard2 from '../../assets/image-top-laptops.jpg';
import imgCard3 from '../../assets/image-gaming-growth.jpg';

export default function TopNews() {
  return (
    <div>
      <div className="top-news-wrapper">
        <div className='top-news-card'>
            <img src={imgCard1} alt="retro-pc"/>
            <div className='top-news-card-description'>
                <h2>01</h2>
                <h3>Reviving Retro PCs</h3>
                <p>What happens when old PCs are given modern upgrade?</p>
            </div>
        </div>

        <div className='top-news-card'>
            <img src={imgCard2} alt="retro-pc"/>
            <div className='top-news-card-description'>
                <h2>02</h2>
                <h3>Top 10 Laptops of 2022</h3>
                <p>Our best picks for various needs and budgets.</p>
            </div>
        </div>

        <div className='top-news-card'>
            <img src={imgCard3} alt="retro-pc"/>
            <div className='top-news-card-description'>
                <h2>03</h2>
                <h3>The Growth of Gaming</h3>
                <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
