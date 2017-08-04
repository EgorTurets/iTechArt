import React, {Component} from 'react'

export default class PersonalCabinet extends Component {
    render() {
        console.log(this.props);

        return(
            <ul>
                <li>
                    <div>First Name: </div>
                    <label
                        id="first-name"
                        type="text"
                        value={this.props.newUser.firstName}
                        onChange={this.props.FirstNameUpdate}/>
                </li>
                <li>
                    <div>Last Name: </div>
                    <label
                        id="last-name"
                        type="text"
                        value={this.props.newUser.lastName}
                        onChange={this.props.LastNameUpdate}/>
                </li>
                <li>
                    <div>Email: </div>
                    <label
                        id="email"
                        type="email"
                        value={this.props.newUser.email}
                        onChange={this.props.EmailUpdate}/>
                </li>
                <li>
                    <div>Notices: </div>

                </li>
            </ul>
        )
    }
}