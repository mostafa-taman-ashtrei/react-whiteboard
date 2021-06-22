import React, { useState } from 'react';
import { Grid, Box, Checkbox } from '@chakra-ui/react';

const Colors = ({ canvasContext }) => {
    const [checkedBox, setCheckedBox] = useState('');

    return (
        <div>
            <Grid templateColumns="repeat(5, 1fr)" gap={3} m={2}>
                <Box w="100%" h="10">
                    <Checkbox
                        size="sm"
                        colorScheme="red"
                        value="red"
                        name="red"
                        onChange={(e) => {
                            canvasContext.strokeStyle = e.target.value;
                            setCheckedBox(e.target.value);
                        }}
                        isChecked={checkedBox === 'red'}
                    >
                        {' '}
                        RED
                        {' '}
                    </Checkbox>
                </Box>

                <Box w="100%" h="10">
                    <Checkbox
                        size="sm"
                        colorScheme="blue"
                        value="blue"
                        name="blue"
                        onChange={(e) => {
                            canvasContext.strokeStyle = e.target.value;
                            setCheckedBox(e.target.value);
                        }}
                        isChecked={checkedBox === 'blue'}
                    >
                        {' '}
                        blue
                        {' '}
                    </Checkbox>
                </Box>

                <Box w="100%" h="10">
                    <Checkbox
                        size="sm"
                        colorScheme="green"
                        value="green"
                        name="green"
                        onChange={(e) => {
                            canvasContext.strokeStyle = e.target.value;
                            setCheckedBox(e.target.value);
                        }}
                        isChecked={checkedBox === 'green'}
                    >
                        {' '}
                        green
                        {' '}
                    </Checkbox>
                </Box>

                <Box w="100%" h="10">
                    <Checkbox
                        size="sm"
                        colorScheme="gray"
                        value="black"
                        name="black"
                        onChange={(e) => {
                            canvasContext.strokeStyle = e.target.value;
                            setCheckedBox(e.target.value);
                        }}
                        isChecked={checkedBox === 'black'}
                    >
                        {' '}
                        black
                        {' '}
                    </Checkbox>
                </Box>

                <Box w="100%" h="10">
                    <Checkbox
                        size="sm"
                        colorScheme="purple"
                        value="purple"
                        name="purple"
                        onChange={(e) => {
                            canvasContext.strokeStyle = e.target.value;
                            setCheckedBox(e.target.value);
                        }}
                        isChecked={checkedBox === 'purple'}
                    >
                        {' '}
                        purple
                        {' '}
                    </Checkbox>
                </Box>

            </Grid>
        </div>
    );
};

export default Colors;
