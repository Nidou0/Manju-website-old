import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  // Popup
  const [popup, setPopup] = useState(false);

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>Perfect Solutions & Proven Impact</h3>
            <p>
            Uncover valuable articles, downloadable guides, and other materials to deepen your understanding and fuel your Perfect Solutions & Proven Impact transformation.
            </p>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("youtube")}`}
                  onClick={handleFilterKeyChange("youtube")}
                >
                  videos & talks
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("Podcast")}`}
                  onClick={handleFilterKeyChange("Podcast")}
                >
                  Podcast
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("Articles")}`}
                  onClick={handleFilterKeyChange("Articles")}
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("Books")}`}
                  onClick={handleFilterKeyChange("Books")}
                >
                  Books
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("Animal")}`}
                  onClick={handleFilterKeyChange("Animal")}
                >
                  Animal Rescue
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer  ${activeBtn("Mental")}`}
                  onClick={handleFilterKeyChange("Mental")}
                >
                  Mental Health
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer  ${activeBtn("Charity")}`}
                  onClick={handleFilterKeyChange("Charity")}
                >
                  Charitable works
                </a>
              </li>
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="videos & talks"
                    data-category="Youtube"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/@manjuappathurai"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/1.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>ManjuAppathurai</h3>
                    <span>Youtube</span>
                  </div>
                </div>
              </li>
              <li className="Podcast grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Podcast"
                    data-category="Podcast"
                  >
                    <a
                      className="popup-Podcast"
                      href=""
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/2.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Podcast</h3>
                    <span>Spotify</span>
                  </div>
                </div>
              </li>
              <li className="Articles grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Articles"
                    data-category="Articles"
                  >
                    <a
                      className="popup-Articles"
                      href="https://www.linkedin.com/in/manjuappathurai/"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/3.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Articles</h3>
                    <span>LinkedIn</span>
                  </div>
                </div>
              </li>
              <li className="Books grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="The happy life blueprint"
                    data-category="Books"
                  >
                    <a className="popup-Books" href="https://www.amazon.com/Happy-Life-Blueprint-Holistic-Fulfilment/dp/3624415875">
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/5.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>The happy life blueprint</h3>
                    <span>Books</span>
                  </div>
                </div>
              </li>
              <li className="Animal grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Fur Kids Farm"
                    data-category="Animal Rescue"
                  >
                    <a className="popup-Animal" href="https://www.facebook.com/furkidsfarm/">
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/4.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Fur Kids Farm</h3>
                    <span>Animal Rescue</span>
                  </div>
                </div>
              </li>
              <li className="Mental grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Malaysia Mindspace Foundation"
                    data-category="Mental health"
                  >
                    <a className="popup-Mental" href="https://www.linkedin.com/company/mindspacefoundation/?trk=public_profile_volunteering-position_profile-section-card_subtitle-click">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/6.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Malaysia Mindspace Foundation</h3>
                    <span>Mental Health</span>
                  </div>
                </div>
              </li>
              <li className="Charity grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Charity"
                    data-category="Charitable works"
                  >
                    <a className="popup-Charity" href="https://www.instagram.com/manjuappathurai/">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/7.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Instagram</h3>
                    <span>Charitbale works</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
