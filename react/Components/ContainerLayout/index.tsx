import React from 'react';
import { useCssHandles } from 'vtex.css-handles';

type ContainerLayoutProps = {
  name: string;
};

const CSS_HANDLES = ['containerLayout'];

const ContainerLayout = ({ name }: ContainerLayoutProps) => {
  const handles = useCssHandles(CSS_HANDLES);

  return <div className={handles.containerLayout}>{name}</div>;
};

ContainerLayout.schema = {
  title: 'Contenedor de sección',
  type: 'object',
  properties: {
    name: {
      title: 'Nombre de la propiedad',
      type: 'string',
    },
  },
};

export default ContainerLayout;
