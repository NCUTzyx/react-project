import React, { Component } from 'react';
import { connect } from 'react-redux/es/exports';
import ACTIONS from '../../redux/actions';

 
class OpertatiionButton extends Component {
    state = {  } 
    render() { 
        return (
            <button
            onClick={()=>{
                this.props.ch_opertaion(this.props.operation)
            }}
            >
                {this.props.operation}
            </button>
        );
    }
}

const mapDishToProps  ={
    ch_opertaion: operation =>{
        return {
            type:ACTIONS.OPERATOR,
            operation:operation,
        }
    }
}

export default connect(null,mapDishToProps)(OpertatiionButton);