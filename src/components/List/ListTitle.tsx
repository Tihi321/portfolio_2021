import React from "react";
import styled from "styled-components";

import { EHeadingSizes, Heading } from "@components";

const ListTitleStyled = styled(Heading)`
  padding-bottom: 15px;
`;

interface IListTitleProps {
  title: string;
}

export const ListTitle = ({ title }: IListTitleProps) => (
  <ListTitleStyled size={EHeadingSizes.Regular}>{title}</ListTitleStyled>
);
