import {
    Container, 
    Circle,
    ButtonContainer,
    NavigationName,
    NavigationContainer
} from './styles';
import { BsFillLightningFill } from 'react-icons/all';

export const Header = () => {
    return (
        <Container>
            <Circle>
                <BsFillLightningFill color='#FFFFFF'/>
            </Circle>

            <NavigationContainer>
                <NavigationName>
                    Início
                </NavigationName>
                <NavigationName>
                    Conheça
                </NavigationName>
                <NavigationName>
                    Preços
                </NavigationName>
            </NavigationContainer>

            <NavigationContainer>
                <NavigationName>
                    Entrar
                </NavigationName>
                <ButtonContainer>
                    Cadastre-se
                </ButtonContainer>
            </NavigationContainer>
        </Container>
    );
};