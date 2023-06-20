import React, { useState, useRef } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import imgApi from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import Title from '../Title';
import TestiCard from '../Cards/Testimonial';
import useStyle from './testi-style';

const testiContent = [
  {
    text: 'I`ve been following Cryptowise for months now, and their market research is spot on! It has helped me make informed decisions and increase my income in the bitcoin business. ',
    name: 'John Doe',
    avatar: imgApi.avatar[6],
    title: 'Chief Digital Officer',
  },
  {
    text: 'For beginners like me, Cryptowise offers a fantastic educational program. Their articles and lessons have helped me better understand the market by simplifying difficult bitcoin concepts.',
    name: 'Jean Doe',
    avatar: imgApi.avatar[7],
    title: 'Chief Digital Officer',
  },
  {
    text: 'To anyone interested in trading cryptocurrencies, I heartily recommend Cryptowise. Game-changer in the crypto space! 🚀',
    name: 'Jena Doe',
    avatar: imgApi.avatar[1],
    title: 'Graphic Designer',
  },
  {
    text: 'Their staff is knowledgeable, skilled, and constantly up to date on fashion. They provide useful insights that have considerably improved my trading methods.',
    name: 'Jovelin Doe',
    avatar: imgApi.avatar[2],
    title: 'Senior Graphic Designer',
  },
  {
    text: "The Cryptowise community is fantastic! They have a lively Discord group where people share ideas, discuss trading techniques, and provide support. It's a great spot to connect with like - minded people",
    name: 'Jihan Doe',
    avatar: imgApi.avatar[3],
    title: 'CEO Software House',
  },
  {
    text: 'Cryptowise has become my go - to source for crypto news. Their fast updates and research keep me also - informed about the marketplace experiences and help me stay ahead of the game',
    name: 'John Doe',
    avatar: imgApi.avatar[9],
    title: 'Senior Graphic Designer',
  },
];

function Testimonials() {
  const slider = useRef(null);
  const { classes, cx } = useStyle();
  const { classes: text } = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const { t } = useTranslation('common');
  const [active, setActive] = useState(0);
  const [activeTransition, setActiveTransition] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    afterChange: (current) => setActive(current),
    beforeChange: (current, next) => setActiveTransition(next),
  };

  const slideState = index => {
    if (index === activeTransition - 1 || index === active - 1) {
      return classes.past;
    }
    if (index === activeTransition + 1 || index === active + 1) {
      return classes.future;
    }
    if (index === activeTransition || index === active) {
      return classes.current;
    }
    return classes.slide;
  };

  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Title text={t('crypto-landing.testi_title')} align="center" />
        <Typography className={text.subtitle2} align="center">
          {t('crypto-landing.testi_subtitle')}
        </Typography>
        <Grid container spacing={6}>
          <Grid item md={1} xs={12} />
          <Grid item md={10} xs={12}>
            <div className={classes.sliderWrap}>
              <div className={classes.carousel}>
                <button
                  type="button"
                  className={cx(classes.nav, classes.prev)}
                  onClick={() => slider.current.slickPrev()}
                >
                  <i className="ion-ios-arrow-back" />
                </button>
                <Carousel ref={slider} {...settings}>
                  {testiContent.map((item, index) => (
                    <div key={index.toString()} className={cx(classes.item, slideState(index))}>
                      <div className={classes.slideContent}>
                        <TestiCard
                          text={item.text}
                          name={item.name}
                          title={item.title}
                          avatar={item.avatar}
                          active={index === active}
                        />
                      </div>
                    </div>
                  ))}
                </Carousel>
                <button
                  type="button"
                  className={cx(classes.nav, classes.next)}
                  onClick={() => slider.current.slickNext()}
                >
                  <i className="ion-ios-arrow-forward" />
                </button>
              </div>
              <div className={classes.pagination}>
                <ul>
                  {[...Array(testiContent.length)].map((e, index) => (
                    <li
                      key={index.toString()}
                      className={index === active ? classes.active : ''}
                    >
                      <button type="button" onClick={() => slider.current.slickGoTo(index)}>&nbsp;</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Testimonials;
