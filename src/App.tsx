import {NecessityCarousel} from "./assets/widgets";
import styled from "styled-components";

function App() {
    return (
        <AppContainer>
            <NecessityCarousel/>
        </AppContainer>
    )
}

export default App

const AppContainer = styled.div`
    font-family: 'Open Sans', sans-serif;
    display: flex;
    width: 100vw;
`