import { Component, JSX } from 'solid-js'
import { Nav } from '../route/index'

export interface LayoutDefaultProps {
    children?: JSX.Element
}

export const LayoutDefault: Component<LayoutDefaultProps> = (props: LayoutDefaultProps) => {
    return <div>
        <div>
            <h1>Layout Default</h1>
            <div>
                <Nav></Nav>
            </div>
        </div>
        {props.children}
    </div>
}