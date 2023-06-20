import React from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import Parallax from '../Parallax/Hexagonal';
import Title from '../Title';
import useStyles from './faq-style';

const faqData = [
  {
    q: 'What is Cryptowise?',
    a: 'Cryptowise is a team dedicated to the study of markets and trading strategies in the cryptocurrency industry. We provide valuable insights, analysis, and expertise to help individuals make informed decisions in the crypto space.'
  },
  {
    q: 'How can Cryptowise help me?',
    a: 'Cryptowise offers a range of services and resources to assist you in navigating the cryptocurrency market. We provide market analysis, trading strategies, educational content, and up-to-date news to empower you with knowledge and enhance your crypto trading experience.'
  },
  {
    q: 'Is Cryptowise a financial advisory service?',
    a: 'No, Cryptowise does not provide personalized financial advice. Our purpose is to educate and inform our audience about cryptocurrency markets and trading strategies. We encourage you to conduct your own research and consult with financial professionals before making any investment decisions.'
  },
  {
    q: "How can I stay updated with Cryptowise's latest information?",
    a: 'To stay updated with Cryptowise, you can visit our website at [insert URL here]. Additionally, you can follow us on social media platforms such as Twitter, Facebook, and LinkedIn, where we regularly share market insights, educational content, and important updates.'
  },
  {
    q: 'How can I contact the Cryptowise team?',
    a: 'You can reach out to us by sending an email to support@wisecryptoanalysis.com or by using the contact form on our website. We value your feedback, questions, and suggestions, and we`ll do our best to respond promptly.'
  },
];

function Faq() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const { t } = useTranslation('common');
  const [expanded, setExpanded] = React.useState(0);
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <div className={classes.parallax}>
        <Parallax />
      </div>
      <Container fixed>
        <Grid container spacing={6}>
          <Grid item md={6}>
            <Title text={t('crypto-landing.faq_title')} align={isMobile ? 'center' : 'left'} />
            <Typography className={text.subtitle2} align={isMobile ? 'center' : 'left'} component="p">
              {t('crypto-landing.faq_subtitle')}
            </Typography>
            {!isTablet && (
              <div className={classes.illustration}>
                <img src="/images/crypto/faq.png" alt="illustration" />
              </div>
            )}
          </Grid>
          <Grid item md={6}>
            <div className={classes.accordion}>
              {faqData.map((item, index) => (
                <div className={classes.item} key={index.toString()}>
                  <Accordion
                    classes={{
                      root: classes.paper
                    }}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                  >
                    <AccordionSummary
                      classes={{
                        content: classes.content,
                        expanded: classes.expanded,
                      }}
                    >
                      <Typography className={classes.heading}>{item.q}</Typography>
                      <ExpandMoreIcon className={classes.icon} />
                    </AccordionSummary>
                    <AccordionDetails
                      classes={{
                        root: classes.detail,
                      }}
                    >
                      <Typography>
                        {item.a}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Faq;
