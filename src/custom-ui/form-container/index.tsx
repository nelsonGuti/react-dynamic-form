import { Flexbox, Padding } from '@/ui';
import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { ScreenContainer } from '../screen-container';
import { Screen } from '@/data/mock-api-response';

interface Props {
  screens: Screen[];
}

export function FormContainer(props: Props): JSX.Element {
  const { screens } = props;
  const [pageNumber, setPageNumber] = useState(0);
  const [fieldsValues, setFieldValues] = useState();

  function getInputValues(inputsValues): void {
    setPageNumber(pageNumber + 1);
    setFieldValues(inputsValues);
  }

  function previousPage(): void {
    setPageNumber(pageNumber - 1);
  }

  function onSubmit(): void {
    // logging the form values to simulate a POST endpoint
    // eslint-disable-next-line no-console
    console.log('Body of the POST endpoint to be hit', fieldsValues);
  }

  return (
    <StyledContainer>
      <Flexbox justifyContent="center">
        <Padding size={48}>
          <StyledFormContainer>
            <ScreenContainer
              screen={screens[pageNumber]}
              onNextPage={(inputValues) => getInputValues(inputValues)}
              onPreviousPage={() => previousPage()}
              submit={() => onSubmit()}
              pageNumber={pageNumber}
              isLastPage={screens.length === pageNumber + 1}
            />
          </StyledFormContainer>
        </Padding>
      </Flexbox>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  background-color: #f6f8ff;
  box-sizing: border-box;
  height: 100%;
`;

const StyledFormContainer = styled.div`
  background-color: white;
  // min-height: 400px;
  width: 600px;
  border: 1px solid #dbdbdb;
  border-radius: 6px;
  box-sizing: border-box;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.03);
`;
