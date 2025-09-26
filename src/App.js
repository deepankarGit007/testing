import React, { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import "./App.css";

const memories = [
  { photo: "/c4.jpg", caption: "dash dash dash" },
  { photo: "/c2.jpg", caption: "dash dash dash" },
  { photo: "/c21.jpg", caption: "dash dash dash" },
  { photo: "/c3.jpg", caption: "dash dash dash" },
  { photo: "/c27.jpg", caption: "dash dash dash" },
  { photo: "/c25.jpg", caption: "dash dash dash" },
  { photo: "/c29.jpg", caption: "dash dash dash" },
  { photo: "/c9.jpg", caption: "dash dash dash" },
  { photo: "/c14.jpg", caption: "dash dash dash" },
  { photo: "/c13.jpg", caption: "dash dash dash" },
  { photo: "/c15.jpg", caption: "dash dash dash" },
  { photo: "/c12.jpg", caption: "dash dash dash" },
  { photo: "/c17.jpg", caption: "dash dash dash" },
  { photo: "/c20.jpg", caption: "dash dash dash" },
  { photo: "/c1.jpg", caption: "dash dash dash" },
  { photo: "/c7.jpg", caption: "dash dash dash" },
  { photo: "/c22.jpg", caption: "dash dash dash" },
  { photo: "/c19.jpg", caption: "dash dash dash" },
  { photo: "/p4.jpg", caption: "dash dash dash" },

];

function App() {
  const [playMusic, setPlayMusic] = useState(false);
  const audioRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (playMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playMusic]);

  return (
    <div className="App">
      <Confetti width={dimensions.width} height={dimensions.height} />
      <header className="navbar">
        <div className="logo-section">
          <img src="/c6.jpg" alt="Logo" className="logo"/>
          <span className="nav-title">Chanchal Verma</span>
        </div>
        <nav className="nav-links">
        </nav>
      </header>

      <main>
        <section id="wish" className="wish-section">
          <h1>Happy Birthday Chanchu...</h1>
          <p>
            need to be filled..
            more 
            more 
            & some more
          </p>
        </section>

        <section id="music" className="music-section">
          <audio ref={audioRef} src="/song.mp3" loop />
          <button
            className="music-button"
            onClick={() => setPlayMusic(!playMusic)}
          >
            {playMusic ? "Pause 🎵" : "Play 🎶"}
          </button>
        </section>

        <section id="memories" className="memories-section">
          <h2>Best Memories</h2>
          <div className="memories-gallery">
            {memories.map((memory, index) => (
              <div key={index} className="memory-item">
                <img src={memory.photo} alt={`Memory ${index + 1}`} />
                <p>{memory.caption}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="footer" className="footer">
        © She is mine
      </footer>
    </div>
  );
}

export default App;