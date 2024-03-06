import { useState } from 'react';
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { styled } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowLeft, faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons'

const DivFlex = styled('div')({
    display: 'flex',
});

const MyLabel = styled(FormControlLabel)( ({checked}) => ({
    display: 'block',
    background: checked ? '#1a720d' :'#c8eac3',
    padding: '30px',
    borderRadius: '30px'
}) );

const MyCheckbox = styled(Checkbox)`
    display:none
`;

export default function Study() {
    const [checked, setChecked] = useState(false);
    return (
        <>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <DivFlex sx={{ maxWidth: '50px', flexFlow: 'column' }}>
                <DivFlex sx={{ justifyContent: 'center'}}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </DivFlex>
                <DivFlex sx={{ justifyContent: 'space-between'}}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <FontAwesomeIcon icon={faArrowRight} />
                </DivFlex>
                <DivFlex sx={{ justifyContent: 'center'}}>
                    <FontAwesomeIcon icon={faArrowDown} />
                </DivFlex>
            </DivFlex>
            <DivFlex>
                <MyLabel 
                    control={<MyCheckbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />} 
                    checked={checked} 
                    label="トグルボタン" 
                />
            </DivFlex>
        </>
    );
}