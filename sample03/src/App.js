import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {createStore} from 'redux'
import './App.css';

// function App() {
//     return(
//         <div className={"container text-center"}>
//             <Clock />
//         </div>
//     )
// }

const App = () => (
    <BrowserRouter>
        <div class="container text-center mt-5">
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/blog/:id" component={Blog}/>
            <Route exact path="/sum/:num1/:num2" component={Sum}/>
        </div>
    </BrowserRouter>
)
//
//
// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.now = new Date();
//         this.state = {
//             time: `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`
//         }
//
//         this.refresh = this.refresh.bind(this);
//     }
//
//     refresh() {
//         this.now = new Date();
//         this.setState((state) => ({
//             time: `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`
//         }));
//     }
//
//     render() {
//         return <p onClick={this.refresh}>{this.state.time}</p>
//     }
//
// }


const vote = (state=0, action) => {
    switch(action.type){
        case 'ADD':
            return state + 1
        default:
            return state
    }
}

let store = createStore(vote)

const Home = () => {
    store.dispatch({type: 'ADD'})
    let x = store.getState().toString()
    return (
        <div>
            <h1>Welcome</h1>
            <p>投票数: {x}</p>
            <p><a href="/about">aaa</a></p>
            <p><Link to={"/about"}>about</Link></p>
        </div>
    )
}

const About = () => {
    let x = store.getState().toString()
    return (
        <div>
            <h1>About</h1>
            <p>投票数: {x}</p>
        </div>
    )
}

const Blog = (props) => {
    const {id} = props.match.params

    return (
        <div>
            <h1>{id}番目の記事です</h1>
        </div>
    )
}

const Sum = (props) => {
    const {num1, num2} = props.match.params

    return (
        <div>
            <p>{num1} + {num2} = {parseInt(num1) + parseInt(num2)}</p>
        </div>
    )
}


export default App;
