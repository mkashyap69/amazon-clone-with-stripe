import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWPhase1/2_Desktop-Hero_Rec_1500x600._CB419213952_.jpg"
          alt="banner"
        />
      </div>
      <div className="home__row">
        <Product
          id="1234587"
          title="Apple iPhone 11 (64GB) - Black (Includes EarPods, Power Adapter)"
          price={49000}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
        />
        <Product
          id="1234588"
          title="New Apple iPhone 12 Mini (64GB) - Blue"
          price={69000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71sNNCTfMuL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1234569"
          title="BODY MAXX 14-Inch Steel Dumbells Rods (9DORDS) - Pack of 2"
          price={399}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/71xwmXDzXnL._SL1500_.jpg"
        />
        <Product
          id="1234583"
          title="KLIKFIT Rubber Coated Professional Weight Plate for Dumbbells & Exercise Bar - Shock-Absorbing, Minimal Bounce Weights, Strength Training - Single Plate - 5 to 25 KG, 6 Different Weights Available"
          price={3999}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71EoKSLecPL._SL1500_.jpg"
        />
        <Product
          id="1234600"
          title="SPORTO FITNESSTM 8 KG DUMBBELL SET"
          price={699}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71jrN5hoO6L._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1234986"
          title="Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black) | With Data Saver"
          price={13499}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71sBGR6LZhL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
