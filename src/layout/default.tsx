import { Component, JSX } from 'solid-js'

export interface LayoutDefaultProps {
    children?: JSX.Element
}

export const LayoutDefault: Component<LayoutDefaultProps> = (props: LayoutDefaultProps) => {
    return <div>
        <div>
            <h1>Layout Default</h1>
        </div>
        {props.children}
    </div>
}