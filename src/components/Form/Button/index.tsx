import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { TouchableWithoutFeedback } from 'react-native'

import { Container, Title } from './styles'

interface Props extends RectButtonProps{
    title: string;
    onPress: () => void;
}

export function Button({ 
    title, 
    onPress, 
    ...rest
}: Props) {
    return (
        <TouchableWithoutFeedback
            onPress={onPress} 
        >
            <Container {...rest}>
                <Title>
                    { title }
                </Title>
            </Container>    
        </TouchableWithoutFeedback>
    )
}
