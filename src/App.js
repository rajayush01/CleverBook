import React from 'react';
import "./App.css"
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import KeySolved from './components/KeySolved';
import KeyMetrics from './components/KeyMetrics';
import InfiniteSlider from './components/InfiniteSlider';
import TabData from './components/TabData';
import ImageSlider from './components/ImageSlide';
import slidesData from './data/carouselData.json';
import Founder from './components/Founder';
import BlogSlider from './components/BlogSlider';
import Footer from './components/Footer';

const App = () => {
  const { slides } = slidesData;

  return (
    <div>
      <Header />
      <HeroSection/>
      <KeySolved/>
      <KeyMetrics/>
      <InfiniteSlider/>
      <TabData/>
      <ImageSlider data={slides}/>
      <Founder/>
      <BlogSlider/>
      <Footer/>
    </div>
  );
};

export default App;
