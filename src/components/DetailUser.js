import React,{useState, useEffect} from 'react' 
import axios from 'axios'
import {useParams} from 'react-router-dom'

function DetailUser() {
    let {id} = useParams();
    const [user, setUser] = useState({
        id: 0,
        name: "",
        status: "",
        species: "",
        gender: "",
        origin: "",
        location: "",
        image: "",
        currentId: null
    }) 
    const [fetch, setFetch] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if(id) {
                const result = await axios.get (`https://rickandmortyapi.com/api/character/${id}`);
                const {name, status, species, gender, origin, location, image} = result.data;
                setUser({
                    name, status, species, gender, origin, location, image
                });

                }
        };
             if (fetch) {
                fetchData();
                setFetch(false);
                }
    }, [fetch, id]);

    return (
            <div className="card mx-auto" style={{width: "18rem", marginTop:"10%"}}>
            <img src={user.image} className="card-img-top" alt={user.name}></img>
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">{user.species} {user.gender}</p>
              <p className="card-text">{user.origin.name} <br></br> 
              {user.location.name}</p>
            </div>
            </div>

            
        // <div>
        //     <div>

        //     <div style={{display:"inline-block", verticalAlign:"top", width:"300px", height:"300px"}} 
        //    className="ms-4 p-5 text-center">
        //    <img src={user.image} alt={user.name} style={{width:"200px"}}/><br></br>
        //    {user.name}<br />
        //    {user.species} {user.gender} {user.status}<br></br>
        //    {user.origin.name}<br></br> 
        //    {user.location.name}
        //    <br></br>
        //    </div>
        //     </div>
        // </div>
    )
}

export default DetailUser
