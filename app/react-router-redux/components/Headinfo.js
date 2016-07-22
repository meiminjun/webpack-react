import React, {
  PropTypes,
  Component
} from 'react'

class Headinfo extends Component {
  render() {
    const {
      name,
      showData
    } = this.props
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
            <div onClick={showData}  className="main_btn" >找ta拍</div>
          </div>
          </div>)
  }
}
Headinfo.propTypes = {
  name: PropTypes.string.isRequired,
  showData: PropTypes.func.isRequired
}
export default Headinfo
