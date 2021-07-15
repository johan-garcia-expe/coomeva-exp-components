import React from 'react';
import { useCssHandles } from 'vtex.css-handles';

type Props = {
  name: string;
};

const CSS_HANDLES = ['greeting'];

const Greeting = ({ name }: Props) => {
  const handles = useCssHandles(CSS_HANDLES);

  return <div className={handles.greeting}>{`Hola, ${name}`}</div>;
};

Greeting.schema = {
  title: 'Nombre del componente',
  type: 'object',
  properties: {
    name: {
      title: 'Nombre de la propiedad',
      type: 'string',
    },
  },
};

export default Greeting;
