import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

import { IStateMachineInput, Rive } from "~ts/blocks/Rive";
import { ETheme, RiveStates, RiveStateTriggerNames } from "~ts/enums";
import { getTheme, useSelector } from "~ts/store";
import { resetButtonStyles } from "~ts/styles";
import { IStyledProps } from "~ts/typings";

const DogStyled = styled.button`
  ${resetButtonStyles}
  cursor: pointer;
  &:focus {
    outline: none;
  }
  display: flex;
  align-items: center;
`;

interface IDogAnimationQuery {
  dog: {
    publicURL: string;
  };
}

interface IDogProps extends IStyledProps {
  stop: boolean;
}

export const Dog = ({ className, stop }: IDogProps) => {
  const data: IDogAnimationQuery = useStaticQuery(graphql`
    {
      dog: file(extension: { eq: "riv" }, name: { eq: "dog_home" }) {
        publicURL
      }
    }
  `);

  const stopMemo = useMemo(() => stop, [stop]);
  const theme = useSelector(getTheme);

  const [inputs, setInputs] = useState([] as IStateMachineInput[]);

  const stopInput = useMemo(
    () => inputs.find(input => input.name === RiveStateTriggerNames.DOG_STOP),
    [inputs]
  );

  const blinkInput = useMemo(
    () => inputs.find(input => input.name === RiveStateTriggerNames.DOG_BLINK),
    [inputs]
  );

  const themeInput = useMemo(
    () =>
      inputs.find(
        input => input.name === RiveStateTriggerNames.DOG_SWITCH_THEME
      ),
    [inputs]
  );

  const onDogClick = () => {
    if (blinkInput) {
      blinkInput.fire();
    }
  };

  useEffect(() => {
    if (themeInput && theme) {
      themeInput.value = theme === ETheme.Light;
    }
  }, [theme, themeInput]);

  useEffect(() => {
    if (stopMemo && stopInput) {
      stopInput.fire();
    }
  }, [stopMemo, stopInput]);

  return (
    <DogStyled onClick={onDogClick}>
      <Rive
        className={className}
        src={data.dog.publicURL}
        autoplay
        stateMachine={RiveStates.DOG_WALKING_BLINK_THEME_STATE}
        onStateMachines={machines => {
          setInputs([...machines]);
        }}
      />
    </DogStyled>
  );
};
