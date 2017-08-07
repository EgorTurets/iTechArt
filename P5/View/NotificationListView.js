import React, {Component} from 'react'
import { render } from 'react-dom'

export default class NotificationList extends Component {
    render(){

        return (
            <ul>
                <li>
                    <div>
                        <lable>Title: </lable>
                        <h3>{this.props.data.title}</h3>
                        <label>Description: </label>
                        <h4>{this.props.data.description}</h4>
                        <label>Metric area: </label>
                        <h4>{this.props.data.metric}</h4>
                        <label>Address: </label>
                        <h4>{this.props.data.address}</h4>
                        <label>Price: </label>
                        <h4>{this.props.data.price}</h4>
                        <div className="button"
                             onClick={this.props.NONE}>
                            Delete notification
                        </div>
                    </div>
                </li>
            </ul>
        )
    }
}