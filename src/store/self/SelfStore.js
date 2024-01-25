const dataStore = {
    data : {
        path: '',
        count: 0,
    }
}
export const setData = (type, data) => {
    dataStore.data[type] = data;
}
export const getData = (type) => {
    return dataStore.data[type];
}