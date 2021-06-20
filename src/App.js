import React from 'react';
import './App.css'
import Pricing from './Pricing';
import Album from './Album';
import Signin  from './Signin';
import SongApp from './Song/SongApp';
import Profile from './Profile';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import ReactGA from  'react-ga'
import Analytics from 'react-router-ga';


function  Match() {
    return (
        <Router>
        <div className = "Match">
            {/*<Link to = "/album">歌手</Link>*/}
            <Analytics id="G-KQ2SRPE67R">
            <Switch>
                <Route path = "/" exact component = {Signin}/>
                <Route path = "/album" component = {Album}/>
                <Route path = "/song" component = {SongApp}/>
                <Route path = "/pricing" component = {Pricing}/>
                <Route path ="/profile" component={Profile}/>
            </Switch>
            </Analytics>

        </div>
        </Router>
    );
}



export default Match;