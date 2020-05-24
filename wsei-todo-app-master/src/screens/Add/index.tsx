import React, { FC } from 'react';
import { Button, View, Image, Text } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../constans/Colors';

const WelcomeText = styled.Text`
    margin: 120px 20px;
    font-size: 16px;
    color: ${Colors.black};
`;

const CustomImage = styled.Image`
    width: 50px;
    height: 50px;
    margin: 50px;
`;

interface IAddProps { }

const Add: FC<IAddProps> = (props) => {
    const navigation = useNavigation();

    return (
        <View>
            <WelcomeText>Add new list</WelcomeText>
        </View>
    );
};

export default Add;