import React, { ReactElement } from 'react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { HeaderContainer, HeaderMessage, HeaderWrapper } from './styles';
import ActionButton from '../common/Button/ActionButton';
import { Text, TextHighlight } from '../common/Text';
import GroupItems from '../common/GroupItems';
import { Icon } from '../common/Icon';
import { Avatar } from '../common/Avatar';
import profilePicture from '../../assets/photos/profile.png';

const Header: React.FC = (): ReactElement => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <Avatar picture={profilePicture} />
                <HeaderMessage>
                    <Text>
                        <small>Hello World! I am</small>
                        <h1>
                            <TextHighlight>José Magalhães</TextHighlight>
                        </h1>
                        <h4>A passionate Front-end Developer</h4>
                    </Text>
                </HeaderMessage>
                <GroupItems spacing={30} horizontal>
                    <ActionButton link="https://www.github.com/josemagalhaesnt" size={50} externalLink>
                        <Icon>
                            <FiGithub title="github-link" size="3.5rem" color="white" />
                        </Icon>
                    </ActionButton>

                    <ActionButton link="https://www.linkedin.com/in/josemagalhaesnt" size={50} externalLink>
                        <Icon>
                            <FiLinkedin title="linkedin-link" size="3.5rem" color="white" />
                        </Icon>
                    </ActionButton>
                </GroupItems>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;
