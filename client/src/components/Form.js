import { useState } from 'react';
import toast from 'react-hot-toast';
import { httpGetApiKey, httpScheduleInterview } from '../requests';
import { toastConfig, buttonSx, textFieldSx, titleSx, subtitleSx } from '../settings';

import { 
    Button,
	TextField,
    Typography
 } from '@mui/material';


 const initialState = {
    email: '',
    name: ''
}


export default function Form() {

    const [apiKey, setApiKey] = useState('');
    const [inputData, setInputData] = useState(initialState);
    const [authorized, setAuthorized] = useState(false);

    const { email, name } = inputData;

    function handleApiKeyChange(event) {
        setApiKey(event.target.value);
    }

    function handleUserDataChange(event) {
		const { name, value } = event.target;
		setInputData({ ...inputData, [name]: value });
	}
    
    async function handleSendApiKey() {
        
        if (!apiKey) {
            toast('API key is required!', toastConfig);
            return;
        }
        
        const response = await httpGetApiKey(apiKey);
        
        if (response.authorized) {
            setAuthorized(true);
            setApiKey('');
        } 

        if (!response.authorized) {
            toast('Sending API key failed. Check internet connection or try it later or use a hammer.', toastConfig);
        }
    }

    async function handleSendUserData() {
        if (!email || !name) {
            toast('All fields are required!', toastConfig);
            return;
        }

        const userData = {
            email: email,
            name: name
        }

        const response = await httpScheduleInterview(userData);

        if (response.ok) {
            setInputData(initialState);
            toast('Data has been successfully submitted!', toastConfig);
        }
        if (response.error) {
            console.log("Data hasn't been submitted");
        }
    }

    return (<>
    <Typography variant='h4' sx={titleSx}>Assignment</Typography>
        <Typography variant='h6' sx={subtitleSx}>Sign In</Typography>
            <TextField
                sx={textFieldSx}
                value={apiKey}
                onChange={handleApiKeyChange}
                label='API key*'
                id='apiKey'
                name='apiKey'
                autoFocus
                variant='outlined'
                type='password'
                margin='dense'
            />
        <Button sx={buttonSx} variant="contained" label="Submit" onClick={handleSendApiKey}>Get Access</Button>

        <Typography variant='h6' sx={subtitleSx} >Applicant</Typography>
            <TextField 
                sx={textFieldSx} 
                value={email}
                onChange={handleUserDataChange}
                label='E-mail*'
                id='email'
                name='email'
                variant='outlined'
                type='text'
                margin='dense'
                disabled={!authorized}
            />
            <TextField 
                sx={textFieldSx} 
                value={name}
                onChange={handleUserDataChange}
                label='Name*'
                id='name'
                name='name'
                variant='outlined'
                type='text'
                margin='dense'
                disabled={!authorized}
            />
        <Button sx={buttonSx} variant="contained" label="Schedule Interview" onClick={handleSendUserData} disabled={!authorized}>Schedule Interview</Button>
    </>);
}