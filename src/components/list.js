import React, {Component} from 'react';
import {getList} from '../actions';
import {connect} from 'react-redux';

class List extends Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){
        this.props.getList();
    }
    render(){
        
        const itemElements = this.props.list.map((item, index)=>{
            return <li className='collection-item' key={index}>{item.title}</li>
        });

        return (
            <ul className='collection'>
                {itemElements}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return {
        list: state.list.items
    }
}

export default connect(mapStateToProps, {getList: getList})(List);