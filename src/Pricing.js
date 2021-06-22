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
      {' 現在時間 : '}
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
    title: '毛朋友',
    price: '30USD',
    description: [
      '我神',
      '好啊',
      '我單腳',
    ],
    buttonText: '想成為毛朋友請使用Spotify',
    buttonVariant: 'outlined',
  },
  {
    title: '毛毛朋友',
    price: '60USD',
    description: [
      '可以聽更多歌',
      '開啟歌詞功能',
      '可以享受無廣告服務',
      
    ],
    buttonText: '想成為毛毛朋友請使用Spotify',
    buttonVariant: 'outlined',
  },
  {
    title: '毛毛毛朋友',
    price: '90USD',
    description: [
      '好聽一直聽',
      '可以離線收聽',
      '尊爵不凡皇家音質',
    ],
    buttonText: '想成為毛毛毛朋友請使用Spotify',
    buttonVariant: 'outlined',
  },

];

const footers = [
  {
    title: '毛毛朋友幫最愛聽',
    description: ['垃圾圖奇還我張恩人', '連志祥'],
  },
  {
    title: '毛毛兄弟幫最愛聽',
    description: ['這不是超志祥', '連大包'],
  },
  {
    title: '章魚花枝幫最愛聽',
    description: ['始祖巨人座標之力', '日不落'],
  },
  {
    title: '硬幫幫最愛聽',
    description: ['無限月讀', '好聽的歌'],
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
            首頁
          </Typography>
          <Link  class = "context" to = "/album">
            歌手
          </Link>
          <nav>
            <Link class = "context" to ="/song">
              我的歌單
            </Link>
            <Link class = "context" to = "/profile">
              個人頁
            </Link>
            <Link class = "context" to = "/">
            登出
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
          歡迎來到我們的音樂網頁
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