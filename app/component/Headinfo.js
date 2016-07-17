import React from 'react';
class Headinfo extends React.Component {
      constructor(props) {
        super(props);
      }
      render(){
        return (
          <div>
          <div className="head_info" >
            <div className="mian_pic"></div>
            <div className="main_name">
              <div >{this.props.name}</div>
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

export default Headinfo;