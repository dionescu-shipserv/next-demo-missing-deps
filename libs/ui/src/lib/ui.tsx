import React from 'react';

import styled from 'styled-components';
import { FeatureFlag } from 'react-launch-darkly';

/* eslint-disable-next-line */
export interface UiProps {}

const StyledUi = styled.div`
  color: pink;
`;

export function Ui(props: UiProps) {
  return (
    <StyledUi>
      <FeatureFlag test="true" />
      <h1>Welcome to ui!</h1>
    </StyledUi>
  );
}

export default Ui;
