import React, {Component} from 'react'
import { findDOMNode } from 'react-dom'
import { Redirect } from 'react-router'

export default class AddNotificationForm extends Component {
    componentWillMount(){
        if(this.props.newNotification.proprietor === 0){
            this.props.setProprietor(this.props.currentUser.id)
        }
    }

    componentDidMount() {
        debugger;
        let elem = findDOMNode(this.refs.radioNotRent);
        elem.checked = 'checked';
    }

    render() {

        return(
            <form className="form-inner-center" onSubmit={this.props.AddNotice}>
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
                <div>
                    <input type="radio" name='isForRent'
                           id="forRent"
                           value={true}
                           onClick={this.props.ForRentChange}/>
                    For Rent
                </div>
                <div>
                    <input type="radio" name='isForRent'
                           id="notForRent"
                           value={false}
                           onClick={this.props.ForRentChange}
                           ref="radioNotRent"/>
                    Housing needs
                </div>
                <p
                    id="register-message"
                    className="message-paragraph">
                    {this.props.newNotification.message}
                </p>
                <input type="submit" className="button" value="Add"/>
            </form>
        )
    }
}