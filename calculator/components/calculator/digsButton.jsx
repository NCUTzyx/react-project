import React, { Component } from 'react';
import ACTIONS from '../../redux/actions';
import { connect } from 'react-redux/es/exports';

class DigButton extends Component {
    state = {  } 
    render() { 
        return (
            <button 
                onClick={()=>this.props.add_dight(this.props.dight)}
            >{this.props.dight}
            </button>
        );
    }
}

const mapToProps ={
    add_dight:dight =>{
        return {
            type:ACTIONS.ADD,
            dight:dight,
        }
    }
}
 
export default connect(null,mapToProps)(DigButton);