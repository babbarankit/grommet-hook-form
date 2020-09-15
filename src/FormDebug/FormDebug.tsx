import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { Accordion } from 'grommet/components/Accordion';
import { AccordionPanel } from 'grommet/components/AccordionPanel';
import { useState } from 'react';

export const isDevelopmentMode = () => !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export const FormDebug = () => {
  const { control, errors, formState } = useFormContext();
  const { touched } = formState;
  const values = useWatch({ control });
  const [activeIndex, setActiveIndex] = useState([0]);
  const preStyle = { max: '90%', padding: 15 };
  return (
    <Accordion
      background="light-1"
      margin={{ top: 'large' }}
      pad="small"
      activeIndex={activeIndex}
      onActive={(newActiveIndex) => setActiveIndex(newActiveIndex)}
    >
      <AccordionPanel label="Form Values">
        <pre style={preStyle}>{JSON.stringify(values, null, 2)}</pre>
      </AccordionPanel>
      <AccordionPanel label="Errors">
        <pre style={preStyle}>{JSON.stringify(errors, null, 2)}</pre>
      </AccordionPanel>
      <AccordionPanel label="Touched">
        <pre style={preStyle}>{JSON.stringify(touched, null, 2)}</pre>
      </AccordionPanel>
    </Accordion>
  );
};
