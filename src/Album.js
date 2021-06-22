import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'; 
import './Css/Album.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {''}
      <Link color="inherit" href="https://material-ui.com/">
      </Link>
      {' 現在時間 : '}
      {new Date().getHours()}
      {' : '}
      {new Date().getMinutes()}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar >
          {/*<CameraIcon className={classes.icon} />*/}
          <Typography variant="h6" color="inherit" noWrap>
            歌手頁面
          </Typography>
          <Link to = "/pricing" class = "context1">
              首頁
          </Link>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm" >
            <Typography component="h1" variant="h2" align="center" color="textPrimary" >
              歌手
            </Typography>
            <Typography variant="h4" align="center" color="textSecondary" >
              這裡有很多很知名的歌手請細細品嘗
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  {""}
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://cdn2.ettoday.net/images/4836/d4836317.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent} >
                    <Typography gutterBottom variant="h6" component="h2" class = "context3">
                      羅志祥AKA空幹王
                    </Typography>
                    <Typography variant="h6"  color="textSecondary">
                      精武門
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" color="primary" href = "https://www.youtube.com/watch?v=_GmtUflOQkA" target = "blank">
                      立刻聽
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://obs.line-scdn.net/0h0dQDzTg_b0tsPUQBwdoQHFZrbCRfUXxICAs-SC9TMX8UDn1NUQghJU81Mn1AXSgVAgkkLUg_dHoRCiBPVgsh/w644"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2" class = "context3">
                      高爾軒OSN
                    </Typography>
                    <Typography  variant="h6"  color="textSecondary">
                      後悔高中裝很吵的排氣管
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" color="primary" href = "https://www.youtube.com/watch?v=HQDDlgGy2hg" target = "blank">
                      立刻聽
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent} >
                    <Typography gutterBottom variant="h6" component="h2" class = "context3">
                      CJ最愛
                    </Typography>
                    <Typography variant="h6"  color="textSecondary">
                      猜猜我是誰
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" color="primary" href = "https://www.youtube.com/watch?v=D1PvIWdJ8xo" target = "blank">
                      立刻聽
                    </Button>
                  </CardActions>
                </Card>
              </Grid>         
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          真正的音樂只有冠瑋日不落
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          好聽一直聽!
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}