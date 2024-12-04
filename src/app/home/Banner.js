'use client';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import "../style/banner.css";

const Banner = () => {
  const images = [
    "/images/banner/banner-1.jpg",
    "/images/banner/banner-2.jpg",
    "/images/banner/banner-3.jpg",
    "/images/banner/banner-4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="Banner">
      <div>
        <div className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            {images.map((src, index) => (
              <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
                <div className="carousel-overlay">
                  <Image
                    src={src}
                    alt={`consultancy services 4s design ${index + 1}`}
                    layout="responsive"
                    width={800}
                    height={400}
                    className="d-block w-100 bannerImg"
                  />
                  <div className="carousel-caption">
                    <h1>4S DESIGN CONSULTANCY SERVICES</h1>
                    <p>MEP DESIGN CONSULTANTS</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;