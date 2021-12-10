import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../store/states/counter'

export default function Login() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>

                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(incrementByAmount(Number(6)))}
                >
                    incrementByAmount
                </button>
            </div>
        </div>
    )
}