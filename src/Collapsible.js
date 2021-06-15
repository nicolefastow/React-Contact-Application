import React from "react";

class Collapsible extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    /*function to open and close dropdown for email info*/
    togglePanel(e){
        this.setState({open: !this.state.open});
    }

    render() {
      return (
      <div>
        <div onClick={(e)=>this.togglePanel(e)}>
            {/*toggles between up and down chevron button*/}
            <i className={this.state.open ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
        </div>
        {/*toggles showing email address*/}
        {this.state.open ? (
            <div className='content'>
                {this.props.children}
            </div>
            ) : null}
      </div>
      );
    }
}

  export default Collapsible;