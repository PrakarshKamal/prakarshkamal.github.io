export const themeReducer = (state, action) => {
  // primary colors
  if (action.type === "color-1") {
    return { ...state, primary: "color-1" };
  }
  if (action.type === "color-2") {
    return { ...state, primary: "color-2" };
  }
  if (action.type === "color-3") {
    return { ...state, primary: "color-3" };
  }
  if (action.type === "color-4") {
    return { ...state, primary: "color-4" };
  }
  if (action.type === "color-5") {
    return { ...state, primary: "color-5" };
  }
  if (action.type === "color-6") {
    return { ...state, primary: "color-6" };
  }

  // background colors
  if (action.type === "bg-color-1") {
    return { ...state, background: "bg-color-1" };
  }
  if (action.type === "bg-color-2") {
    return { ...state, background: "bg-color-2" };
  }
};

export default themeReducer;
