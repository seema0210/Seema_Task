import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../Store'

const Practice = () => {

    const finalCounter = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    const add = () => {
        dispatch(counterActions.add())
    }
    const sub = () => {
        dispatch(counterActions.sub())
    }

    const addBytwo = () => {
        dispatch(counterActions.addByTwo(2))
    }
    return(
        <>
        <h1>{finalCounter}</h1>
        <button type='submit' onClick={add}>Add</button>
        <button type='submit' onClick={sub}>Sub</button>
        <button type='submit' onClick={addBytwo}>AddByTwo</button>
        </>
    )
}

export default Practice;