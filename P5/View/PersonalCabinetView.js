import React, {Component} from 'react'
import NotificationList from "./NotificationListView";

export default class PersonalCabinet extends Component {
    render() {
        console.log('PersonalCabinet:');
        console.log(this.props);

        let sliceFrom = (this.props.currentUser.currentPage - 1) * 5;
        let sliceTo = this.props.currentUser.currentPage * 5;
        let noticesPart = this.props.currentUser.notifications.slice(sliceFrom, sliceTo);

        return(
            <div>
                <ul className="user-info-list">
                    <li>
                        <span>First Name: </span>
                        <span id="first-name"
                            className="user-info-red">{this.props.currentUser.firstName}</span>
                    </li>
                    <li>
                        <span>Last Name: </span>
                        <label id="last-name"
                           className="user-info-red">{this.props.currentUser.lastName}</label>
                    </li>
                    <li>
                        <span>Email: </span>
                        <label id="email"
                           className="user-info-red">{this.props.currentUser.email}</label>
                    </li>
                    <li>
                        <div>Notifications: </div>
                        <NotificationList data={noticesPart} />

                        <div>Place for pages</div>
                    </li>
                </ul>
                <div className="button"
                     onClick={this.props.NONE}>
                    Add notification
                </div>
            </div>
        )
    }
}