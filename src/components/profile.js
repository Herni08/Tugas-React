import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Profile() {
  const [users, setUsers] = useState([]);
  const [fetch, setFetch] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://rickandmortyapi.com/api/character`
      );
      console.log(result);
      setUsers(
        result.data.results.map((item) => {
          const {id, name, status, species, gender, origin, location, image} = item;
          return {
            id, name, status, species, gender, origin, location, image
          };
        })
      );
    };
    if (fetch) {
      fetchData();
      setFetch(false);
    }
  }, [fetch]);

  return (
    <>
    <div>
      <h1 className="text-center">Rick and Morty</h1>
      <br></br>
      <br></br>
      {users.map((item, index) => {
        return (
          
            <div key={index} className="card mx-4 mb-5" style={{width: "18rem", display:"inline-flex"}}>
            <img src={item.image} className="card-img-top" alt={item.name}></img>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.species} {item.gender}</p>
              <Link to={`/Detail/${item.id}`} className="btn btn-primary btn-sm">Detail</Link>
            </div>
            </div>
            
        )
      })}
    </div>
    </>
  )
}

export default Profile

  