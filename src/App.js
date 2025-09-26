import React, { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import "./App.css";

const memories = [
  { photo: "/c11.jpg", caption: "dash dash dash dash" },
  { photo: "/c21.jpg", caption: "dash dash dash" },
  { photo: "/c5.jpg", caption: "dash dash dash" },
  
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
          <img
            src="/c6.jpg" alt="Logo" className="logo"
          />
          <span className="nav-title">Chanchal Verma</span>
        </div>
        <nav className="nav-links">
          <a href="#music">Music</a>
          <a href="#memories">Memories</a>
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