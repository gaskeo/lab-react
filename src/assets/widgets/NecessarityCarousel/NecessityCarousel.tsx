import {NecessityItem, NecessityItemProps} from "./NecessityItem.tsx";
import styled from "styled-components";

export function NecessityCarousel() {

    return (
        <CarouselContainer>{necessities.map(necessity => <NecessityItem {...necessity} key={necessity.id}/>)}</CarouselContainer>
    )
}


const CarouselContainer = styled.div`
    display: flex;
    gap: 15px;
    width: 100%;
    justify-content: center;

    @media screen and (max-width: 768px) {
        & {
            flex-direction: column;
            align-items: center;
        }
    }
    
`

const necessities: NecessityItemProps[] = [
    {
        id: 'pencil',
        image: {
            src: '/f3.png',
            alt: 'Карандаши'
        },
        title: 'Первый блок',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
        id: 'balloon',
        image: {
            src: '/f4.png',
            alt: 'Воздушный шар'
        },
        title: 'Второй блок',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
        id: 'flag',
        image: {
            src: '/f5.png',
            alt: 'Флаг'
        },
        title: 'Третий блок',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
]