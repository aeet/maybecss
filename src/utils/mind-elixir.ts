import { NodeObj } from "mind-elixir";

export function flattenTree(node: NodeObj, parent?: NodeObj): NodeObj[] {
    const { children, ...rest } = node;

    const flatNode: NodeObj = { ...rest, parent };
    let flatNodes: NodeObj[] = [flatNode];

    if (children) {
        children.forEach((child) => {
            flatNodes = flatNodes.concat(flattenTree(child, flatNode));
        });
    }

    return flatNodes;
}

export function buildTree(flatNodes: NodeObj[]): NodeObj | undefined {
    const nodeMap = new Map<string, NodeObj>();

    flatNodes.forEach(node => {
        node.children = [];
        nodeMap.set(node.id, node);
    });

    let rootNode: NodeObj | undefined = undefined;

    flatNodes.forEach(node => {
        if (node.parent) {
            const parentNode = nodeMap.get(node.parent.id);
            if (parentNode) {
                parentNode.children?.push(node);
            }
        } else {
            rootNode = node;
        }
    });

    return rootNode;
}
