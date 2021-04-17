import styled from "styled-components";

import { EBreakpoints } from "~ts/enums";
import { media } from "~ts/utils";

export const TagsContainerTabletStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media(EBreakpoints.LAPTOP)} {
    align-items: flex-start;
  }
`;

export const TagsContainerMobileStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
