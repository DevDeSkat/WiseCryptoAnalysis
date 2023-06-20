import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTranslation } from 'next-i18next';
import routeLink from '~/public/text/link';
import { useText } from '~/theme/common';
import useStyles from './counter-style';

function Counter() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t, i18n } = useTranslation('common');
  const curLang = '/' + i18n.language;

  const [play, setPlay] = useState(false);

  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };

  return (
    <div className={classes.counterWrap}>
      <Container maxWidth="md">
        <ScrollAnimation
          animateOnce
          animateIn="fadeIn"
          offset={10}
          afterAnimatedIn={handlePlay}
        >
          <Typography variant="h3" className={text.title}>
            {countup(2, play)}
            &nbsp;
            {countup(234, play)}
            &nbsp;
            {countup(567, play)}
          </Typography>
          <Typography component="p" className={text.subtitle}>
            {t('crypto-landing.footer_counter')}
          </Typography>
        </ScrollAnimation>
        <div className={classes.callAction}>
          <Typography variant="h4" gutterBottom className={text.subtitle}>
            {t('crypto-landing.footer_waiting')}
          </Typography>
          <Button variant="contained" href={curLang + routeLink.crypto.contact} color="secondary" size="large" className={classes.button}>
            {t('crypto-landing.getstarted')}
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Counter;
