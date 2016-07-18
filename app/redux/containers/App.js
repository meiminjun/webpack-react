import {
  bindActionCreators
} from 'redux';
import {
  connect
} from 'react-redux';
import ListDemo from '../components/ListDemo';
import * as ListDemoActions from '../actions/listData';
// import {showData} from '../actions/listData';
//将state.counter绑定到props的counter
function mapStateToProps(state) {
  return {
    name: state.name,
    data:state.data
  };
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ListDemoActions, dispatch);
}

// function mapDispatchToProps(dispatch) {
//   return {
//     showData:() => dispatch(showData())
//   };
// }

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(ListDemo);