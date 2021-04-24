import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocalStorage } from "ts-use";

import { ETheme, LocalStorageKeys } from "~ts/enums";
import { setTheme, useStore } from "~ts/store";
import { IContainerProps } from "~ts/typings";
import { isTheme } from "~ts/utils";

import { GdrpModal } from "../Modals";

const LayoutContainerStyled = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: max-content 1fr max-content;
`;

export const LayoutContainer = ({ children }: IContainerProps) => {
  const { dispatch } = useStore();
  const { data: isGdprCompliant, setLocalStorage } = useLocalStorage(
    LocalStorageKeys.Gdpr,
    false
  );
  const { data: theme } = useLocalStorage(LocalStorageKeys.Theme, false);

  const onGdprAgree = () => {
    setLocalStorage(true);
  };

  useEffect(() => {
    if (theme && isTheme(theme as string)) {
      dispatch(setTheme(theme as ETheme));
    }
  }, [theme]);

  return (
    <LayoutContainerStyled>
      {!isGdprCompliant && <GdrpModal onClick={onGdprAgree} />}
      {children}
    </LayoutContainerStyled>
  );
};
