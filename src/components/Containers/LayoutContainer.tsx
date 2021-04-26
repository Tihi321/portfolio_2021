import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocalStorage } from "ts-use";

import { ETheme, LocalStorageKeys } from "~ts/enums";
import { initialState, setTheme, useStore } from "~ts/store";
import { IContainerProps } from "~ts/typings";
import { isTheme } from "~ts/utils";

import { GdrpModal } from "../Modals";
import { RevealContainer } from "./RevealContainer";

const RevealContainerStyled = styled(RevealContainer)`
  display: grid;
  height: 100%;
  grid-template-rows: max-content 1fr max-content;
`;

const LoaderContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const LayoutContainer = ({ children }: IContainerProps) => {
  const [showLoader, setShowLoader] = useState(true);
  const { dispatch } = useStore();
  const { data: isGdprCompliant, setLocalStorage } = useLocalStorage(
    LocalStorageKeys.Gdpr,
    false
  );
  const { data: theme } = useLocalStorage(
    LocalStorageKeys.Theme,
    initialState.theme
  );

  const onGdprAgree = () => {
    setLocalStorage(true);
  };

  useEffect(() => {
    if (isTheme(theme as string)) {
      dispatch(setTheme(theme as ETheme));
    }

    setShowLoader(false);
  }, [theme]);

  if (showLoader) {
    return <LoaderContainer />;
  }

  return (
    <RevealContainerStyled>
      {!isGdprCompliant && <GdrpModal onClick={onGdprAgree} />}
      {children}
    </RevealContainerStyled>
  );
};
