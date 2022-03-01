const BASE_URL = 'https://localhost:3000';

export async function httpGetApiKey(apiKey) {
    try{
        const request = await fetch(`${BASE_URL}/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                apiKey: apiKey,
            })
        });
        const response = await request.json();
        return response;

    } catch(err) {
        console.error('The request has failed.\n\n', err);
        return { authorized: false};
    }
}

export async function httpScheduleInterview(userData) {
    try {
        const request = await fetch(`${BASE_URL}/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const response = await request.json();
        return response;

    } catch(err) {
        console.log('The request has failed.\n\n', err);
        return { authorized: false};
    }
}