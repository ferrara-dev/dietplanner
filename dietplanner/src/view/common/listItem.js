import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import Avatar from '@material-ui/core/Avatar';
import { Row, Item } from '@mui-treasury/components/flex';
import {
    Info,
    InfoTitle,
    InfoSubtitle,
    InfoCaption,
} from '@mui-treasury/components/info';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { usePopularInfoStyles } from '@mui-treasury/styles/info/popular';

export function IngredientListItem({image, name}) {
    const avatarStyles = useDynamicAvatarStyles({
        height: 56,
        width: 64,
        radius: 8,
    });
    return (
        <>
            <NoSsr>
                <GoogleFontLoader fonts={[{ font: 'Poppins', weights: [400, 700] }]} />
            </NoSsr>
            <Row gap={3}>
                <Item>
                    <Avatar
                        variant={'rounded'}
                        classes={avatarStyles}
                        src={image}
                    />
                </Item>
                <Info useStyles={usePopularInfoStyles}>
                    <InfoSubtitle>{name}</InfoSubtitle>
                    <InfoTitle>Most Awaited - Figma Launches Plugin</InfoTitle>
                    <InfoCaption>14 sec ago</InfoCaption>
                </Info>
            </Row>
        </>
    );
};