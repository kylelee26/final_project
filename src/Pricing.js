import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import './Css/Pricing.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {''}
      <Link color="inherit" href="https://material-ui.com/">
      </Link>{''}
      {' ηΎε¨ζι : '}
      {new Date().getHours()}
      {' : '}
      {new Date().getMinutes()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'ζ―ζε',
    price: '30USD',
    description: [
      'ζη₯',
      'ε₯½ε',
      'ζε?θ³',
    ],
    buttonText: 'ζ³ζηΊζ―ζεθ«δ½Ώη¨Spotify',
    buttonVariant: 'outlined',
  },
  {
    title: 'ζ―ζ―ζε',
    price: '60USD',
    description: [
      'ε―δ»₯θ½ζ΄ε€ζ­',
      'ιεζ­θ©εθ½',
      'ε―δ»₯δΊ«εη‘ε»£εζε',
      
    ],
    buttonText: 'ζ³ζηΊζ―ζ―ζεθ«δ½Ώη¨Spotify',
    buttonVariant: 'outlined',
  },
  {
    title: 'ζ―ζ―ζ―ζε',
    price: '90USD',
    description: [
      'ε₯½θ½δΈη΄θ½',
      'ε―δ»₯ι’η·ζΆθ½',
      'ε°η΅δΈε‘ηε?Άι³θ³ͺ',
    ],
    buttonText: 'ζ³ζηΊζ―ζ―ζ―ζεθ«δ½Ώη¨Spotify',
    buttonVariant: 'outlined',
  },

];

const footers = [
  {
    title: 'ζ―ζ―ζεεΉ«ζζθ½',
    description: ['εεΎεε₯ιζεΌ΅ζ©δΊΊ', 'ι£εΏη₯₯'],
  },
  {
    title: 'ζ―ζ―εεΌεΉ«ζζθ½',
    description: ['ιδΈζ―θΆεΏη₯₯', 'ι£ε€§ε'],
  },
  {
    title: 'η« ι­θ±ζεΉ«ζζθ½',
    description: ['ε§η₯ε·¨δΊΊεΊ§ζ¨δΉε', 'ζ₯δΈθ½'],
  },
  {
    title: 'η‘¬εΉ«εΉ«ζζθ½',
    description: ['η‘ιζθ?', 'ε₯½θ½ηζ­'],
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography  variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            ι¦ι 
          </Typography>
          <Link  class = "context" to = "/album">
            ζ­ζ
          </Link>
          <nav>
            <Link class = "context" to ="/song">
              ζηζ­ε?
            </Link>
            <Link class = "context" to = "/binapp">
              BINBINεδΊΊι 
            </Link>
            <Link class = "context" to = "/kyleapp">
              KyleεδΊΊι 
            </Link>
            <Link class = "context" to = "/">
            η»εΊ
            </Link>
          </nav>
          
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent} class = "context" >
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom >
          Superfly
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          ζ­‘θΏδΎε°ζεηι³ζ¨ηΆ²ι 
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card class = "top">
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing} class ="card">
                    <Typography component="h2" variant="h3" color="textPrimary" align ="center">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary" href="https://open.spotify.com/search" target = "blank">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      {<Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Button href="https://www.youtube.com/watch?v=zwqwZMYhRGc" target = "blank" variant="subtitle1" color="textSecondary">
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>}
      {/* End footer */}
    </React.Fragment>
  );
}