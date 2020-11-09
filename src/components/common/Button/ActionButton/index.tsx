import React, { ReactNode, ReactNodeArray, ReactElement } from 'react';

import { Container } from './styles';

interface Props {
    primary?: boolean;
    transparent?: boolean;
    externalLink?: boolean;
    children: ReactNode | ReactNodeArray;
    link: string;
    size: number;
}

const ActionButton: React.FC<Props> = ({
    primary,
    transparent,
    children,
    size,
    link,
    externalLink,
}: Props): ReactElement => {
    return (
        <Container primary={primary} transparent={transparent} size={size}>
            {externalLink ? (
                <a href={link} rel="noopener noreferrer" target="_blank">
                    {children}
                </a>
            ) : (
                <a href={link}>{children}</a>
            )}
        </Container>
    );
};

export default ActionButton;
