import React, { SetStateAction } from 'react';

import { StyledMenuButton } from './styles';

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuButton: React.FC<Props> = ({ open, setOpen }: Props) => {
    return (
        <StyledMenuButton open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledMenuButton>
    );
};

export default MenuButton;
