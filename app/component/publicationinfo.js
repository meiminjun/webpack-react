import React from 'react';

class Publicationinfo extends React.Component {
      constructor(props) {
        super(props);
      }
      render(){
        return(
            <div>
              <div className="publication_info">{this.props.text}
              </div>
              <div className="showPic"></div>
            </div>
        );
      }
    }

export default Publicationinfo;