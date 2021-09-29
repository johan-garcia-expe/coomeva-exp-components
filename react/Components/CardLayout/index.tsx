import React from 'react'
import { Link } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'
import { index as RichText } from 'vtex.rich-text'

export type CardLayoutProps = {
  image: string
  secundaryImage: string
  text: string
  link: string
}

const CSS_HANDLES = [
  'cardLayout',
  'cardLayout__content',
  'cardLayout__image',
  'cardLayout__secundary_image',
  'cardLayout__text',
]

const CardLayout = ({ image, secundaryImage, text, link }: CardLayoutProps) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <article className={handles.cardLayout}>
      {link ? (
        <Link to={link} className={`${handles.cardLayout__content} db link`}>
          {image && (
            <img
              className={`${handles.cardLayout__image} db`}
              src={image}
              alt="Imagen principal de la tarjeta"
            />
          )}
          {secundaryImage && (
            <img
              className={`${handles.cardLayout__secundary_image} db`}
              src={secundaryImage}
              alt="Imagen segundaria de la tarjeta"
            />
          )}
          {text && <RichText text={text} />}
        </Link>
      ) : (
        <div className={handles.cardLayout__content}>
          {image && (
            <img
              className={`${handles.cardLayout__image} db`}
              src={image}
              alt="Imagen principal de la tarjeta"
            />
          )}
          {secundaryImage && (
            <img
              className={`${handles.cardLayout__secundary_image} db`}
              src={secundaryImage}
              alt="Imagen segundaria de la tarjeta"
            />
          )}
          {text && <RichText text={text} />}
        </div>
      )}
    </article>
  )
}

CardLayout.schema = {
  title: 'Card informativa',
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
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    link: {
      title: 'Link',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
  },
}

export default CardLayout
