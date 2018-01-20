import React from 'react';

function Tab(props) {
  let body="";
  if (props.selectedTab === props.tabName) {
    body = props.tabDescription;
  }
  return (
    <div>
      <h3>{props.tabName}</h3>
      <h3>{body}</h3>
    </div>
  );
}

export default Tab;
