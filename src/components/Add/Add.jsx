import { useEffect, useState } from 'react'
import './Add.css'


export default function Add() {
    const [count, SetCount] = useState(0)
    const [count2, SetCount2] = useState(1000)
    const [content, SetContent] = useState(false)
    const [message, SetMessage] = useState('')
    const [backgroundc, SetBackgroundc] = useState('white')
    const [class1, SetClass1] = useState(false)
    useEffect(() => {
        if (count === 10 || count === 100 || count === 1000) {
            SetClass1(true)
            SetMessage(count)
        }
    }, [count]);



    useEffect(() => {
        if (count2 === 10 || count2 === 100 || count2 === 1000) {
            SetClass1(true)
            SetMessage(count2)
        }
    }, [count2]);



    useEffect(() => {
        if (count == 10 || count2 == 10) {
            SetBackgroundc("blue")
        }
        else if (count == 100 || count2 == 100) {
            SetBackgroundc("red")
        }
        else if (count == 1000 || count2 == 1000) {
            SetBackgroundc("yellow")
        }
    }, [count, count2])



    function add() {
        if (count === 1000) {
            SetContent(!content)
        }
        if (count < 1000 && count >= 100) {
            SetCount(count + 100)
        }
        else if (count < 100 && count >= 10) {
            SetCount(count + 10);
        }
        else if (count < 10) {
            SetCount(count + 1);
        }
    }
    function less() {
        if (count2 <= 1000 && count2 > 100) {
            SetCount2(count2 - 100)
        }
        else if (count2 <= 100 && count2 > 10) {
            SetCount2(count2 - 10)
        }
        else {
            SetCount2(count2 - 1)
        }
    }

    return (

        <>
            <div style={{ backgroundColor: backgroundc, width: "100vw", height: "100vh" }}>
                <div className="one-ek">
                    <button onClick={add}>
                        count is {count}
                    </button>
                    <button className={content == false ? 'less' : 'not-less'} onClick={less}>
                        count is {count2}
                    </button>
                </div>
                <div className={class1 ? "ek-box" : "ek-box2"}>
                    <p>The counter is {message}</p>
                </div>
            </div>
        </>
    );
}

