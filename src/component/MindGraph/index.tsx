import { Component, createEffect } from "solid-js";
import MindElixir, { NodeObj } from 'mind-elixir'
import { Arrow } from "mind-elixir/dist/types/arrow";
import { buildTree } from "../../utils/mind-elixir";

export interface MindGraphProps {
    data: NodeObj[]
    arrows?: Arrow[]
}

const MindGraph: Component<MindGraphProps> = (props) => {

    let graph: HTMLElement

    createEffect(() => {
        let mind = new MindElixir({
            el: graph,
            draggable: true,
            contextMenu: true,
            toolBar: true,
            nodeMenu: true,
            keypress: true
        })

        const data: NodeObj[] = props.data || []
        const arrows: Arrow[] = props.arrows || []

        mind.init({
            nodeData: buildTree(data)!,
            arrows: arrows
        })
    })


    return (<div>
        <h1>Graph</h1>
        <div class="graph-box">
            <div class="graph" ref={(el: HTMLElement) => { graph = el }}></div>
        </div>
    </div>)
}

export default MindGraph