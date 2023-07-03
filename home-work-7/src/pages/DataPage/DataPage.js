import React, { useEffect, useState } from "react";
import NavMenu from "../../components/NavMenu/NavMenu";
import axios from "axios";
import styles from "./DataPage.module.css";
import { NavLink } from "react-router-dom";

const DataPage = () => {
  const [info, setInfo] = useState([]);
  const sentRequest = async () => {
    try {
      const a = await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
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
      <NavMenu />
      <div className={styles.dateParent}>
        <ul>
          {info.map((item) => {
            return (
              <li key={item.id}>
                <NavLink to={`/dateis/${item.id}`}>
                  <h2>{item.title}</h2>
                  <p>{item.id}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
        <Outlet/>
      </div>
    </div>
  );
};

export default DataPage;
