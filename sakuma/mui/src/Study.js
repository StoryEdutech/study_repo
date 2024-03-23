import { useState } from 'react';
import { Button } from "@mui/material";
import { styled } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowLeft, faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons'

const DivFlex = styled('div')`
    display: flex;

    ${({justify}) => justify ? `justify-content: ${justify}`:'' }
`;

const FlexTable = styled(DivFlex)`
    max-width: 50px;
    flex-direction: column;
`;

const MyToggleButton = styled('button')( ({clicked}) => ({
    display: 'block',
    background: clicked ? '#1a720d' :'#c8eac3',
    padding: '30px',
    borderRadius: '30px'
}) );

export default function Study() {
    const [clicked, setClicked] = useState(false);
    return (
        <>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <FlexTable>
                <DivFlex justify='center'>
                    <FontAwesomeIcon icon={faArrowUp} />
                </DivFlex>
                <DivFlex justify='space-between'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <FontAwesomeIcon icon={faArrowRight} />
                </DivFlex>
                <DivFlex justify='center'>
                    <FontAwesomeIcon icon={faArrowDown} />
                </DivFlex>
            </FlexTable>
            <DivFlex>
                <MyToggleButton clicked={clicked} onClick={() => setClicked(!clicked)}>
                    トグルボタン
                </MyToggleButton>
            </DivFlex>
        </>
    );
}