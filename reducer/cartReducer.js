export const reducer = (state, action) => {
  if (action.type === "ADD") {
    return [...state, action.payload];
  }

  if (action.type === "REMOVE") {
    let stateCopy = [...state];
    stateCopy.splice(action.payload.index, 1);
    return [...stateCopy];
  }

  if (action.type === "CLEAR CART") {
    return [];
  }
  return;
};
