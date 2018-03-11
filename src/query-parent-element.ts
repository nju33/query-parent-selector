const getElement = (element: Element | string): Element | undefined => {
  if (typeof element === 'string') {
    const result = document.querySelector(element);
    if (result === null) {
      return;
    }

    return result;
  }

  return element;
}

export default (child: HTMLElement | string, parent: HTMLElement | string) => {
  const gotChild = getElement(child);
  if (gotChild === undefined) {
    return;
  }

  const gotParent = getElement(parent);
  if (gotParent === undefined) {
    return;
  }

  let current = gotChild.parentNode as HTMLElement;
  while (current !== null && current.tagName !== 'HTML') {
    const parentNode = current.parentElement;
    if (parentNode === null) {
      return current;
    }

    if (parentNode.isEqualNode(gotParent)) {
      current = parentNode;
      break;
    }

    current = current.parentElement as HTMLElement;
  }

  return current || undefined;
}
