import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSingleItem} from '../actions';
import {Link} from 'react-router-dom';

class ItemView extends Component{
    constructor(props){
        super(props);


    }
    componentDidMount(){
        this.props.getSingleItem(this.props.match.params.id)
    }

    render(){
        const {item} = this.props;
        return (
            <div>
                <Link className='btn yellow black-text' to='/'>View full list</Link>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        item: state.list.singleItem
    }
}

export default connect(mapStateToProps, {getSingleItem: getSingleItem})(ItemView);