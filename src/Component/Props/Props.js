import React  from "react";

const Property = p => {
    console.log(p);
    return <>
    <h1>Hellow &nbsp;{p.name} and the Director Name is {p.directorname}</h1>
    </>
}

export default Property;

// Definition and Explanation
// Properties (props) is a object , Props is technique to send the data via React Components , 
// that store a value of Attributes ,
//  It is immutable ,
//   It is read Only Component 