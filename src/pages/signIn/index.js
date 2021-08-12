import {
    Button,
    SubTitle,
    Container, 
    ContentLeft,
    ContentRight,
    ContentSubTitle,
} from './styles';
import { useState} from 'react';
import { WaxJS } from "@waxio/waxjs/dist";

import Lottie from 'react-lottie';
import paymentAnimation from '../../animations/logo.json';
import paymentsAnimations from '../../animations/people.json';
import machinePay from '../../animations/payments.json';

import Logo from '../../assets/logo.svg';

const wax = new WaxJS({
    rpcEndpoint: 'https://wax.greymass.com',
});

export const SignIn = () => {
    const [user, setUser] = useState();
    const [isPay, setPay] = useState(false);

    const authenticationWax = async () => {
        try {
            if(await wax.isAutoLoginAvailable()) return;

            const authResult = await wax.login();
            
            setUser(authResult);
        }catch(error) {
            alert(`Oops sorry!! ${error}`);
        };
    };

    const transaction = async () => {
        try {
            await wax.api.transact({
                actions: [{
                  account: 'eosio.token',
                  name: 'transfer',
                  authorization: [{
                    actor: wax.userAccount,
                    permission: 'active',
                  }],
                  data: {
                    from: wax.userAccount,
                    to: 'Testing',
                    quantity: '0.00000001 WAX',
                    memo: '',
                  },
                }]
              }, {
                blocksBehind: 3,
                expireSeconds: 1200,
              });

              setPay(true);
        }catch(error) {
            // handle error
        };
    };

    if(user) {
        return (
            <Container>
                <ContentLeft>
                    <img 
                        src={Logo} 
                        alt="FotonTech" 
                        style={{
                            margin: '3%'
                        }}
                        height='5%'
                    />
                    <ContentSubTitle>
                        <SubTitle>
                            {isPay ? "Pagamendo realizado com sucesso" : "Estamos quase lá faça sua primeira transferência."}
                        </SubTitle>
                    </ContentSubTitle>
                </ContentLeft>

                <ContentRight>
                    <Lottie 
                        options={{
                            animationData: isPay ? machinePay : paymentsAnimations,
                            autoplay: true,
                            loop: true,
                        }}
                        height='30%'
                        widht='30%'
                        style={{
                            marginTop: '10%',
                        }}
                        isClickToPauseDisabled={true}
                    />

                    {!isPay && (
                        <Button 
                            onClick={() => transaction()}
                        >
                            Proxímo
                        </Button>
                    )}
                </ContentRight> 
                
            </Container>
        );
    };

    return (
        <Container>
            <ContentLeft>
                <img 
                    src={Logo} 
                    alt="FotonTech" 
                    style={{
                        margin: '3%'
                    }}
                    height='5%'
                />
                <ContentSubTitle>
                    <SubTitle>
                        Faça suas transferência de forma, <br/>
                        segura com a FotonTechTransactions
                    </SubTitle>
                </ContentSubTitle>
            </ContentLeft>

            <ContentRight>
                <Lottie 
                    options={{
                        animationData: paymentAnimation,
                        autoplay: true,
                        loop: true,
                    }}
                    height='30%'
                    widht='30%'
                    style={{
                        marginTop: '10%',
                    }}
                    isClickToPauseDisabled={true}
                />

                <Button 
                    onClick={() => authenticationWax()}
                >
                    login
                </Button>
            </ContentRight> 
        </Container>
    );
};