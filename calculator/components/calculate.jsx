import React, { Component } from 'react';
import Base from './base';
import { connect } from 'react-redux/es/exports';
import DigsButton from './calculator/digsButton';
import ACTIONS from '../redux/actions';
import OpertatiionButton from './calculator/opertationButton';
import { hover } from '@testing-library/user-event/dist/hover';


class Calculate extends Component {
    state = {
        formater:Intl.NumberFormat('en-us')
    }; 

    format =(number)=>{
        const [integer,decimal]=number.split('.');
        if(decimal ===undefined)
            return this.state.formater.format(integer);
        return `${this.state.formater.format(integer)}.${decimal}`    
    }

    render() { 
        return (
            <Base>
            <div className="calculate">
                <div className="output">
                    <div className="last">
                        {this.format(this.props.last)}{this.props.operation}
                    </div>
                    <div className="curcent">
                        {this.format(this.props.current)}
                    </div>
                </div>

                <button onClick={this.props.clear} className='span-ac-2'>AC</button>
                <button onClick={this.props.delete_dight}>Del</button>
                <OpertatiionButton operation={'÷'}/>

                <DigsButton dight={"7"}/>
                <DigsButton dight={"8"}/>
                <DigsButton dight={"9"}/>
                <OpertatiionButton operation={'×'}/>

                <DigsButton dight={"4"}/>
                <DigsButton dight={"5"}/>
                <DigsButton dight={"6"}/>
                <OpertatiionButton operation={'-'}/>

                <DigsButton dight={"1"}/>
                <DigsButton dight={"2"}/>
                <DigsButton dight={"3"}/>
                <OpertatiionButton operation={'+'}/>

                <DigsButton dight={"0"}/>
                <DigsButton dight={"."}/>
                <button onClick={this.props.evalue} className='span-2'>=</button>

            </div>
            </Base>
        );
    }
}

const mapToProps =(state,props)=>{

    return {
        current:state.current,
        last : state.last,
        operation : state.operation,
    }
};

const mapDishdToProps = {
    delete_dight: ()=>{
        return {
            type:ACTIONS.DELETE,
        }
    },
    clear:()=>{
        return {
            type:ACTIONS.CLEAR,
        }
    },
    evalue:()=>{
        return{
            type:ACTIONS.RESULT,
        }
    }
}


export default connect(mapToProps,mapDishdToProps) (Calculate);