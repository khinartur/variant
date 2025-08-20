declare module '*.svg' {
    import type * as React from 'react'

    const ReactComponent: React.FunctionComponent<React.ComponentProps<'svg'>>

    export default ReactComponent
}
