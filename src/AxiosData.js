import React, { useEffect, useState } from "react";
import axios from "axios";

function AxiosData() {
  const [datas, setdata] = useState([]);
  const [photos, setphotos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      var _temp_data = [];
      response.data.forEach((element) => {
        _temp_data.push(element.title);
      });
      setdata(_temp_data);
    });
  }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        console.log(response.url);
        var _temp_pics = [];
        response.data.forEach((element) => {
          _temp_pics.push(element.url);
        });
        setphotos(_temp_pics);
      });
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h5 style={{ color: "white" }}>
        Data source: https://jsonplaceholder.typicode.com/todos
      </h5>
      <div>
        {datas.map((id) => {
          return (
            // <div class="collection">
            <a class="collection-item" key={Math.random()}>
              {id}
            </a>
            // </div>
          );
        })}
      </div>
      <h5 style={{ color: "white" }}>
        Data source: https://jsonplaceholder.typicode.com/photos
      </h5>
      {photos.map((item) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <img
              style={{
                height: "300px",
                width: "300px",
              }}
              loading="lazy"
              src={item}
            />
          </div>
        );
      })}
    </div>
  );
}

export default AxiosData;
