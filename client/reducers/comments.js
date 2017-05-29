const postComments = (state = [], action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case "REMOVE_COMMENT":
      return [...state.slice(0, action.i), ...state.slice(action.i + 1)];
    default:
      return state;
  }
};
const comments = (state = [], action) => {
  return {
    ...state,
    [action.postId]: postComments(state[action.postId], action)
  };
};
export default comments;
