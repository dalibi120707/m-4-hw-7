import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailedPage = () => {
  const [info, setInfo] = useState({});
  const params = useParams();
  console.log(params.id);
  const sentRequest = async () => {
    try {
      const a = await axios({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/posts/${params.id}`,
      });

      //   console.log(a.data);
      setInfo(a.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    sentRequest();
  }, []); 
  console.log(info);

  return (
    <div>
      <h2> {info.title}</h2>
      <p> {info.id}</p>
    </div>
  );
};

export default DetailedPage;
