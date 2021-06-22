import React from 'react';
import $ from 'jquery';

class Usergithub extends React.Component {     
    constructor(props) {  //建構子      
        super(props);         
        this.state = {           
            username: '',           
            userlogin: '',           
            avatarUrl: '',
            userSchool: '',
            userfollowers: '',
            userlocate: '',
            githubtUrl: '',
            userblog: ''         
        }     
    }     
    componentDidMount() {//元件初始
        $.get(this.props.source, (result) => {             
            console.log(result);             
            const data = result;             
            if (data) {               
                this.setState({                     
                    username: data.name,  
                    userSchool: data.company,
                    userlocate: data.location,                   
                    useremail: data.email,                     
                    avatarUrl: data.avatar_url,
                    userfollowers: data.followers,
                    userblog: data.blog,
                    githubtUrl: data.html_url,
                    userlogin: data.login              
                });             
            }         
        });     
    }     
    render() {         
        return (           
            <div>                          
                <img src={this.state.avatarUrl} />           
                <h3>NAME: {this.state.username}</h3>
                <h3>ID: {this.state.userlogin}</h3>
                <h3>SCHOOL: {this.state.userSchool}</h3>
                <h3>LOCATION: {this.state.userlocate}</h3> 
                <a href={this.state.githubtUrl}>Github Link</a>.
            </div>         
                );     
            } 
            
        } 
export default Usergithub;