import React, { FC } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const FrancText = styled.Text`
    position: relative;
    margin-left: 20%;

`;
const FrancContainer = styled.View`
    margin: 6px;
    margin-bottom: 0px;

`;
const CustomImage = StyleSheet.create({
    margimage: {
        
        margin: 10,
        width: 65,
        height: 65,
        borderRadius: 65,
        position: "absolute"
        
    }
});

const Franc: FC = () => {
    return (
        <FrancContainer>
            <Image
                style={CustomImage.margimage}

                source={{ uri: 'https://zpierwszegotloczenia.pl/obrazek/435961.jpeg' }}
            />
            <FrancText>Jej nazwa jest zwodnicza, gdyż francesinha w języku portugalskim oznacza „małą Francuzeczkę”. Jest to nazwa stojąca w całkowitym kontraście do tego bla bla bla bla.
            </FrancText>
        </FrancContainer>
    )
}

export default Franc;