type InputType = 'text' | 'number' | 'checkbox';

export interface Field {
  key: string;
  label: string;
  type: InputType;
  required: boolean;
  hint: string;
  options?: string[];
  dependency?: string;
}

export interface Screen {
  title: string;
  description?: string;
  fields: Field[];
}

export interface Api {
  id: string;
  headerTitle: string;
  screens: Screen[];
}

export const mockApiResponse: Api = {
  id: '1224555',
  headerTitle: "Worker's compensation",
  screens: [
    {
      title: 'Who is the primary contact for this policy?',
      description: `This person will receive all communications from Newfront about this policy. 
        You can change the contact information later. If you're not sure, just add your contact information`,
      fields: [
        {
          key: 'name',
          label: 'Full Name',
          type: 'text',
          required: true,
          hint: '',
        },
        {
          key: 'role',
          label: 'Role',
          type: 'text',
          required: false,
          hint: '',
        },
        {
          key: 'phone-number',
          label: 'Phone Number',
          type: 'number',
          required: true,
          hint: '',
        },
      ],
    },
    {
      title: 'Tell us about your company',
      description: '',
      fields: [
        {
          key: 'company-name',
          label: 'Company Name',
          type: 'text',
          required: true,
          hint: '',
        },
        {
          key: 'fein',
          label: 'What is your Federal Employer Identification Number? (FEIN)',
          type: 'text',
          required: true,
          hint: '',
        },
        {
          key: 'years-business',
          label: 'Years in business',
          type: 'number',
          required: false,
          hint: '',
        },
        {
          key: 'locations',
          label: 'Number of Locations',
          type: 'number',
          required: false,
          hint: '',
        },
        {
          key: 'states',
          label: 'In which states do you operate?',
          type: 'text',
          required: false,
          hint: '',
        },
      ],
    },
    {
      title: 'Tell us about your employees',
      description: '',
      fields: [
        {
          key: 'injuries',
          label: "What's the name of the clinic, physician, or ER used for work injuries",
          type: 'text',
          required: false,
          hint: '',
        },
        {
          key: 'medical-insurance',
          label: 'Do you provide medical insurance?',
          type: 'checkbox',
          required: false,
          hint: '',
        },
        {
          key: 'retirement',
          label: 'Do you offer a retirement or pension plan?',
          type: 'checkbox',
          required: false,
          hint: '',
        },
        {
          key: 'paid-vacation',
          label: 'Do you give paid vacation?',
          type: 'checkbox',
          required: false,
          hint: '',
        },
        {
          key: 'paid-vacation-details',
          label: 'Do you give paid vacation?',
          type: 'text',
          required: true,
          hint: '',
          dependency: 'paid-vacation',
        },
      ],
    },
    {
      title: 'How do you want to pay for your policy',
      description: '',
      fields: [
        {
          key: 'pay-newfront',
          label: 'I want to pay Newfront',
          type: 'checkbox',
          required: false,
          hint: '',
        },
        {
          key: 'other-pay',
          label: 'I want to pay the insurance company directly',
          type: 'checkbox',
          required: false,
          hint: '',
        },
      ],
    },
  ],
};
