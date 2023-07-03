import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abenezer Melaku </span>
            from <span className="purple"> Ethiopia, Addis Abeba.</span>
            <br /> I am a 4th year student pursuing Software Engineering at
            Addis Abeba University.
            <br />
            Additionally, I am currently a member of A2SV(Africa to silcon
            valley).
            <br />
            <br />
            Apart from coding, here are activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing BasketBall
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"Always More" </p>
          <footer className="blockquote-footer">me</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
