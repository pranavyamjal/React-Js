import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData() ;

    // commented the below to run the loader of react router

//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/pranavyamjal")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-5 text-3xl">
      Github Followers:: {data.followers}
      <img src={data.avatar_url} alt="Git Profile Picture" width={300} />
    </div>
  );
}

export default Github;


// just for understanding the loader of react router, not an good practice to the below in the same file should use a separate file.

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/pranavyamjal')
    return response.json()
}