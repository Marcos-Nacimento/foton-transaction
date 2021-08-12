import { 
    Container, 
    Title, 
    Button, 
    Content, 
    ContainerLogo, 
} from './styles';
import { useContext } from 'react';
import { WaxContext } from '../../context/Wax';

import Lottie from 'react-lottie';
import PaymentAnimation from '../../animations/payments.json';
import Logo from '../../assets/logo.svg';

export const Home = () => {    

    const { sendTransaction } = useContext(WaxContext);

    return (
        <Container>
            <ContainerLogo>
                <img src={Logo} alt="FotonTech" />
            </ContainerLogo>

            <Content>
                <Lottie 
                    options={{
                        animationData: PaymentAnimation,
                        loop: true,
                        autoPlay: true,
                    }}
                    isClickToPauseDisabled={true}
                    height='40%'
                    width='40%'
                />

                <Title>
                    Faça sua primeira transferencia
                </Title>

                <Button
                    onClick={() => sendTransaction()}
                >
                    Começar
                </Button>
            </Content>
        </Container>
    );
};