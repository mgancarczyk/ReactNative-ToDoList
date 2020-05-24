import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { TextInput, Button } from 'react-native';

import { useDispatch } from 'react-redux';

import { setNewElementTodoList } from '../actions/todoListActions';
import { ISingleElementList } from '../entities/todoSingleEl';

const Wrapper = styled.View`
    margin: 80px 20px 0 20px;
`;

const CustomTextInput = styled.TextInput`
    border: 1px solid;
    padding: 10px;
    color: black;
    width: 100%;
`;

type setNewElementTodoList = ReturnType<typeof setNewElementTodoList>;

const Form: FC<{switchView(formView: boolean)}> = props => {
    const dispatch = useDispatch();
    const [nameInput, setNameInput] = useState<string>('');
    const [descriptionInput, setDescriptinonInput] = useState<string>('');

    const nameValueChanege = (txt) => {
        setNameInput(txt.nativeEvent.text);
    }
    const descriptionValueChangue = (txt) => {
        setDescriptinonInput(txt.nativeEvent.text);
    }

    const savDate = () => {
        dispatch<setNewElementTodoList>(setNewElementTodoList({
           name: nameInput,
           description: descriptionInput//,
           //id: new Date().getTime()
        } as ISingleElementList
        ));
        props.switchView(false)
    }

    return(
        <Wrapper>
            <CustomTextInput value={nameInput} onChange={nameValueChanege} placeholder="Name"/>
            <CustomTextInput value={descriptionInput} onChange={descriptionValueChangue} placeholder="Description"/>
            <Button title="Zapisz" onPress={savDate}/> 
        </Wrapper>
    )
};

export default Form;