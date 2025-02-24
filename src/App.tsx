import styled from '@emotion/styled';
import { BrowserRouter as Router } from 'react-router-dom';

import { Content } from './components/Content';
import { Sidebar } from './components/Sidebar';

import './styles.css';

export default function App() {
    return (
        <Router>
            <OuterContainer>
                <InnerContainer>
                    <Sidebar />
                    <Content />
                </InnerContainer>
            </OuterContainer>
        </Router>
    );
}

const InnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: calc(100vh - 4rem);
    padding: 2rem 0;
    overflow-y: hidden;
    overflow-x: auto;
    width: 1024px;
    min-height: 360px;
`;

const OuterContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
