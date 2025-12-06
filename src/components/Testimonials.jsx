import { useState, useEffect } from "react";
import "./Testimonials.css";
import {profile} from "./image/profile.png"

const testimonials = [
  {
    name: "Emily R.",
    role: "Investor",
    image: {profile},
    text: "StartlyHQ helped me make smarter investment decisions! I can finally see my full picture across accounts.",
  },
  {
    name: "Jason L.",
    role: "Entrepreneur",
    image: {profile},
    text: "Finally, an easy way to track all my finances. The alerts keep me ahead of cash flow and investment changes.",
  },
  {
    name: "Sofia K.",
    role: "Tech Professional",
    image:{profile},
    text: "The AI insights are a game-changer. I understand my risk better and feel more confident about the future.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // ✅ Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonial-section">
      <h2>Trusted by Investors Like You</h2>

      {/* SLIDER */}
      <div className="testimonial-slider">
        {testimonials.map((item, i) => (
          <div
            className={`testimonial-card ${i === index ? "active" : ""}`}
            key={i}
          >
            <div className="user-info">
              <img src={item.image} alt={item.name} />
              <div>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </div>

            <p>{item.text}</p>

            <div className="quote">❝</div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}
