import React from 'react';
import Tab from "./tab";

class Tabs extends React.Component {

  constructor (props) {
    super(props);

    this.state = {openedTab: Object.keys(props.tabs)[0] };
  }


  render () {
    const tabs = this.props.tabs;
    return (
      <div className="tabs">
        {Object.keys(tabs).map((tabName) =>
          <Tab tabName={tabName} tabDescription={tabs[tabName]} selectedTab={this.state.openedTab} />
        )}

      </div>
    );
  }
}
export default Tabs;
