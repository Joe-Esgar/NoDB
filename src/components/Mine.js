import React from "react";

function Mine(props) {
  const { list, changeHandler } = props;
  const bs = () => {
    list.map((val, index) => {
      return <p key={index}>{val}</p>;
    });
    console.log(list, "HOLY GOD ITS MY LIST");
  };
  var name;
  return (
    <div className="Mine">
      <div>
        <input
          onChange={e => {
            name = e.target.value;
          }}
        />
        <button onClick={() => changeHandler(name)}>click</button>
        <div>{bs}</div>
      </div>
    </div>
  );
}

export default Mine;
