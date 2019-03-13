export const CHANGE_LIST = (state, addInfo) => {
    state._examList = [addInfo, ...state._examList]
};
