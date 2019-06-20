import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components';
import { Emoji, ExternalLink, SITE_COLORS, Right } from '../Atoms';

const BOX_SHADOW = '1px 1px 3px rgba(0,0,0,0.75)';

const DetailCard = styled.div`
    height: 15vw;
    width: 15vw;
    padding: .5vw;
    font-size: 13px;
    font-style: italic;
    cursor: pointer;
    box-shadow: ${BOX_SHADOW};
    box-sizing: border-box;
    overflow-x: hidden;
    overflow: auto;
    color: ${SITE_COLORS.TEXT.TERTIARY}

    @media (max-width: 700px) {
        font-size: 11px;
    }

    > div {
        margin-top: .5rem;
        box-sizing: border-box;
    }
`;

const InstaFront = styled.div`
    position: relative;
    width: 15vw;
    height: 15vw;
`;

const LikeCommentCounts = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 15vw;
    height: 15vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background-color: #000;
    opacity: 0;
    color: #fff;

    &:hover {
        opacity: .5;
    }
`;

const GridBox = styled.div`
    position: relative;
    margin: 1vw;
    max-width: 15vw;
    max-height: 15vw;
    overflow: hidden;
`;

const InstaImg = styled.img`
    display: block;
    width: 15vw;
    max-height: 15vw;
    margin: auto 0;
    box-shadow: ${BOX_SHADOW};
`;

const ReactCardFlipStyled = styled(ReactCardFlip)`
    position: relative;
    width: 100%;
    height: 100%;
`;

class InstaPic extends Component {
    constructor () {
        super();
        this.state = {
            isFlipped: false
        };
        this.flipper = this.flipper.bind(this);
    }

    flipper (e) {
        const hasHref = e.target.getAttribute('href');
        if (!hasHref) {
            e.preventDefault();
            this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        }
    }

    renderLikesComments () {
        const { commentCount, likeCount } = this.props;
        if (!commentCount && !likeCount) {
            return null;
        }
        return (
            <div>
                {commentCount && (
                    <Fragment>
                        <Emoji symbol={'💬'} label='heart' />
                        {commentCount}
                    </Fragment>
                )}
                {likeCount && (
                    <Fragment>
                        <Emoji symbol={'♡'} label='heart' />
                        {likeCount}
                    </Fragment>
                )}
            </div>
        );
    }

    render () {
        const { caption, className, link, src } = this.props;
        const { isFlipped } = this.state;

        return (
            <GridBox>
                <ReactCardFlipStyled isFlipped={isFlipped} flipDirection='horizontal'>
                    <InstaFront onClick={this.flipper} key='front'>
                        <InstaImg
                            alt={'Bantam Breaks Instagram feed pic'}
                            className={className}
                            src={src}
                        />
                        <LikeCommentCounts title={caption}>
                            {this.renderLikesComments()}
                        </LikeCommentCounts>
                    </InstaFront>

                    <DetailCard key='back' onClick={this.flipper}>
                        <div>{caption}</div>
                        <Right>
                            <ExternalLink
                                href={link}
                                text={'view original →'}
                                title={'View original post on instangram'} />
                        </Right>
                    </DetailCard>
                </ReactCardFlipStyled>
            </GridBox>
        );
    }
}

InstaPic.propTypes = {
    caption: PropTypes.string.isRequired,
    commentCount: PropTypes.number.isRequired,
    likeCount: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
};

export default InstaPic;
