import React from "react";

function GiphySearch(props) {
  return (
    <div className="gif-container">
      {props.data &&
        props.data.data.map((item) => (
          <div className="gif-image">
            <img src={item.images.downsized.url} alt={item.title}></img>
            <h3>{item.title}</h3>
          </div>
        ))}
    </div>
  );
}

export default GiphySearch;
