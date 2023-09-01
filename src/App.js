import React, { useState, useRef } from "react";
import "./App.css";
import domtoimage from "dom-to-image";
import "./quotes.js";
import AllQuotes from "./quotes.js";
import Spinners from "./Spinners.jsx";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

function App() {
  const [quotes, setQuotes] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchQuote = () => {
    let quoteRandomizer = Math.floor(Math.random() * AllQuotes.length);
    setQuotes(AllQuotes[quoteRandomizer]);
    setLoading();
  };

  // const fetchQuote = () => {
  //   fetch("https://type.fit/api/quotes")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       let quoteRandomizer = Math.floor(Math.random() * data.length);
  //       setQuotes(data[quoteRandomizer]);
  //     });
  // };

  // useEffect(() => {
  //   fetchQuote();
  // }, []);

  // const [mainColor,setColor] = useState("#defdef");
  // let randomColor = Math.floor(Math.random() * MY_COLORS.length);
  const colors = [
    "#16a085",
    "#0c6b2c",
    "#2c3e50",
    "#b57309",
    "#db2d1b",
    "#743d8a",
    "#c31551",
    "#342224",
    "#636240",
    "#41726b",
    "#52783e",
  ];

  let randomColor = Math.floor(Math.random() * colors.length);
  let myColor = colors[randomColor];

  document.body.style.backgroundColor = myColor;

  window.addEventListener("load", fetchQuote);

  const downloadRef = useRef();

  const downloadImage = () => {
    const targetElement = downloadRef.current;
    domtoimage.toJpeg(targetElement, { quality: 0.95 }).then((dataUrl) => {
      let link = document.createElement("a");
      link.download = "my-quote.jpeg";
      link.href = dataUrl;
      link.click();
    });
  };

  if (!loading) {
    return (
      <div className="main-container">
        <div className="share-button-div">
          <TwitterShareButton url="https://stackoverflow.com/questions/45144386/how-to-implement-share-to-twitter-with-react-js">
            {/* <button>Share</button> */}
            <TwitterIcon size={40} round={true} bgStyle={{ fill: "black" }} />
          </TwitterShareButton>
          <FacebookShareButton url="https://stackoverflow.com/questions/45144386/how-to-implement-share-to-twitter-with-react-js">
            {/* <button>Share</button> */}
            <FacebookIcon size={40} round={true} bgStyle={{ fill: "black" }} />
          </FacebookShareButton>
          <TelegramShareButton url="https://stackoverflow.com/questions/45144386/how-to-implement-share-to-twitter-with-react-js">
            {/* <button>Share</button> */}
            <TelegramIcon size={40} round={true} bgStyle={{ fill: "black" }} />
          </TelegramShareButton>

          <WhatsappShareButton url="https://stackoverflow.com/questions/45144386/how-to-implement-share-to-twitter-with-react-js">
            <WhatsappIcon size={40} round={true} bgStyle={{ fill: "black" }} />
          </WhatsappShareButton>
        </div>

        <div className="container">
          <div className="App" ref={downloadRef}>
            <div>
              <div className="quote-body">
                <div className="text">
                  <blockquote style={{ color: myColor }}>
                    <q> {quotes.text}</q>
                  </blockquote>
                </div>
                <div className="author-box">
                  {" "}
                  <div>
                    {" "}
                    <img className="avi" alt="x" src={quotes.avi}></img>
                  </div>
                  <div>
                    <div className="author" style={{ color: myColor }}>
                      {quotes.author}
                    </div>
                    <div className="author-title" style={{ color: myColor }}>
                      {quotes.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* <div className="spaced">
            {" "}
            <a
              // eslint-disable-next-line no-template-curly-in-string
              href="https://twitter.com/intent/tweet?text=${quotes.text}"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </div> */}
            <div className="button-div">
              {" "}
              <button
                className="my-button"
                onClick={fetchQuote}
                style={{ backgroundColor: myColor, cursor: "pointer" }}
              >
                {" "}
                New Quote{" "}
              </button>
              <button className="my-button" onClick={downloadImage}>
                {" "}
                Download
              </button>
            </div>
          </div>{" "}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container spinner">
        <img src="spinner.gif" alt="spinner" />

        <Spinners className="spinner" size={30} />
      </div>
    );
  }
}

export default App;
