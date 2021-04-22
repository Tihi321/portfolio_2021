import React from "react";
import styled from "styled-components";

import { useLocalStorage } from "~ts/hooks";
import { IContainerProps } from "~ts/typings";

import { GdrpModal } from "../Modals";

const LayoutContainerStyled = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: max-content 1fr max-content;
`;

export const LayoutContainer = ({ children }: IContainerProps) => {
  const { data: isGdprCompliant, setLocalStorage } = useLocalStorage(
    "ts/gdpr",
    false
  );

  const onGdprAgree = () => {
    setLocalStorage(true);
  };

  return (
    <LayoutContainerStyled>
      {!isGdprCompliant && <GdrpModal onClick={onGdprAgree} />}
      {children}
    </LayoutContainerStyled>
  );
};
