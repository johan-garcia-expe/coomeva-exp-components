import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

type ContainerLayoutProps = {
  active: boolean
  type: 'div' | 'section'
  classes: string
  children: React.ReactNode
}

const CSS_HANDLES = ['containerLayout']

const ContainerLayout = ({
  active = true,
  type = 'div',
  classes,
  children,
}: ContainerLayoutProps) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <>
      {active && type === 'section' && (
        <section className={`${handles.containerLayout} ${classes || ''}`}>
          {children}
        </section>
      )}
      {active && type === 'div' && (
        <div className={`${handles.containerLayout} ${classes || ''}`}>
          {children}
        </div>
      )}
    </>
  )
}

ContainerLayout.schema = {
  title: 'Contenedor de sección',
  type: 'object',
  properties: {
    active: {
      title: 'Activar o desactivar sección',
      type: 'boolean',
    },
  },
}

export default ContainerLayout
