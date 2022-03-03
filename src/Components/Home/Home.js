import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import "./home.css";

const Home = () => {
  const [data, setData] = useState("");

  useEffect(async () => {
    const getItems = async () => {
      const res = await axios.get(
        "https://techcrunch.com/wp-json/wp/v2/posts?per page=100&context=embed"
      );
      console.log(res);
      if (res.status === 200) {
        setData(res.data);
      }
    };
    getItems();
  }, []);

  return (
    <div className="Home--container">
      <div className="data--container">
        {data.length > 0 &&
          data.map((elem, elemIndex) => (
            <div className="elem--container" key={elemIndex}>
              <h1>{elem.title.rendered}</h1>
              <img src={elem.jetpack_featured_media_url} alt="poza" />
              <p>{elem.excerpt.rendered}</p>
              <p>{moment(elem.date).format("YYYY/MM/DD")}</p>
            </div>
          ))}
      </div>
      <footer className="footer--container">
        <div className="footer-alignt-text">
          <p>ASSIST Software 20222</p>
          <p>Created by: Andrei Cojocaru</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
