import * as React from 'react';
import styled from 'styled-components';
import { Flexbox, Padding, Stack, Text, EmployeeProfile, EmployeeThumbnail } from '@/ui';

interface Props {
  title: string;
}

export function Header(props?: Props): JSX.Element {
  const { title = "Worker's compensation" } = props;
  return (
    <StyledHeader>
      <Padding size={12}>
        <Flexbox justifyContent="space-between" alignItems="center">
          <Flexbox alignItems="center">
            <Stack gap={12} alignItems="center">
              <EmployeeThumbnail sizeInPixels={40} variant="round" />
              <Text>{title} application</Text>
            </Stack>
          </Flexbox>

          <Stack gap={12} alignItems="center">
            <EmployeeProfile imageUrl="https://placekeanu.com/100/100" title="" name="" />
          </Stack>
        </Flexbox>
      </Padding>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  border-bottom: 1px solid grey;
  background-color: white;
`;
