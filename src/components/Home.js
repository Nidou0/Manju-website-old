import { useEffect, useState } from "react";
import { fatchData } from '../utilits';

const Home = ({ dark }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fatchData("/static/info.json");
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAsync();
  }, []);

  return (
    <div className="dizme_tm_section" id="home">
      <div className="dizme_tm_hero">
        <div
          className="background"
          data-img-url={`img/slider/${dark ? 2 : 1}.jpg`}
          // style={{ backgroundImage: `img/slider/${dark ? 2 : 1}.jpg` }}
        />
        <div className="container">
          <div className="content">
            <div className="details">
              <div className="hello">
              <h3 className="orangeText">{`Hi , I'm `}</h3>
              </div>
              <div className="name">
                <h3> Dr Manju Appathurai </h3>
              </div>
              <div className="job">
                  <span className="text">
                  
                    <ul>
                    <li> A Multifaceted Leader Driving Global Impact. </li>
                    <li> Mental Health Counselor (Malaysia Mind Foundation). </li>
                    <li> Animal Welfare Advocate (Fur Kids Farm). </li>
                    <li> Author (Happy Life Blueprint). </li> 
                    <li> International Speaker. </li>
                    </ul>
                  
                  </span>{" "}
              </div>
              <div className="text">
                <p>The president of Mindespace Malaysia and Fur Kids Farm</p>
              </div>
              
                <div className="social">
                  <ul>
                    {data &&
                      data.social &&
                      data.social.map((social, i) => (
                        <li key={i}>
                          <a href={social.url}>
                            <i className={social.icon} />
                          </a>
                        </li>
                      ))}
                  </ul>
              </div>
            </div>
            <div className="avatar">
              <div className="image">
                <img
                  src={data && data.img ? data.img : "/img/slider/avatar.png"}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="dizme_tm_down">
          <a className="anchor" href="#process">
            <svg
              width="26px"
              height="100%"
              viewBox="0 0 247 390"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "1.5",
              }}
            >
              <path
                id="wheel"
                d="M123.359,79.775l0,72.843"
                style={{
                  fill: "none",
                  stroke: dark ? "#fff" : "#000",
                  strokeWidth: 20,
                }}
              />
              <path
                id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style={{
                  fill: "none",
                  stroke: dark ? "#fff" : "#000",
                  strokeWidth: 20,
                }}
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
