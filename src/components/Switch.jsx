import React, { useState } from 'react';
import { 
    SwitchContainer,
    SwitchWrapper,
    SwitchBGC,
    ButtonSwitch,
} from './switch/Switch.elements';

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
        <div className='switch'>
            <SwitchContainer>
                <SwitchWrapper>
                    <SwitchBGC>
                        <ButtonSwitch className='button-switch'
                            onClick={ () => changeMode()}
                            position={ position } 
                        ></ButtonSwitch>
                    </SwitchBGC>
                </SwitchWrapper>
            </SwitchContainer>
        </div>
    );
};

export default Switch;