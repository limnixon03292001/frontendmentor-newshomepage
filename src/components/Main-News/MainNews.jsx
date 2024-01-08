import "./MainNews.css";
import showcaseNewsImg from "../../assets/image-web-3-desktop.jpg";
export default function MainNews() {
  return (
    <div>
      <div className="main-news-wrapper">
        <div className="showcase-news">
            <div className="showcase-news-wrapper">
              <img src={showcaseNewsImg} className="showcase-news-img" />

              <div className="showcase-news-details">
                <div>
                  <h1 className="showcase-news-heading">
                    The Bright Future of Web 3.0?
                  </h1>
                </div>
                <div className="showcase-news-description">
                  <p>
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people.But is it really fulfilling it's promise?
                  </p>

                  <button className="showcase-news-button">READ MORE</button>
                </div>
              </div>
            </div>

            <div className="new-news">
              <div className="new-news-wrapper">
                <h1>New</h1>

                <div className="new-news-description">
                  <h3>Hydrogen VS Electric Cars</h3>
                  <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>

                <div className="new-news-description">
                  <h3>The Downsides of AI Artistry</h3>
                  <p>
                    What are the possible adverse effects of on-demand AI image
                    gene
                  </p>
                </div>

                <div className="new-news-description">
                  <h3>Is VC Funding Drying Up?</h3>
                  <p>
                    Private funding by VC firms is down 50% YOY. We take a look
                    at what that means.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
