import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import logo from '~/public/images/crypto-logo.png';
import brand from '~/public/text/brand';
import useStyles from './footer-style';
import logoTradingView from '~/public/images/trading-view-logo.svg';

function Copyright() {
  return (
    <Typography variant="body2" display="block" color="textSecondary">
      &copy;&nbsp;
      {brand.crypto.footerText}
    </Typography>
  );
}

const footer = {
  description: ['Resource', 'Another resource', 'Final resource', 'Privacy policy', 'Terms of use', 'Terms Condition'],
  link: ['#resource', '#another-resource', '#final-resource', '#privacy-policy', '#terms-of-use'],
};

function Footer(props) {
  const { classes, cx } = useStyles();
  const { invert } = props;

  // Translation Function
  const { t } = useTranslation('common');

  return (
    <Container fixed component="footer">
      <div className={cx(classes.footer, invert && classes.invert)}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <div className={classes.logo}>
              <img src={logo} alt="logo" />
              <Typography variant="h6" color="textPrimary">
                {brand.crypto.projectName}
              </Typography>
            </div>
            <Typography color="textPrimary" className={classes.footerDesc} gutterBottom>
              {t('crypto-landing.banner_title')}
            </Typography>
            <div className={classes.quickLinks}>
              <Typography variant="h6" className={classes.title} color="textPrimary" gutterBottom>
                {t('crypto-landing.footer_link')}
              </Typography>
              <ul>
                {footer.description.map((item, index) => (
                  <li key={item}>
                    <Link href={footer.link[index]} variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className={classes.socmed}>
              <IconButton aria-label="FB" className={classes.margin} size="small">
                <i className="ion-logo-twitter" />
              </IconButton>
              <IconButton aria-label="TW" className={classes.margin} size="small">
                <i className="ion-logo-facebook" />
              </IconButton>
              <IconButton aria-label="IG" className={classes.margin} size="small">
                <i className="ion-logo-instagram" />
              </IconButton>
              <IconButton aria-label="LI" className={classes.margin} size="small">
                <i className="ion-logo-linkedin" />
              </IconButton>
            </div>
            <Copyright />
            <a href="https://www.tradingview.com/">
              <img src={logoTradingView} alt="logoTradingView" style={{ padding: '20px' }} />
            </a>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

Footer.propTypes = {
  invert: PropTypes.bool,
};

Footer.defaultProps = {
  invert: false,
  toggleDir: () => {},
};

export default Footer;
