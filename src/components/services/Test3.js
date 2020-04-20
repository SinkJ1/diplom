

let a = 0;

function reducer(action) {
    if (action) {
        a = a + action
    }
    return a;
}
export default reducer;