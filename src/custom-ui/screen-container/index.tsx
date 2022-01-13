/* eslint-disable no-nested-ternary */
import { Button, CheckboxRow, Divider, Field, Flexbox, Input, Padding, Text } from '@/ui';
import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Screen } from '@/data/mock-api-response';

interface Props {
  screen: Screen;
  onNextPage: (inputs: unknown) => unknown;
  onPreviousPage: () => unknown;
  submit: () => unknown;
  pageNumber: number;
  isLastPage: boolean;
}

export function ScreenContainer(props: Props): JSX.Element {
  const { screen, onNextPage, onPreviousPage, submit, pageNumber, isLastPage } = props;

  const { title, description, fields } = screen;
  const [inputValues, setInputValues] = useState({});
  const isValid = checkIfScreenIsValid();

  function updateInput(event: string | boolean, fieldId): void {
    const clone = { ...inputValues };
    clone[fieldId] = event;
    setInputValues({ ...clone });
  }

  function checkIfScreenIsValid(): boolean {
    const requiredFields = fields
      .filter((f) => f.required && (!f.dependency || (f.dependency && inputValues[f.dependency])))
      .map(({ key }) => key);
    return requiredFields.every((key) => inputValues[key]);
  }

  return (
    <StyledScreen>
      <Padding size={32}>
        <Padding bottom={24}>
          <Text size="extraLarge">{title}</Text>
        </Padding>
        {description ? (
          <Padding bottom={32}>
            <Text>{description}</Text>
          </Padding>
        ) : null}

        {fields.map(({ key, label, hint, type, required, dependency }) => (
          <Padding key={key} bottom={32}>
            {(['number', 'text'].includes(type) && !dependency) ||
            (['number', 'text'].includes(type) && dependency && inputValues[dependency]) ? (
              <Field fieldId={key} label={label} hint={hint}>
                <Input
                  fieldId={key}
                  type={type}
                  isRequired={required}
                  defaultValue={inputValues[key] || ''}
                  onChange={(e) => updateInput(e, key)}
                />
              </Field>
            ) : type === 'checkbox' ? (
              <CheckboxRow isActive={inputValues[key]} label={label} onClick={(e) => updateInput(e, key)} />
            ) : null}
          </Padding>
        ))}
        <Padding top={24} bottom={24}>
          <Divider />
        </Padding>
        <Flexbox justifyContent="space-between">
          {pageNumber ? (
            <Button size="secondary" type="button" onClick={onPreviousPage}>
              Back
            </Button>
          ) : (
            <div />
          )}
          {!isLastPage ? (
            <Button size="primary" disabled={!isValid} type="button" onClick={() => onNextPage(inputValues)}>
              Next
            </Button>
          ) : (
            <Button size="primary" type="button" onClick={() => submit()}>
              Finish
            </Button>
          )}
        </Flexbox>
      </Padding>
    </StyledScreen>
  );
}

const StyledScreen = styled.div`
  box-sizing: border-box;
  height: 100%;
`;
