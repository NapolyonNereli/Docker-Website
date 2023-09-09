import React from 'react'
import {Player} from '@lottiefiles/react-lottie-player'

class Anims extends React.Component {
    constructor(props) {
      super(props);
      this.player = React.createRef();
    }
    render() {

      return (
        <Player
          ref={this.player} 
          autoplay={true}
          loop={true}
          src = {this.props.anim}
          style={{ height: '200px', width: '200px' }}
        ></Player>
      );
    }
  }
  
  export default Anims;