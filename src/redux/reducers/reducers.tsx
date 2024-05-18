interface StoreType {
    authToken?: string;
}

const MainReducer = (state: StoreType, action: object) => {
    return {
        ...state,
        ...action,
    }
}

export default MainReducer;