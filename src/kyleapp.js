import Usergithub from './bin.js';
import React, { Comoponent } from 'react';
import {Link} from 'react-router-dom'
import './Css/Profile.css'
function kyleapp() {
  return (
      <div>
      <Link class = "Page" to = "/pricing">
            首頁
        </Link>
        { Usergithub } 
        <Usergithub source="https://api.github.com/users/kylelee26"></Usergithub>
      </div>
  );
}

export default kyleapp;