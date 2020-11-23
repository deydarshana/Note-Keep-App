import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Service = () => {
    const {fname, lname} = useParams();
    const location = useLocation();
    console.log(location);

   return (
   <div>

    <h1> use {fname} {lname} page</h1>
    <p>My current location is {location.pathname}</p>
    {location.pathname === `/service/darsh/hello` ? (
         <button>Click Me</button>
    ) : null}
   </div>
   );
}

export default Service