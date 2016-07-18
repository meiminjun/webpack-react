export const SHOW_DATA = 'SHOW_DATA';
export const LIST_DATA = 'LIST_DATA';

export function add() {
  return {
    type:SHOW_DATA
  };
}

// 显示数据
export function showData() {
  return (dispatch,getState) => {
    const {name} = getState();
    console.log("--------------------"+name);
    if(name !== "") {
      dispatch(add());
    }
  };
}


// 添加数据
// export function addData() {
//   return {
//     type:'ADD_DATA'
//   };
// }