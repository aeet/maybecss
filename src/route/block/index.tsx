import { Component, createEffect } from "solid-js";
import "./index.scss"
import MindElixir, { NodeObj } from 'mind-elixir'

import { SolidMarkdown } from 'solid-markdown'
import { buildTree } from "../../utils/mind-elixir";
import { Arrow } from "mind-elixir/dist/types/arrow";

export const BlockPage: Component<{}> = (props) => {

  const markdonw = ``;
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


    const data: any[] = [
      { id: 'root', topic: 'Root' },
      { id: 'sub1', topic: 'sub1', parent: { id: 'root' } },
      { id: 'sub2', topic: 'sub2', parent: { id: 'root' } },
    ]

    const arrows: Arrow[] = []

    mind.init({
      nodeData: buildTree(data)!,
      arrows: arrows
    })
  })

  return (<div>
    <div>
      <h1>Docs</h1>
      <SolidMarkdown children={markdonw}></SolidMarkdown>
    </div>
    <div>
      <h1>Graph</h1>
      <div class="graph-box">
        <div class="graph" ref={(el: HTMLElement) => { graph = el }}></div>
      </div>
    </div>
    <div>
      <h1>Example</h1>
    </div>
  </div>)
}
