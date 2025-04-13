import React, { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    name: "Mike Torello",
    title: "Recovered Lost Wallet",
    text: "I lost my wallet at a concert and thought it was gone for good. Thanks to FindMyStuff, someone reported it and I had it back within 2 days!",
    image: "/images/user1.png",
  },
  {
    name: "Rick Wright",
    title: "Found Lost Backpack",
    text: "Found a backpack at the bus station and reported it here. The owner reached out in no time. This site makes it super easy to do the right thing.",
    image: "/images/user2.png",
  },
  {
    name: "Devon Miles",
    title: "Reunited with Pet",
    text: "My dog slipped out of the gate one evening. Someone found him and posted on FindMyStuff — I’m so grateful for this amazing platform!",
    image: "/images/user3.png",
  },
  {
    name: "Jasmine Lee",
    title: "Found Expensive Watch",
    text: "I found a watch at the airport and didn’t know how to return it. This platform helped me connect with the owner in a safe way.",
    image: "/images/user4.png",
  },
  {
    name: "Aarav Patel",
    title: "Returned Lost Laptop",
    text: "My laptop was found in a lecture hall and returned through FindMyStuff. Their system is quick and reliable.",
    image: "/images/user5.png",
  },
  {
    name: "Sophia Kim",
    title: "Community Saver",
    text: "Love how FindMyStuff makes it easy to do good. I've used it to return several items people lost in our local park.",
    image: "/images/user6.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if ((index + 1) * 3 < testimonials.length) setIndex(index + 1);
  };

  useEffect(() => {
    const container = containerRef.current;
    const cardWidth = container.offsetWidth / 3 + 24; // +gap
    container.scrollTo({
      left: index * cardWidth * 3,
      behavior: "smooth",
    });
  }, [index]);

  return (
    <section
      style={{
        background: "linear-gradient(to right, #1e1e1e, #2e2e2e)",
        color: "white",
        padding: "40px 20px",
        borderRadius: "32px",
        maxWidth: "1280px",
        margin: "60px auto",
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        overflow: "hidden",
      }}
    >
      <style>{`
        .slider-container {
          overflow: hidden;
        }

        .slider-track {
          display: flex;
          gap: 24px;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .card {
          flex: 0 0 32%;
          background: #1a1a1a;
          border-radius: 24px;
          border: 1px solid #444;
          padding: 24px;
          text-align: center;
          transition: all 0.4s ease;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }

        .card:hover {
          transform: scale(1.06);
          box-shadow: 0 12px 24px rgba(255, 204, 0, 0.4);
        }

.card-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;
}


        .card-text {
          font-size: 0.95rem;
          color: #ccc;
          margin-bottom: 12px;
        }

        .card-name {
          font-weight: bold;
          font-size: 1.1rem;
          color: #ffcc00;
        }

        .card-title {
          font-size: 0.85rem;
          color: #aaa;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: bold;
          color: #ffcc00;
          margin-bottom: 10px;
        }

        .section-subtitle {
          text-align: center;
          max-width: 700px;
          color: #bbb;
          margin: 0 auto 40px;
          font-size: 1.1rem;
        }

        .arrow-buttons {
          display: flex;
          justify-content: center;
          margin-top: 30px;
          gap: 20px;
        }
.arrow-button {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  color: #ffcc00;
  border: none;
  border-radius: 12px;
  width: 48px;
  height: 48px;
  font-size: 1.5rem;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.arrow-button:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(255, 204, 0, 0.4);
}


        .arrow-button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        @media (max-width: 900px) {
          .card {
            flex: 0 0 100%;
          }
        }
      `}</style>

      <h2 className="section-title">What Our Users Say</h2>
      <p className="section-subtitle">
        Real stories from users who reunited with their belongings or helped others.
      </p>

      <div className="slider-container" ref={containerRef}>
        <div className="slider-track">
          {testimonials.map((t, i) => (
            <div key={i} className="card">
              <img src={t.image} alt={t.name} className="card-img" />
              <p className="card-text">"{t.text}"</p>
              <p className="card-name">{t.name}</p>
              <p className="card-title">{t.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="arrow-buttons">
        <button onClick={handlePrev} className="arrow-button" disabled={index === 0}>
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="arrow-button"
          disabled={(index + 1) * 3 > testimonials.length}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}









