const BASE_URL = 'https://localhost:3001';

export async function httpGetApiKey(apiKey) {
    const request = await fetch(`${BASE_URL}/auth`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            apiKey: apiKey,
        })
    });
    const response = await request.json();

    return response;
}

export async function httpScheduleInterview(userData) {
    const request = await fetch(`${BASE_URL}/submit`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    const response = await request.json();

    return response;
}