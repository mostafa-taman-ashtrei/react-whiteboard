import React, { useState, useEffect, useRef } from 'react';
import {
    Heading, Button, Stack, Box,
} from '@chakra-ui/react';
import Colors from './Colors';

const Board = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [canvasContext, SetCanvasContext] = useState();

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;

        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const context = canvas.getContext('2d');
        SetCanvasContext(context);
        context.scale(2, 2);
        context.lineCap = 'round';
        context.strokeStyle = 'blue';
        context.lineWidth = '5';
        contextRef.current = context;
    }, []);

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const finishDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) return;

        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    };

    const clearCanvas = () => {
        const c = canvasRef.current.getContext('2d');
        c.fillStyle = 'white';
        c.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    };

    const saveCanvas = () => {
        const canvas = canvasRef.current;
        const dataUrl = canvas.toDataURL('image/jpeg', 1.0);
        const downloadLink = document.createElement('a');
        downloadLink.href = dataUrl;
        downloadLink.download = 'Canvas.jpeg';
        document.body.appendChild(downloadLink);
        downloadLink.click();
    };

    return (
        <div>
            <Heading textAlign="center" mb={6}>Pick a color & Draw something</Heading>
            <Colors canvasContext={canvasContext} />

            <Stack direction="row" spacing={4} align="center">
                <Button type="button" onClick={clearCanvas}>[x] Clear</Button>
                <Button type="button" onClick={saveCanvas}>Save</Button>
            </Stack>

            <Box border="2px" background="white" m="2">
                <canvas
                    onMouseDown={startDrawing}
                    onMouseUp={finishDrawing}
                    onMouseMove={draw}
                    ref={canvasRef}
                />
            </Box>

        </div>
    );
};

export default Board;
