import React from 'react'
import { SliderLayout } from 'vtex.slider-layout'
import { useCssHandles } from 'vtex.css-handles'

import CardLayout from '../CardLayout'
import type { CardLayoutProps } from '../CardLayout'

type HighlightContentProps = {
  items: CardLayoutProps[]
  sliderMode: boolean
  sliderProps: any
  classes: string
}

const CSS_HANDLES = ['highlightContent']

const HighlightContent = ({
  items,
  sliderMode,
  sliderProps,
  classes,
}: HighlightContentProps) => {
  const handles = useCssHandles(CSS_HANDLES)

  return items ? (
    <section className={`${handles.highlightContent} ${classes || ''}`}>
      {sliderMode ? (
        <SliderLayout {...sliderProps}>
          {items.map((item, index) => (
            <CardLayout
              image={item.image}
              secundaryImage={item.secundaryImage}
              text={item.text}
              link={item.link}
              key={`highlightContent-${index}`}
            />
          ))}
        </SliderLayout>
      ) : (
        items.map((item, index) => (
          <CardLayout
            image={item.image}
            secundaryImage={item.secundaryImage}
            text={item.text}
            link={item.link}
            key={`highlightContent-${index}`}
          />
        ))
      )}
    </section>
  ) : null
}

HighlightContent.schema = {
  title: 'Slider de contenido destacado',
  type: 'object',
  properties: {
    items: {
      title: 'Elementos destacados',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          image: {
            title: 'Imagen principal',
            type: 'string',
            widget: {
              'ui:widget': 'image-uploader',
            },
          },
          secundaryImage: {
            title: 'Imagen segundaria',
            type: 'string',
            widget: {
              'ui:widget': 'image-uploader',
            },
          },
          text: {
            title: 'Texto para la card',
            type: 'string',
          },
          link: {
            title: 'Link',
            type: 'string',
          },
        },
      },
    },
  },
}

export default HighlightContent
