import React, {Component} from 'react'

export default class TopMenu extends Component {
    render() {
        console.log(this.props);

        return (
            <div id="menu-wrapper">
                <div id="menu">
                    <ul>
                        <li class="current_page_item"><a href="#">Homepage</a></li>
                        <li><a href="#">Find</a></li>
                        <li><a href="#">Log In</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}