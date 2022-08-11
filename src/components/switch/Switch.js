import React, { useState } from 'react';
import { 
    SwitchContainer,
    SwitchWrapper,
    SwitchBGC,
    ButtonSwitch,
} from './Switch.elements';

const Switch = (props) => {

    const { theme, setTheme } = props;
    const [position, setPosition] = useState(false);

    const changeMode = () => {
        if (theme === 'light') {
            setTheme('dark');
            changePosition();
        } else {
            setTheme('light');
            changePosition();
        }
    };

    const changePosition = () => {
        setPosition(!position);
    };

    return (
        <>
            <SwitchContainer>
                <SwitchWrapper>
                    <SwitchBGC>
                        <ButtonSwitch 
                            onClick={ () => changeMode()}
                            position={ position } 
                        ></ButtonSwitch>
                    </SwitchBGC>
                </SwitchWrapper>
            </SwitchContainer>
        </>
    );
};

export default Switch;