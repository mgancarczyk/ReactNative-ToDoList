import React, { FC } from 'react';
import { Button, View, Image, Text } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../constans/Colors';

const NameText = styled.Text`
    margin: 0px 40px;
    font-size: 20px;
    color: ${Colors.black};
`;

const CustomImage = styled.Image`
    width: 80px;
    height: 80px;
    margin: 50px;
`;

interface IHomeProps { }

const Home: FC<IHomeProps> = (props) => {
    const navigation = useNavigation();

    return (
        <View>
            <CustomImage
                source={require('../../assets/profile.png')}
            />
            <NameText>Michał Gancarczyk</NameText>
            
        </View>
    );
};

export default Home;