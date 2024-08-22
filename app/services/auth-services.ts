const BASE_URL = 'https://econceptual-interview-mock.vercel.app/api';

export const login = async (email: string, password: string) => {
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        if (response.ok) {
            const data = await response.json();
            console.log('Login api call succeeded!')
            // console.log('Login api data', data)
            // console.log('Login api success response',JSON.stringify(response))
            return data.token;
        } else {
            const errorData = await response.json();
            console.log('Login api call failed!')
            // console.log('Login api error data', errorData)
            // console.log('Login api failure response', JSON.stringify(response))
            return { error: 'Invalid credentials. Please try again.' };
        }
    } catch (error) {
        console.log('Unexpected error in login api function', error)
    }
};
