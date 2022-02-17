import React from "react";

export default function ListRendering() {
  const name = ["ganesh ", "makesh", "vishwa", "vijay"];
  const namelist = name.map((x) => <h2>{x}</h2>);
  const product = [
    {
      name: "p1",
      pid: "001",
      price: "300$",
    },
    {
      name: "p2",
      pid: "002",
      price: "300$",
    },
    {
      name: "p3",
      pid: "003",
      price: "300$",
    },
    {
      name: "p4",
      pid: "004",
      price: "300$",
    },
  ];
  {
    /* fourth method */
  }
  const ProductList = product.map((x,index) => (
    <div classname="col">
      <h2 key={index}>Name Of the product is {x.name} and the Price is {x.price} and the index is {index}</h2>
    </div>
  ));
  return (
    <div>
      {/* First Method */}
      {/* <h2>{name[0]}</h2>
<h2>{name[1]}</h2>
<h2>{name[2]}</h2> */}

      {/* Second Method */}
      {/* {name.map((x) => (
        <h2>{x}</h2>
      ))} */}

      {/* Third method */}
      {/* {namelist} */}

      {/* fourth method */}
      {ProductList}
    </div>
  );
}
