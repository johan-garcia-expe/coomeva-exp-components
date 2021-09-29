import React from 'react'
import { Link } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'

type ResponsiveImageProps = {
  mobileImage: string
  desktopImage: string
  breakpoint: string
  link: string
  external: boolean
  alt: string
}

const CSS_HANDLES = [
  'responsiveImageContainer',
  'responsiveImageLink',
  'responsiveImage',
]

const ResponsiveImage = ({
  mobileImage,
  desktopImage,
  breakpoint = '768px',
  link,
  external,
  alt = '',
}: ResponsiveImageProps) => {
  const handles = useCssHandles(CSS_HANDLES)

  return link ? (
    <div className={handles.responsiveImageContainer}>
      {external ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={`${handles.responsiveImageLink} db`}
        >
          <picture className="db">
            <source
              media={`(min-width: ${breakpoint})`}
              srcSet={desktopImage}
            />
            <img
              src={mobileImage}
              alt={alt}
              className={`${handles.responsiveImage} db w-100`}
            />
          </picture>
        </a>
      ) : (
        <Link to={link} className={`${handles.responsiveImageLink} db`}>
          <picture className="db">
            <source
              media={`(min-width: ${breakpoint})`}
              srcSet={desktopImage}
            />
            <img
              src={mobileImage}
              alt={alt}
              className={`${handles.responsiveImage} db w-100`}
            />
          </picture>
        </Link>
      )}
    </div>
  ) : (
    <div className={handles.responsiveImageContainer}>
      <picture className="db">
        <source media={`(min-width: ${breakpoint})`} srcSet={desktopImage} />
        <img
          src={mobileImage}
          alt={alt}
          className={`${handles.responsiveImage} db w-100`}
        />
      </picture>
    </div>
  )
}

ResponsiveImage.schema = {
  title: 'Imagen responsive',
  type: 'object',
  properties: {
    mobileImage: {
      title: 'Imagen para mobile',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    desktopImage: {
      title: 'Imagen para desktop',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    link: {
      title: 'Link para la imagen (Opcional)',
      type: 'string',
    },
    external: {
      title: 'Link por fuera de la tienda',
      type: 'boolean',
    },
    alt: {
      title: 'Titulo de la imagen',
      type: 'string',
    },
  },
}

export default ResponsiveImage
