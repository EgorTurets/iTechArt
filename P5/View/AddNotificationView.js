import React, {Component} from 'react'
import { Redirect } from 'react-router'

export default class AddNotificationForm extends Component {
    componentWillMount(){
        if(this.props.newNotification.proprietor === 0){
            this.props.setProprietor(this.props.currentUser.id)
        }
    }

    render() {
        console.log(this.props);

        return(
            <form className="form-inner-center">
                <ul className="input-form-list">
                    <li>
                        <div>Title: </div>
                        <input
                            id="title"
                            type="text"
                            value={this.props.newNotification.title}
                            onChange={this.props.TitleUpdate}/>
                    </li>
                    <li>
                        <div>Description: </div>
                        <textarea
                            id="description"
                            className="description-area"
                            value={this.props.newNotification.description}
                            onChange={this.props.DescriptionUpdate}>
                        </textarea>
                    </li>
                    <li>
                        <div>Metric area: </div>
                        <input
                            id="metric"
                            type="number"
                            value={this.props.newNotification.metric}
                            onChange={this.props.MetricUpdate}/>
                    </li>
                    <li>
                        <div>Address: </div>
                        <input
                            id="address"
                            type="text"
                            value={this.props.newNotification.address}
                            onChange={this.props.AddressUpdate}/>
                    </li>
                    <li>
                        <div>Price: </div>
                        <input
                            id="price"
                            type="number"
                            value={this.props.newNotification.price}
                            onChange={this.props.PriceUpdate}/>
                    </li>
                </ul>
                <p
                    id="register-message"
                    className="message-paragraph">
                    {this.props.newNotification.message}
                </p>
                <div className="button" onClick={this.props.AddNotice}>Register</div>
            </form>
        )
    }
}