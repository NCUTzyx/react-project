import ACTIONS from "./actions";


const evalue = (state)=>{
    let{last,current,operation} =state;
    let lasts = parseFloat(last);
    let currents = parseFloat(current);

    let res = 0;
    switch(operation){
        case '+':
            res = lasts + currents;
            break
        case '-':
            res = lasts - currents;
            break
        case '×':
            res = lasts * currents;
            break
        case '÷':
            res = lasts / currents;
            break
    }
    return res.toString();
}

const reducer = (state ={
    current :"",
    last :"",
    operation:"",
    writeCover:false,
},action) =>{
    switch(action.type){

        case ACTIONS.ADD:

            if(state.writeCover){
                return{
                    ...state,
                    current:action.dight,
                    writeCover:false
                }
            }

            if(state.current=== '0' && action.dight ==='0') 
                return state;
            if(state.current=== '0' && action.dight !=='.') 
                return {
                    ...state,
                    current:action.dight,
                }
            if(state.current.includes('.') && action.dight ==='.')
                return state
            if(action.dight==='.'&& state.current==="")
                return {
                    ...state,
                    current:"0."
                };
            return {
                ...state,
                current:state.current+action.dight,
            }
        case ACTIONS.DELETE:
            if(state.writeCover){
                return{
                    ...state,
                    current:"",
                    writeCover:false
                }
            }
            if(state.current === "")
                return state;
            return{
                ...state,
                current:state.current.slice(0,-1),
            }
        case ACTIONS.OPERATOR:
            if(state.last ==="" && state.current==="")
                return state;
            if(state.last ==="" ){
                return{
                    ...state,
                    last:state.current,
                    operation:action.operation,
                    current:"",
                }
            }
            
            if(state.current==="")
                return{
                    ...state,
                    operation:action.operation,
            }
            return{
                ...state,
                last:evalue(state),
                operation:action.operation,
                current:"",
            }

        case ACTIONS.CLEAR:
            return{
                ...state,
                current:"",
                last:"",
                operation:"",
            }
        case ACTIONS.RESULT:
            if(state.current==="" ||state.last===""||state.operation==="")
                return state;
            return{
                ...state,
                current :evalue(state),
                last:"",
                operation:"",
                writeCover:true,
            }    
        default:
            return state;
    }
}
export default reducer;