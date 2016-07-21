export const SHOW_DATA = 'SHOW_DATA';
export const LIST_DATA = 'LIST_DATA';

export function add() {
  return {
    type:SHOW_DATA,
    text:"test"
  };
}

// 显示数据
export function showData() {
  return {
    type:SHOW_DATA
  };
}
