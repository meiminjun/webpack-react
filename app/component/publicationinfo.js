import React, {Component,PropTypes} from 'react';

class Publicationinfo extends Component {
      constructor(props) {
        super(props);
      }
      render(){
        const {text} = this.props;
        return(
            <div>
              <div className="publication_info">{text}
              </div>
              <div className="showPic"></div>
            </div>
        );
     }
}
Publicationinfo.propTypes = {
  text:PropTypes.string.isRequired
};
export default Publicationinfo;