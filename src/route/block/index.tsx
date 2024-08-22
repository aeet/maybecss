import { Component } from "solid-js";
import "./index.scss"

import { SolidMarkdown } from 'solid-markdown'
import MindGraph from "../../component/MindGraph";

export const BlockPage: Component<{}> = (props) => {

  const markdonw = ``;
  const data: any[] = [
    { id: 'root', topic: 'root' },
    { id: 'sub1', topic: 'sub1', parent: { id: 'root' } },
    { id: 'sub2', topic: 'sub2', parent: { id: 'root' } },
  ]

  return (<div>
    <div>
      <h1>Docs</h1>
      <SolidMarkdown children={markdonw}></SolidMarkdown>
    </div>
    <MindGraph data={data}></MindGraph>
    <div>
      <BlockExample />
    </div>
  </div>)
}


const BlockExample: Component<{}> = (props) => {
  return <div>123</div>
}