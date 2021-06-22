import React, { useState, useEffect, useRef } from 'react';

const Board = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;

        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const context = canvas.getContext('2d');
        context.scale(2,2);
        context.lineCap = 'round';
        context.strokeStyle = 'blue';
        context.lineWidth = '5';
        contextRef.current= context;
    }, [])

    const startDrawing = ({nativeEvent}) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const finishDrawing = () => {
        contextRef.current.closePath()
        setIsDrawing(false);
    };

    const draw = ({nativeEvent}) => {
        if(!isDrawing) return;

        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke()
    };

    const clearCanvas = () => {
        const c = canvasRef.current.getContext('2d');
        c.fillStyle = 'white';
        c.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    };

    const saveCanvas = () => {
        const canvas = canvasRef.current;
        const dataUrl = canvas.toDataURL("image/jpeg", 1.0);
        const downloadLink = document.createElement('a');
        downloadLink.href = dataUrl;
        downloadLink.download = 'Canvas.jpeg';
        document.body.appendChild(downloadLink);
        downloadLink.click();
    };

    return (
        <div>
            <h1>Draw Something</h1>

            <button onClick={clearCanvas}>[x] Clear</button>
            <button onClick={saveCanvas}>Save</button>
            <canvas 
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                ref={canvasRef}
            />
        </div>
    )
}

export default Board;
