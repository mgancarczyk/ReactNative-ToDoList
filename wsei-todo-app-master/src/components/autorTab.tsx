import React, { FC } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const AutorText = styled.Text`
    position: relative;
    margin-left: 20%;
    
    
    
`;
const AutorContainer = styled.View`
    margin: 6px;
    margin-bottom: 0px;

`;
const CustomImage = StyleSheet.create({
    margimage: {
        
        margin: 10,
        width: 65,
        height: 65,
        position: "absolute"
        
    }
});

const Autor: FC = () => {
    return (
        <AutorContainer>
            <Image
                style={CustomImage.margimage}

                source={{ uri: 'https://zpierwszegotloczenia.pl/obrazek/435961.jpeg' }}
            />
            <AutorText>Jej nazwa jest zwodnicza, gdyż francesinha w języku portugalskim oznacza „małą Francuzeczkę”. Jest to nazwa stojąca w całkowitym kontraście do tego bla bla bla bla.
            </AutorText>
        </AutorContainer>
    )
}

export default Autor;