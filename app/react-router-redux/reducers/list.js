import {
  LIST_DATA
} from '../actions/listData'

const listData = [ {
  name: '张三',
  text: '换新设计，内外兼修才够美~~穿出独属于你自己的腔调'
}, {
  name: '李梅',
  text: '内衣，情趣，呵呵呵呵呵'
}, {
  name: '王月月',
  text: '内在美才是真的美'
} ]

export default function data(state = listData, action) {
  switch (action.type) {
    case LIST_DATA:
      return listData
    default:
      return state
  }
}
