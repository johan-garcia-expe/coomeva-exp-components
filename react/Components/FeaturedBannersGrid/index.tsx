import React from 'react'
import { useDevice } from 'vtex.device-detector'
import { useCssHandles } from 'vtex.css-handles'

import './styles.css'

interface Props {
  featuredImg: Img
  img2: Img
  img3: Img
}
type Img = {
  src: string
  mobileSrc: string
  link: string
  externalPage: boolean
}

const CSS_CONTADOR = [
  'featured_grid__container',
  'featured_grid__image_wrapper',
  'featured_grid__image',
  'featured_grid__featured_image',
]

const FeaturedBannersGrid = ({ featuredImg, img2, img3 }: Props) => {
  const handles = useCssHandles(CSS_CONTADOR)
  const { isMobile } = useDevice()

  // console.log("Desde grid ===>", isMobile)
  return (
    <div className={handles.featured_grid__container}>
      <a
        href={featuredImg?.link}
        target={featuredImg.externalPage ? '_blank' : '_self'}
        className={`${handles.featured_grid__image_wrapper} ${handles.featured_grid__featured_image}`}
        rel="noreferrer"
      >
        <img
          className={`${handles.featured_grid__image}`}
          src={isMobile ? featuredImg.mobileSrc : featuredImg.src}
          alt="Banner destacado"
        />
      </a>
      <a
        href={img2?.link}
        target={img2.externalPage ? '_blank' : '_self'}
        className={handles.featured_grid__image_wrapper}
        rel="noreferrer"
      >
        <img
          className={handles.featured_grid__image}
          src={isMobile ? img2.mobileSrc : img2.src}
          alt="Banner destacado"
        />
      </a>
      <a
        href={img3?.link}
        target={img3.externalPage ? '_blank' : '_self'}
        className={handles.featured_grid__image_wrapper}
        rel="noreferrer"
      >
        <img
          className={handles.featured_grid__image}
          src={isMobile ? img3.mobileSrc : img3.src}
          alt="Banner destacado"
        />
      </a>
    </div>
  )
}

FeaturedBannersGrid.schema = {
  title: 'Grid banners destacados',
  type: 'object',
  properties: {
    featuredImg: {
      title: 'Banner destacado',
      type: 'object',
      properties: {
        src: {
          title: 'Url Banner destacado',
          description: 'Url Banner destacado',
          type: 'string',
          widget: {
            'ui:widget': 'image-uploader',
          },
        },
        mobileSrc: {
          title: 'Url Banner destacado mobile',
          description: 'Url Banner destacado',
          type: 'string',
          widget: {
            'ui:widget': 'image-uploader',
          },
        },
        link: {
          title: 'link del banner',
          type: 'string',
          default: '',
        },
        externalPage: {
          title: 'link externo ?',
          type: 'boolean',
          default: false,
        },
      },
    },
    img2: {
      title: 'Banner',
      type: 'object',
      properties: {
        src: {
          title: 'Url Banner',
          description: 'Url Banner destacado',
          type: 'string',
          widget: {
            'ui:widget': 'image-uploader',
          },
        },
        mobileSrc: {
          title: 'Url Banner mobile',
          description: 'Url Banner destacado',
          type: 'string',
          widget: {
            'ui:widget': 'image-uploader',
          },
        },
        link: {
          title: 'link del banner',
          type: 'string',
          default: '',
        },
        externalPage: {
          title: 'link externo ?',
          type: 'boolean',
          default: false,
        },
      },
    },
    img3: {
      title: 'Banner ',
      type: 'object',
      properties: {
        src: {
          title: 'Url Banner',
          description: 'Url Banner destacado',
          type: 'string',
          widget: {
            'ui:widget': 'image-uploader',
          },
        },
        mobileSrc: {
          title: 'Url Banner mobile',
          description: 'Url Banner destacado',
          type: 'string',
          widget: {
            'ui:widget': 'image-uploader',
          },
        },
        link: {
          title: 'link del banner',
          type: 'string',
          default: '',
        },
        externalPage: {
          title: 'link externo ?',
          type: 'boolean',
          default: false,
        },
      },
    },
  },
}

export default FeaturedBannersGrid
