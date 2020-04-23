import React from "react";
import "./reveal.scss";

function Reveal(props) {
  return (
    <section className="reveal">
      <h1 className="reveal-text">{props.text}</h1>
    </section>
  );
}
Reveal.defaultProps = {
  text: "Awesome page revealed",
};

export default Reveal;
