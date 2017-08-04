import React, {Component} from 'react'

export default class PersonalCabinet extends Component {
    render() {
        console.log('PersonalCabinet:');
        console.log(this.props);

        return(
            <ul>
                <li>
                    <div>First Name: </div>
                    <label
                        id="first-name"
                        type="text">{this.props.currentUser.firstName}</label>
                </li>
                <li>
                    <div>Last Name: </div>
                    <label
                        id="last-name"
                        type="text">{this.props.currentUser.lastName}</label>
                </li>
                <li>
                    <div>Email: </div>
                    <label
                        id="email"
                        type="email">{this.props.currentUser.email}</label>
                </li>
                <li>
                    <div>Notices: </div>

                </li>
                <input type="submit" value="Test1" onClick={this.props.TestAction}/>
                <input type="submit" value="Test2" onClick={this.props.Register}/>

            </ul>
        )
    }
}