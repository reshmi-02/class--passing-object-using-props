import React,{Component} from 'react'
import Classchild from './classchild.js'
class Classparent extends Component{
    render(){
        const a="Reshmi"
        const object={
            age:23
        }
        return(
            <div>
                <Classchild name={a} obj={object}/>
            </div>
        )
    }
}

export default Classparent