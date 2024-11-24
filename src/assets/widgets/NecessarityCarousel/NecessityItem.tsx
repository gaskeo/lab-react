import styled from "styled-components";

export type NecessityItemProps = {
    id: string
    image: NecessityImage
    title: string
    description: string
}

export type NecessityImage = {
    src: string
    alt: string
}

export function NecessityItem(props: NecessityItemProps) {
    const {image, title, description} = props
    return (
        <NecessityItemContainer>
            <NecessityImage src={image.src} alt={image.alt}/>
            <NecessityHeader className="necessity-title">{title}</NecessityHeader>
            <NecessityDescription className="necessity-paragraph">{description}</NecessityDescription>
        </NecessityItemContainer>
    )
}


const NecessityImage = styled.img`
    height: 70px;
`

const NecessityHeader = styled.h5`
    margin-top: 36px;
    font-size: 18px;
`

const NecessityItemContainer = styled.div`
    width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media screen and (min-width: 768px) and (max-width: 991px) {
        & {
            width: 200px;
        }
    }
    @media screen and (max-width: 768px) {
        width: 90vw;
        & ${NecessityImage} {
            height: 20vw;
            min-height: 70px;
        }
        & ${NecessityHeader} {
            font-size: 30px;            
        } 
    }
`

const NecessityDescription = styled.p`
    font-size: 14px;
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        & {
            font-size: 12px;
        }
    }
`