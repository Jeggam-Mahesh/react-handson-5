import React from 'react'
class App extends React.PureComponent;
this.render(){
    const {points=0}=this.props;
    return (
        <div>
        
        <span>{points}</span>
        </div>
    )
}