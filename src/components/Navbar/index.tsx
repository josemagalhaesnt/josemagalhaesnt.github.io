import React, { ReactElement, useState } from 'react';

// import { ThemeContext } from 'styled-components';
import { NavbarStyled } from './styles';
import { SwitchButton } from '../SwitchButton';
import MenuButton from '../MenuButton';
import SideMenu from '../SideMenu';

interface Props {
    toggleTheme(): void;
}

const Navbar: React.FC<Props> = ({ toggleTheme }: Props): ReactElement => {
    // const { colors } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);

    // here we added [isToggled, setIsToggled] as a second parameter
    // const toggleMenu = useCallback(() => setOpen(!open), [open, setOpen]);

    return (
        <NavbarStyled>
            <div>
                <MenuButton open={open} setOpen={setOpen} />
                <SideMenu open={open} setOpen={setOpen} />
            </div>
            <SwitchButton toggleTheme={toggleTheme} />
        </NavbarStyled>
    );
};

export default Navbar;
