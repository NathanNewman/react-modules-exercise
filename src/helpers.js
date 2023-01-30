function choice(items) {
  const random = Math.floor(Math.random() * items.length);
  return items[random];
}

function remove(items, item) {
    items = items.filter(i => i !== item);
    return [items, item];
}

export {choice, remove};