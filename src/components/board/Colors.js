import React, { useState } from 'react'

const Colors = ({ canvasContext }) => {
    const [checkedBox, setCheckedBox] = useState('');

    return (
        <div>
            <label htmlFor="red">RED</label>
            <input type="checkbox" checked={checkedBox === 'red'} readOnly value="red" name="red" onClick={(e) => {
                canvasContext.strokeStyle = e.target.value
                setCheckedBox(e.target.value)
            }}/>            
            <br />

            <label htmlFor="blue">blue</label>
            <input type="checkbox" checked={checkedBox === 'blue'} readOnly value="blue" name="blue" onClick={(e) => {
                canvasContext.strokeStyle = e.target.value
                setCheckedBox(e.target.value)
            }}/>
            <br />

            <label htmlFor="green">green</label>
            <input type="checkbox" checked={checkedBox === 'green'} readOnly value="green" name="green" onClick={(e) => {
                canvasContext.strokeStyle = e.target.value
                setCheckedBox(e.target.value)
            }} />
            <br />

            <label htmlFor="black">black</label>
            <input type="checkbox" checked={checkedBox === 'black'} readOnly value="black" name="black" onClick={(e) => {
                canvasContext.strokeStyle = e.target.value
                setCheckedBox(e.target.value)
            }} />
            <br />

            <label htmlFor="yellow">yellow</label>
            <input type="checkbox" checked={checkedBox === 'yellow'} readOnly value="yellow" name="yellow" onClick={(e) => {
                canvasContext.strokeStyle = e.target.value
                setCheckedBox(e.target.value)
            }} />
            <br />

            <label htmlFor="gray">gray</label>
            <input type="checkbox" checked={checkedBox === 'gray'} readOnly value="gray" name="gray" onClick={(e) => {
                canvasContext.strokeStyle = e.target.value
                setCheckedBox(e.target.value)
            }} />
        </div>
    )
}

export default Colors
