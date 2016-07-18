import React from 'react';

import Headinfo from './Headinfo.js';
import Labelinfo from './Labelinfo.js';
import Publicationinfo from './Publicationinfo.js';
import Bottominfo from './Bottominfo.js';
import Bottomabsolution from './Bottomabsolution.js';

class ListDemo extends React.Component {

      render(){
            const {data,showData} = this.props;
            const commentNodes = data.map(function (comment,index) {
                  return (
                      <div key={'common-'+index} >
                        <Headinfo name={comment.name} showData={showData}  />
                        <Labelinfo />
                        <Publicationinfo text={comment.text} />
                        <Bottominfo />
                        <Bottomabsolution />
                      </div>
                  );
          });
        return(
          <div>
              {commentNodes}
          </div>
        );
      }
}

ListDemo.propTypes = {
  data: React.PropTypes.array.isRequired,
  showData:React.PropTypes.func.isRequired
};

export default ListDemo;