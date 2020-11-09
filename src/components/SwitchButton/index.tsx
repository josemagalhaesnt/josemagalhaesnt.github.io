import React, { ReactElement, useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';
import { shade, transparentize, lighten } from 'polished';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Icon } from '../common/Icon';
// import SwitchButtonStyled from './styles';

interface Props {
    toggleTheme(): void;
}

export const SwitchButton = ({ toggleTheme }: Props): ReactElement => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <>
            <Switch
                className="switch"
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={
                    <Icon>
                        <FiSun size="2.1rem" color="#fff" />
                    </Icon>
                }
                uncheckedIcon={
                    <Icon>
                        <FiMoon size="2.1rem" color="#fff" />
                    </Icon>
                }
                height={28}
                handleDiameter={30}
                width={65}
                boxShadow={`0px 1px 5px ${transparentize(0.6, colors.secondary)}`}
                activeBoxShadow={`0px 0px 1px 5px ${transparentize(0.6, colors.secondary)}`}
                offColor={shade(0.15, colors.highlight1)}
                onColor={lighten(0.15, colors.secondary)}
                onHandleColor={shade(0.25, colors.secondary)}
                id="material-switch"
            />
        </>
    );
};
