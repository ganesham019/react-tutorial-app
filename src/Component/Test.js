// import React, { Component } from "react";

// class Test extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "ganesh" };
//   }
//   ChangeHandler(){
//       this.setState({name: "Dinesh"});
//   }
//   render() {
//     return (
//       <div>
//           <h1>{this.state.name}</h1>
//         <button onClick={() => this.ChangeHandler()}>Change Name</button>
//       </div>
//     );
//   }
// }

// export default Test;

// *Props*
// import React  from "react";
// const Test = (p) => {
//     return <div className="">
//         <h1>{p.name}</h1>
//     </div>
// }
// export default Test;

// *Render*

// import React from "react";

// function Test() {
//   const Person = [
//     { name: "gan", id: "1", description: "Employee" },
//     { name: "jan", id: "2", description: "Employee" },
//     { name: "dan", id: "3", description: "Employee" },
//   ];
//   const EmployeList = Person.map((x, index) => (
//     <>
//       <div className="" key={index}>
//         <h1>
//           {x.name} is a {x.description} of our Company{" "} and their id is {x.id}
//         </h1>
//       </div>
//     </>
//   ));
//   return <div>
//       {EmployeList}
//   </div>;
// }

// export default Test;



