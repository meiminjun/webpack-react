import React, {PropTypes, Component} from 'react';

class Headinfo extends Component {
      constructor(props) {
        super(props);
      }
      render(){
        const {name} = this.props;
        return (
          <div>
          <div className="head_info" >
            <div className="mian_pic"></div>
            <div className="main_name">
              <div >{name}</div>
              <div className="imperial_crown">
                <span className="family_purple">明星麻豆</span>
              </div>
            </div>
            <div className="main_btn">找ta拍</div>
          </div>
          </div>
          );
     }
}
Headinfo.propTypes = {
  name:PropTypes.string.isRequired
};
export default Headinfo;