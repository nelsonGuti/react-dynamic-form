import React from 'react';
import { Header } from '@/custom-ui/header';
import { FormContainer } from '@/custom-ui/form-container';
import { Api, mockApiResponse } from '@/data/mock-api-response';

export default function IndexPage(): JSX.Element {
  const { headerTitle, screens } = mockApiResponse as Api;
  return (
    <div>
      <Header title={headerTitle} />
      <FormContainer screens={screens} />
    </div>
  );
}
