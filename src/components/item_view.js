import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSingleItem, deleteItem, toggleComplete} from '../actions';
import {Link, Redirect} from 'react-router-dom';

class ItemView extends Component{
    constructor(props){
        super(props);

        this.state = {
            redirect: false
        }
    }
    componentDidMount(){
        console.log('Mounting', this.props);
        this.props.getSingleItem(this.props.match.params.id);
    }
    deleteClicked(){
        this.setState({
            redirect: true
        }, () => {
            this.props.deleteItem(this.props.match.params.id);
        });
    }
    completeClicked(){
        this.props.toggleComplete(this.props.match.params.id);
        this.setState({
            redirect: true
        });
    }

    render(){
        const {item} = this.props;
        console.log(item);

        if (item.completed){
            var date = new Date(item.completed*1);
        }

        return (
            <div>
                <Link className='btn yellow black-text' to='/'>View full list</Link>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
                <p>Complete: {'' + item.complete}</p>
                {item.complete && <p>Completed at: {'' + date}</p>}
                <button className='btn red lighten-1' onClick={this.deleteClicked.bind(this)} >Delete item</button>
                <button className='btn green lighten-1' onClick={this.completeClicked.bind(this)} >Complete item</button>
                {this.state.redirect && <Redirect path to='/'></Redirect>}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('Map state', state);
    return {
        item: state.list.singleItem
    }
}

export default connect(mapStateToProps, {getSingleItem, deleteItem, toggleComplete})(ItemView);