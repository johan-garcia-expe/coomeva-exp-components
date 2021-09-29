import React, { useEffect, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useProduct } from 'vtex.product-context'

type PUM = {
  classes: string
  specificationName: string
}

type Content = {
  value: number
  unit: string
}

const CSS_HANDLES = ['PUM']

const PUM = ({ classes, specificationName }: PUM) => {
  const handles = useCssHandles(CSS_HANDLES)
  const productContextValue = useProduct()
  const [content, setContent] = useState<Content>()

  useEffect(() => {
    const specifications =
      productContextValue?.product?.specificationGroups.find(
        (e) => e.name === 'Especificaciones'
      )

    const contenido = specifications?.specifications.find(
      (e) => e.name === specificationName
    )

    const valueUnit: string[] | undefined = contenido?.values[0].split(' ')
    const sellingPrice =
      productContextValue?.selectedItem?.sellers[0]?.commertialOffer?.Price

    if (valueUnit && sellingPrice) {
      const value = parseInt(valueUnit[0], 10)
      const unit = valueUnit[1]
      const pum = Math.floor((sellingPrice / value) * 100) / 100

      setContent({ value: pum, unit })
    }
  }, [productContextValue])

  return (
    <div>
      {content && (
        <p className={`${handles.PUM} ${classes || ''}`}>
          {`$${content?.value} cada ${content?.unit}`}
        </p>
      )}
    </div>
  )
}

PUM.schema = {
  title: 'Precio por Unidad de Medida',
  type: 'object',
  properties: {
    specificationName: {
      title: 'Nombre de la especificación',
      type: 'string',
    },
  },
}

export default PUM
