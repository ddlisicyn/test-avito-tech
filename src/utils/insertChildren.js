export function insertChildren(parents, newChildren) {
    for (let i = 0; i < parents.length; i++) {
        if (parents[i].id === newChildren[0].parent) {
            parents[i].children = newChildren;
            break;
        }
        if (parents[i].children) {
            insertChildren(parents[i].children, newChildren)
        }
    }
}