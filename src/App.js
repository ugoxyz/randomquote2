import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import domtoimage from "dom-to-image";

function App() {
  const [quotes, setQuotes] = useState("");

  const fetchQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let quoteRandomizer = Math.floor(Math.random() * data.length);
        setQuotes(data[quoteRandomizer]);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  // const [mainColor,setColor] = useState("#defdef");
  // let randomColor = Math.floor(Math.random() * MY_COLORS.length);
  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  let randomColor = Math.floor(Math.random() * colors.length);
  let myColor = colors[randomColor];

  document.body.style.backgroundColor = myColor;

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

  return (
    <div>
      <div className="container">
        <div className="App" ref={downloadRef}>
          <div>
            <div className="quote-body">
              <div className="text">
                <blockquote style={{ color: myColor }}>
                  <q> {quotes.text}</q>
                </blockquote>
              </div>
              <div className="author" style={{ color: myColor }}>{quotes.author}</div>
            </div>
          </div>
        </div>
        <div className="button-div">
          <div className="spaced">
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
          </div>
          <div>
            {" "}
            <button className="my-button" onClick={fetchQuote} style={{ backgroundColor: myColor, cursor: "pointer"}}>
              {" "}
              New Quote{" "}
            </button >
            <button className="my-button" onClick={downloadImage}> Download</button>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default App;
