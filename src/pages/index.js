import React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: rebeccapurple;
`;

export default () => {
    const { title, description } = useSiteMetadata();
    return (
        <React.Fragment>
            <StyledH1>Gatsby blog project</StyledH1>
            <h2>Adrian Szlegel</h2>
            <p>Meta:</p>
            <p>Title: <code>{ title }</code></p>
            <p>Description: <code>{ description }</code></p>
        </React.Fragment>
    );
};