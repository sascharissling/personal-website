import React from "react";

//STYLE imports
import styled from "@emotion/styled";
import GoBackIcon from "../icons/GoBackIcon";

//STYLE start
const MusicProduction = styled.div`
  width: 80vw;
  max-width: 500px;
`;

const Headline = styled.h3`
  font-family: "Merriweather", serif;
`;

const Portfolio = styled.ul`
  a {
    text-decoration: none;
    margin: 15px;
  }
  li {
    font-family: "Merriweather", serif;
    color: ${props => props.theme.primary};
    &:hover {
      color: ${props => props.theme.secondary};
    }
  }
`;

//STYLE end

export default function MusicProducer() {
  return (
    <MusicProduction>
      <GoBackIcon />
      <Headline>Music Production</Headline>
      <p>
        I am a music producer with an audio degree and a passionate guitarist. I
        have played in many places of our beautiful planet. Like Tel Aviv,
        remote Russia, a Heavy Metal Cruise ship, for myself on a beach in the
        middle of nowhere in Australia, my uncles 50th birthday and a lot more
        interesting places.
      </p>
      <p>
        After a lot of playing I started producing music and writing music for
        other people. I have mixed, mastered, produced, consulted for and with
        other artists. But nothing really stuck. So in the beginning of 2019 I
        have cut everything except what I love doing most. Writing heavy metal
        music. For myself and for other people.
      </p>
      <p>
        Listing everything I have done here would be destroying the context of
        this page. But a couple of things I am very proud of are for example:
      </p>
      <Portfolio>
        <a href="https://www.youtube.com/watch?v=FRBVjtSDSq0" target="_blank">
          <li>Contributing for the Summer Breeze Open Air 2019 Trailer</li>
        </a>
        <a href="https://www.youtube.com/watch?v=rNJeYm-1YIo" target="_blank">
          <li>My first solo record which is up on all music platforms</li>
        </a>
        <a href="https://www.youtube.com/watch?v=DrFJwLu9eTY" target="_blank">
          <li>Writing theme song for german speaker Felix Beilharz</li>
        </a>
      </Portfolio>
    </MusicProduction>
  );
}
