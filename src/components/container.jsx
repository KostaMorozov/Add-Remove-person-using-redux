import React, { Component } from 'react'
import { connect } from 'react-redux';
import AddPerson from './addPerson';
import Person from './person';
import * as actions from '../store/actions';

class Container extends Component {

    render() { 
        const {addPerson, deletePerson, persons} = this.props;
        
        return (
        <div>
            <AddPerson
            onAddPerson={addPerson}/>

            {persons.map(person=>(
                <Person 
                key={person.id} 
                name={person.name} 
                age={person.age} 
                onDelete={()=>deletePerson(person.id)}/>
            ))}

        </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        persons:state.persons
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        addPerson:(name,age)=>dispatch({type:actions.ADD_PERSON,payload:{name,age}}),
        deletePerson:(id)=>dispatch({type:actions.REMOVE_PERSON,payload:{id}})
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Container);