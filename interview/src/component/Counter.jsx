import React from "react";
import s from './Counter.module.css'


class Counter extends React.Component {
   state = {
        value: 0
    }
    increment = () => {
        this.setState((state) => {
            return {value: state.value + 1}
        })
    }
    decrement = () => {
        this.setState((state) => {
            return {value: state.value - 1}
        })
    }

    render() {
        return (
            <div className={s.item}>
                <h1>Counter APP</h1>
                <div className={s.value}>{this.state.value}</div>
                <div className={s.itemspan}>
                <span><button className={s.incr} onClick={this.increment}>increment</button></span>
                <span><button className={s.decr} onClick={this.decrement}>decrement</button></span>
                </div>
            </div>
        )
    }
}
export default Counter