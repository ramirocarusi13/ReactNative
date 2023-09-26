import React from 'react';
import { HeaderButton } from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons';

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color="blue" // Cambia el color del icono según tus preferencias
        />
    );
};

export default CustomHeaderButton;
