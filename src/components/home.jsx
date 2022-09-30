import React, { Fragment } from 'react';
import imageHome from './image/imagHome';

class Home extends React.Component {
       state = { email:"" } 
       
       render() { 
              return (<Fragment>
                     <h1>Home</h1>
                     <div>
                     <img src={imageHome} className="img-fluid" alt="..."/>
                     </div>
              </Fragment>);
       }
}
 
export default Home;