import { Container } from 'reactstrap'
import styles from '../styles/Banner.module.css'
import React, { useContext, useLayoutEffect, useRef, useState, useEffect } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'
import ThemeContext from '../components/ThemeContext';
import Image from 'next/image'
let width;


const Banner = (props) => {
  const containerRef = useRef();
  const { toggle } = useContext(ThemeContext);
  useIsomorphicLayoutEffect(() => {
    window.addEventListener('scroll', () => {
      if (!containerRef.current) return;
      if (containerRef.current.getBoundingClientRect().bottom <= 0) {
        toggle(true);
      }
      else {
        toggle(false);
      }
    })
  }, []);
  return (
    <div ref={containerRef}>
      <Container fluid className={styles.bannerholder} style={{backgroundImage:`linear-gradient(rgb(0 0 0 / 30%), rgb(0 0 0 / 30%)), url(${props.src})`}}>
        <img className="img-fluid invisible" src={props.src} alt="TopBanner" />
        <div className={styles.carouseltext}>
          <p className={styles.Bannertext}>{props.text}</p>
          {/* <p className={styles.date} dangerouslySetInnerHTML={{__html:props.date}}/> */}
        </div>
      </Container>
    </div>
  );
}

export default Banner;