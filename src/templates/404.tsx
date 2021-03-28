import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const MainStyled = styled.main`
  color: "#232129";
  padding: "96px";
  font-family: "-apple-system, Roboto, sans-serif, serif";
`;

const HeadingStyped = styled.h1`
  margin-top: 0;
  margin-bottom: 64px;
  max-width: 320p;
`;

const NotFoundPage = () => (
  <MainStyled>
    <title>Not found</title>
    <HeadingStyped>Page not found</HeadingStyped>
    <Link to="/">Go home</Link>.
  </MainStyled>
);

export default NotFoundPage;
