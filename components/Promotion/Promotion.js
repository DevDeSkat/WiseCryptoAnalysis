import React from 'react';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import NextIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Slider from 'dandelion-animated-slider';
import { useTranslation } from 'next-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';
import useStyles from './promotion-style';
import imgAPI from '~/public/images/imgAPI';

const sliderData = [
  {
    image: imgAPI.crypto[0],
    title: 'Save on Our Services',
    desc: "Save big on Cryptowise services and unlock your crypto potential! Don't miss out on limited-time discounts to gain expert insights, educational programs, and top-notch support. Level up your crypto game while saving money. Grab the opportunity now!",
    date: '16 Jun - 20 Jul'
  },
  {
    image: imgAPI.crypto[1],
    title: 'Sign Up for a 7-Day Trial',
    desc: "Experience Cryptowise for free! Sign up now for a 7-day trial and unlock the power of our expert insights, educational programs, and market analysis. Dive into the world of crypto with confidence and discover what Cryptowise has to offer. Don't miss out, start your trial today",
    date: '12 Jul - 10 Aug'
  },
  {
    image: imgAPI.crypto[2],
    title: 'Why choose Cryptowise?',
    desc: 'Because we deliver results! With spot-on market analysis, a fantastic educational program, and up-to-date insights, Cryptowise is the top choice for anyone in the crypto world. Join the community and experience the difference for yourself. Your crypto success starts here!',
    date: ''
  }
];

function Promotion() {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('common');
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));

  return (
    <div className={classes.root}>
      <div className={classes.sliderWrap}>
        <Slider
          className="slider-wrapper"
          previousButton={(
            <NextIcon />
          )}
          nextButton={(
            <NextIcon />
          )}
        >
          {sliderData.map((item, index) => (
            <div className={cx(classes.item, index % 2 === 1 ? classes.odd : classes.even)} key={index.toString()}>
              <Grid container>
                <Grid item xs={12} lg={4}>
                  &nbsp;
                </Grid>
                <Grid item xs={12} lg={7}>
                  {!isTablet && (
                    <section>
                      <div className={classes.imgWrap}>
                        <div className={classes.decoration}>
                          <svg>
                            <use xlinkHref="/images/crypto/deco-promo.svg#main" />
                          </svg>
                        </div>
                        <figure className={classes.image}>
                          <img src={item.image} alt={item.title} />
                        </figure>
                      </div>
                    </section>
                  )}
                  <Paper className={classes.paper}>
                    <Typography variant="h1">
                      <ButtonBase>
                        {item.title}
                      </ButtonBase>
                    </Typography>
                    <Typography component="p">
                      {item.desc}
                    </Typography>
                    {item.date.length
                      ? (
                        <section className={classes.time}>
                          <Typography component="h6">
                            {t('crypto-landing.promo_periode')}
                            :&nbsp;
                            {item.date}
                          </Typography>
                        </section>
                        )
                    : null}
                  </Paper>
                </Grid>
              </Grid>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Promotion;
