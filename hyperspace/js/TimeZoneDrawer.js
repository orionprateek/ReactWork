import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import User from './newWork'
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

export default class TimeDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    if(this.state.open){
      this.setState({open: false});
    }
    else{
      this.setState({open: true});
    }
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="Online Users"
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <User name={this.props.name} country={this.props.country} tZone={this.props.tZone}/>
        </Drawer>
      </div>
    );
  }
}