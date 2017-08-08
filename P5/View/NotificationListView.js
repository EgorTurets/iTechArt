import React, {Component} from 'react'
import { render } from 'react-dom'

export default class NotificationInfo extends Component {
    render(){

        return (
            <div>
                <div>
                    <div className="notification-box-left-row">
                        <lable>Title: </lable>
                    </div>
                    <div className="notification-box-right-row">
                        <h3>{this.props.data.title}</h3>
                    </div>
                </div>

                <div>
                    <div className="notification-box-left-row">
                        <label>Description: </label>
                    </div>
                    <div className="notification-box-right-row">
                        <h4>{this.props.data.description}</h4>
                    </div>
                </div>

                <div>
                    <div className="notification-box-left-row">
                        <label>Metric area: </label>
                    </div>
                    <div className="notification-box-right-row">
                        <h4>{this.props.data.metric}</h4>
                    </div>
                </div>

                <div>
                    <div className="notification-box-left-row">
                        <label>Address: </label>
                    </div>
                    <div className="notification-box-right-row">
                        <h4>{this.props.data.address}</h4>
                    </div>
                </div>

                <div>
                    <div className="notification-box-left-row">
                        <label>Price: </label>
                    </div>
                    <div className="notification-box-right-row">
                        <h4>{this.props.data.price}</h4>
                    </div>
                </div>
            </div>
        )
    }
}