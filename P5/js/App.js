import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RegisterFormController from "../Controller/RegisterFormController"
import configureStore from "../store/configureStore";

const store = configureStore();

ReactDOM.render((
        <Provider store={store}>
            <RegisterFormController/>
        </Provider>
    ),
    document.getElementById('content')
);

/*
//React test (log in markup)

var NewUserForm = React.createClass( {
    render: function () {

        return <RegisterContainer/>
        // return(
        //     <form>
        //         <ul>
        //             <li>
        //                 <div>First Name: </div>
        //                 <input id="first-name" type="text"/>
        //             </li>
        //             <li>
        //                 <div>Last Name: </div>
        //                 <input id="first-name" type="text"/>
        //             </li>
        //             <li>
        //                 <div>Email: </div>
        //                 <input id="first-name" type="email"/>
        //             </li>
        //             <li>
        //                 <div>Password: </div>
        //                 <input id="first-name" type="password"/>
        //             </li>
        //             <li>
        //                 <div>Confirm password: </div>
        //                 <input id="first-name" type="password"/>
        //             </li>
        //         </ul>
        //         <input type="submit" value="Register"/>
        //     </form>
        // )
    }
});

// ReactDOM.render(
//     <NewUserForm/>,
//     document.getElementById('content')
//
// );

//end React test

render(
    <Provider store={store}>
        <NewUserForm/>
    </Provider>,
    document.getElementById('content')
)

*/





