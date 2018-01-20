import React from 'react';
import Clock from "./clock";
import Tabs from "./tabs";

class Root extends React.Component {

  render () {
    let tabs = {"one": "stuff" , "two": "moar stuff",
      "three": "even moar stuff"};
    return (<div>
      <Clock />
      <Tabs tabs={tabs}/>
    </div>);
  }
}


export default Root;
