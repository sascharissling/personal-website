import React from "react";

//STYLE imports
import styled from "@emotion/styled";

//STYLE start
const MusicProduction = styled.div``;

const Headline = styled.h3`
  font-family: "Merriweather", serif;
`;

//STYLE end

export default function MusicProducer() {
  return (
    <MusicProduction>
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
    </MusicProduction>
  );
}
