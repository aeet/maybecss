import { Component } from "solid-js";
import { SolidMarkdown } from "solid-markdown";
import "./index.scss"

export const BlockPage: Component<{}> = (props) => {
  const markdown = `
  - 块级元素 block-level element.
  - 常见块级元素div,li,table 等.
  - 块级元素和display 为 block 的元素”不是一个概念.
    - li元 素默认的 display 值是 list-item.
    - table元素默认的 display 值是 table.
    - 但是它们均是块级元素.
  - 特征 一个水平流上只能单独显示一个元素，多个块级元素则换行显示.
`;
  return <div>
    <div>
      <h1>markdown</h1>
      <SolidMarkdown children={markdown} />
    </div>
    <div>
      <h1>demos</h1>
      <hr />
      <div>
        <h2>clear</h2>
        <div class="box clear">
          <img src="https://picsum.photos/200/300" />
        </div>
        <div>123</div>
        <h2>not clear</h2>
        <div class="box">
          <img src="https://picsum.photos/200/300" />
        </div>
        <div>123</div>
      </div>
    </div>
    <hr />
  </div>;
}
