import { boolean } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React, { Fragment } from "react";
import styled from "styled-components";

import { RiveStates, RiveStateTriggerNames } from "~ts/enums";

import { IStateMachineInput, Rive as RiveComponent } from "../Rive";

const AnimationButtons = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnimationButton = styled.button`
  padding: 5px;
  margin-right: 10px;
`;

export const Loader = () => {
  const autoplay = boolean("Autoplay", true, "OPTIONS");
  const commands = boolean("Commands", false, "OPTIONS");
  const pause = boolean("Pause", false, "OPTIONS");

  return (
    <RiveComponent
      src="https://cdn.jsdelivr.net/gh/Tihi321/portfolio_2021/docs/static/assets/loader.riv"
      commands={commands}
      pause={pause}
      autoplay={autoplay}
    />
  );
};

export const Dog = () => {
  let inputs: IStateMachineInput[] = [];

  const onStopWalking = () => {
    const stopInput = inputs.find(
      input => input.name === RiveStateTriggerNames.DOG_STOP
    );

    if (stopInput) {
      stopInput.fire();
    }
  };

  const onBlink = () => {
    const blinkInput = inputs.find(
      input => input.name === RiveStateTriggerNames.DOG_BLINK
    );

    if (blinkInput) {
      blinkInput.fire();
    }
  };

  const onChangeTheme = () => {
    const themeInput = inputs.find(
      input => input.name === RiveStateTriggerNames.DOG_SWITCH_THEME
    );

    if (themeInput) {
      themeInput.value = !themeInput.value;
    }
  };

  return (
    <Fragment>
      <RiveComponent
        src="https://cdn.jsdelivr.net/gh/Tihi321/portfolio_2021/docs/static/assets/dog_home.riv"
        autoplay
        stateMachine={RiveStates.DOG_WALKING_BLINK_THEME_STATE}
        onStateMachines={machines => {
          inputs = [...machines];
        }}
      />
      <AnimationButtons>
        <AnimationButton type="button" onClick={onStopWalking}>
          Sit
        </AnimationButton>
        <AnimationButton type="button" onClick={onBlink}>
          Blink
        </AnimationButton>
        <AnimationButton type="button" onClick={onChangeTheme}>
          Change Theme
        </AnimationButton>
      </AnimationButtons>
    </Fragment>
  );
};

const meta = {
  title: "Blocks/Rive"
};

export default meta as Meta;
