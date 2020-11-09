import React, { ReactNodeArray, ReactNode, ReactElement } from 'react';

import { StyledAppBar, StyledContainer } from './styles';
import GroupItems from '../common/GroupItems';

interface Props {
    children: ReactNode | ReactNodeArray;
}

const AppBar: React.FC<Props> = ({ children }: Props): ReactElement => {
    return (
        <StyledContainer>
            <StyledAppBar>
                <GroupItems spacing={20}>{children}</GroupItems>
            </StyledAppBar>
        </StyledContainer>
    );
};

export default AppBar;
