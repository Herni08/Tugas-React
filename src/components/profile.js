import React, { Component } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Navbar, NavbarBrand, NavLink, FormControl } from 'react-bootstrap'

export default class Profile extends Component {
    constructor () {
        super ()
        this.state = {
            items : []
        }
    }
    componentDidMount() {
        fetch("https://randomuser.me/api/?results=8")
          .then(res => res.json())
          .then(parsedJSON => parsedJSON.results.map(data => (
            {
              id: `${data.id.name}`,
              firstName: `${data.name.first}`,
              lastName: `${data.name.last}`,
              location: `${data.location.state}, ${data.nat}`,
              thumbnail: `${data.picture.large}`,
  
            }
          )))
          .then(items => this.setState({
            items,
            isLoaded: false
          }))
          .catch(error => console.log('parsing failed', error))
      }
  


    render () {

           const {items} = this.state;
        return (
          <div className="boxBlack">
            <h2 className="text-center">Random Profile</h2>
            <br></br>
            <br></br>
            {
              items.length > 0 ? items.map(item => {
              const {id, firstName, lastName, location, thumbnail} = item;
               return (
                    
                    <div style={{display:"inline-block", verticalAlign:"top", width:"300px", height:"300px"}} 
                    key={id} className="ms-4 p-5 text-center">
                    <img src={thumbnail} alt={firstName} className="circle"/><br></br>
                        {firstName} {lastName}<br />
                        {location}
                        <br></br>
                    </div>
              );

            }) : null
          }
          </div>
        );
        
    }
}