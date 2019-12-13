import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: purple;
  width: 10%;
`;

const Title = styled.h2`
  text-align: center;
`;
const SwH4 = styled.h4`
  text-align: center;
  color: black;
`;

export default function Characters({ props }) {
  return (
    <Card>
      <Title>Name: {props.name}</Title>
      <SwH4>Year of Birth: {props.birth_year}</SwH4>
      <SwH4>Approx Height: {props.height}</SwH4>
      <SwH4>Approx Mass: {props.mass}</SwH4>
      <SwH4>Hair Color: {props.hair_color}</SwH4>
      <SwH4>Skin Color: {props.skin_color}</SwH4>
      <SwH4>Eye Color: {props.eye_color}</SwH4>
    </Card>
  );
}
