import React, { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import "./App.css";

const memories = [
  { photo: "/c4.jpg", caption: "Cool outfit..😎" },
  { photo: "/c2.jpg", caption: "You are nature's choice(& I love this ponytail)" },
  { photo: "/c21.jpg", caption: "This type of cuteness I was talking about" },
  { photo: "/c3.jpg", caption: "ohh! damm.. pose" },
  { photo: "/c27.jpg", caption: "Ummh! natak khali" },
  { photo: "/c25.jpg", caption: "No doubt, Ekdum fursat me hi banaya gaya h" },
  { photo: "/c29.jpg", caption: "My favourite one..😍" },
  { photo: "/c9.jpg", caption: "Yaa, I clicked this one.." },
  { photo: "/c14.jpg", caption: "Main to tha nahi udhar, dekh kise rahi thi.?" },
  { photo: "/c13.jpg", caption: "or, tihadi kitna?" },
  { photo: "/c15.jpg", caption: "Mere hi ghar aake muu banta h tera." },
  { photo: "/c12.jpg", caption: "cutu-putu" },
  { photo: "/c_.jpg", caption: "Outfit designed by you, per banane me mera bhi yogdaan  tha" },
  { photo: "/c20.jpg", caption: "Main papa ki pari.." },
  { photo: "/c17.jpg", caption: "a historical beauty in traditional wear" },
  { photo: "/c7.jpg", caption: "Chhota Don" },
  { photo: "/c22.jpg", caption: "Perfectly happy, loving your vibe" },
  { photo: "/c19.jpg", caption: "Happy Birthday" },
  { photo: "/p4.jpg", caption: "Be with me, I love You" },

];

function App() {
  const [playMusic, setPlayMusic] = useState(false);
  const audioRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const formatTime = (time) => {
   if (!time) return "0:00";
   const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

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

  useEffect(() => {
  const audio = audioRef.current;

  const updateTime = () => setCurrentTime(audio.currentTime);
  const setAudioDuration = () => setDuration(audio.duration || 0);

  audio.addEventListener('timeupdate', updateTime);
  audio.addEventListener('loadedmetadata', setAudioDuration);

  return () => {
    audio.removeEventListener('timeupdate', updateTime);
    audio.removeEventListener('loadedmetadata', setAudioDuration);
  };
  }, []);

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
          <h1 id="hb">Happy Birthday </h1>
          <h1 id="name">Chanchu</h1>
          <p>
            Hey, my pretty girl. Wishing a Happy Birthday to the person I adore the most, the one I love the most, the one I can sit with for hours, and yes, even the one I fight with the most. You are the only one (of course, after my family) I can talk about endlessly and adore wholeheartedly.
            <br/>
            We all know that a person doesn’t need a reason to love someone, but there will always be many reasons to hate. Yet, I have countless reasons to love you, and I love you far more than anyone could ever hate you. I love you from top to bottom (I know, that’s not much), I love you from your brightest self to your shadows, and I love you from me to you. I love the way you smile, the way you make cute faces, that little nose, those devilish eyes, and most of all, your perspective-how you look at the sky and cheer yourself. 
            <br/>
            How could I ever forget the most attractive things about you? You can sketch beautifully, dance gracefully, write mind-blowingly, handle a camera extraordinarily, edit photos and videos skillfully, help your father in the office, support your mother in the kitchen, care for your sisters, and, of course, guardian of a cute, innocent, gentleman's heart. Yes, I’m the luckiest person-not only blessed with a wonderful family and great friends but also with you, my pretty girl, who makes me the luckiest man in the world. Thank you so much for being there for me and my family.
            <br/>
            And so, I’ll end this tiny message here. Please don’t judge me-I’m not a writer.
              But wait… there’s still more ahead. 
              <br/><br/>Play the song and scroll ahead.......
          </p>
        </section>

        <section id="music" className="music-section">
          <audio ref={audioRef} src="/song.mp3" loop />

          <div className="player-controls">
            <button
              className="play-pause-button"
              onClick={() => setPlayMusic(!playMusic)}
             aria-label={playMusic ? "Pause music" : "Play music"}
           >
              {playMusic ? "⏸" : "▶"}
           </button>

           <div className="time-info">
             <span>{formatTime(currentTime)}</span>
             <input
               type="range"
               min="0"
               max={duration || 0}
               value={currentTime}
               onChange={(e) => {
                  audioRef.current.currentTime = e.target.value;
                  setCurrentTime(Number(e.target.value));
               }}
                className="progress-bar"/>
             <span>{formatTime(duration)}</span>
           </div>
         </div>
        </section>

        <section id="memories" className="memories-section">
          <h2>Let's explore more ...</h2>
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