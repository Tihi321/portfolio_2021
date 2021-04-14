import React from "react";
import styled from "styled-components";

import { Heading } from "~ts/components/Common";
import { EHeadingSizes } from "~ts/enums";

const ListTitleStyled = styled(Heading)`
  padding-bottom: 15px;
`;

interface IListTitleProps {
  title: string;
}

export const ListTitle = ({ title }: IListTitleProps) => (
  <ListTitleStyled size={EHeadingSizes.Regular}>{title}</ListTitleStyled>
);
