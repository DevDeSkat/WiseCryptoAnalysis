import { makeStyles } from 'tss-react/mui';

const cardsStyles = makeStyles({ uniqId: 'cards' })((theme, _params, classes) => ({
  testimonial: {
    position: 'relative'
  },
  active: {},
  caption: {
    marginTop: theme.spacing(3),
    display: 'block',
    fontSize: 16,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    }
  },
  paper: {
    height: 250,
    margin: theme.spacing(3, 0),
    textAlign: 'center',
    border: '1px solid transparent',
    transition: 'border 0.4s ease-out',
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 15),
    },
    [`&.${classes.active}`]: {
      border: `1px solid ${theme.palette.primary.main}`
    },
  },
  text: {
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    height: 80,
    fontSize: 18,
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      WebkitLineClamp: 4,
    }
  },
  avatar: {
    boxShadow: theme.shadows[8],
    width: 80,
    height: 80,
    margin: '-32px auto 32px',
    [theme.breakpoints.up('sm')]: {
      margin: '-96px auto 32px',
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default cardsStyles;
