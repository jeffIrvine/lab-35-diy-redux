export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createCOMMENT = (comment) => ({
  type: CREATE_COMMENT,
  payload: comment
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteCOMMENT = (title) => ({
  type: DELETE_COMMENT,
  payload: title
});
