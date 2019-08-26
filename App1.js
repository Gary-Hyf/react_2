import React from 'react';
import './main.css';
import Welcome_form from './Welcome_form';
import { directive, arrayExpression } from '@babel/types';
import Counter from './text_C';
import Welcome from './text_t';

export default class App extends React.Component {
    constructor(props){
    super(props);
    this.state = { student_name:"",
        count:0,
        welcomeList:[
        {
            name:"nick",
            isTeacher:true,
        },
        {
            name:"tim",
            isTeacher:false,
        },
        {
            name:"test",
            isTeacher:false,
        }

    ]};
    }
add =()=>{
    this.setState((pre,props)=>{
       return{count:pre.count+1,};
    });
};

minus=()=>{
    this.setState((pre,props)=>{
        return{count:pre.count-1,};
    });
};

onInputChange=(e)=>{
    this.setState({student_name:e.target.value})
}

submit=(e)=>{
    const obj_name={name:this.state.student_name}
    this.setState(()=>{
        return{
            welcomeList:[...this.state.welcomeList,obj_name],
        }
    }) 
}

render(){
    return(
        <div>
        {this.state.welcomeList.map((event,index)=>
            <Welcome 
            key={index}
            name={event.name} 
            isTeacher={event.isTeacher} 
            count={this.state.count} />   
        )}
        <Counter
        count={this.state.count}
        add={this.add}
        minus={this.minus}/>
        <Welcome_form student_name={this.state.student_name} change={this.onInputChange} submit={this.submit}/>
        </div>
    )
}
}
