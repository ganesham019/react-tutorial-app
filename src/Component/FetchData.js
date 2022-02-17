import React from "react";
import { useState, useEffect } from "react";

function FetchData() {
  const [stat, setStat] = useState();

  useEffect(() => {
    async function GetData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setStat(data);
    }
    GetData();
  }, []);
  return (
    <div className="m-2 ">
      {stat && (
        <>
          {stat.map((x, index) => (
            <div className="mt-3 " key={index}>
              <p>
                {x.id}. {x.body}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default FetchData;
