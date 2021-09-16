import React,{Component} from 'react'
import * as consts from '../consts/consts'

class AddPerson extends Component {
    state={
        name:'',
        age:''
    }
    handleName=event=>{
        this.setState({name:event.currentTarget.value})
    }
    handleAge=event=>{
        this.setState({age:event.currentTarget.value})
    }
    render() { 
        const {name, age} = this.state;
        const {onAddPerson} = this.props;
        return(
        <div className='addPerson'>
            <div>Name : 
                <input 
                type='text'
                value={name} 
                placeholder={consts.NAME_PLACE_HOLDER}
                onChange={this.handleName}/>
            </div>
            <div>Age : 
                <input 
                type='number' 
                value={age} 
                placeholder={consts.AGE_PLACE_HOLDER} 
                onChange={this.handleAge}/>
            </div>
            <button className='btn btn-primary' disabled={!(name && age)} onClick={()=>onAddPerson(name,age)}>{consts.ADD_PERSON}</button>
        </div>)
    }
}
 
export default AddPerson;