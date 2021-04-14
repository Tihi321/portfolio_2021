import React from "react";
import styled from "styled-components";

import { CenterContainer, Layout, InternalLink } from "@components";
import { InternalLinks } from "@enums";
import { textColor } from "@themes";

const TitleStyled = styled.h1`
  margin: 20px 0;
  padding: 15px;
  color: ${textColor};
`;

const NotFoundPage = () => (
  <Layout title="Page Not Found">
    <CenterContainer>
      <TitleStyled>Page not found</TitleStyled>
      <InternalLink to={InternalLinks.HOME}>Go home</InternalLink>
    </CenterContainer>
  </Layout>
);

export default NotFoundPage;
