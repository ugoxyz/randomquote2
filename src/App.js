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

  const downloadRef = useRef();

  const downloadImage = () => {
    const targetElement = downloadRef.current;
    domtoimage.toJpeg(targetElement, { quality: 0.95 }).then((dataUrl) => {
      let link = document.createElement("a");
      link.download = "my-image-name.jpeg";
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <div>
           <div className="header"></div>
      <div className="App" ref={downloadRef}>
        <div className="quote-body">
          <div className="text">
            <blockquote>
            
              <q>{quotes.text}</q>
            </blockquote>
          </div>
          <div className="author">
                       {quotes.author}
          </div>
          <div className="buttons">
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
              <button onClick={fetchQuote}> New Quote </button>
              <button onClick={downloadImage}> Download</button>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
