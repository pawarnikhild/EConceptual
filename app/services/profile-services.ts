import { Profile } from "../screens/Profile/ProfileTypes";

const BASE_URL = 'https://econceptual-interview-mock.vercel.app/api';

export const fetchProfile = async (token: string) => {
    try {
        const response = await fetch(`${BASE_URL}/profile`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        if (response.ok) {
            const data = await response.json();
            console.log('Fetch profile API call succeeded!')
            // console.log('Fetch profile API Data', data)
            // console.log('Fetch profile API success response', JSON.stringify(response))
            return data;
        } else {
            const errorData = await response.json();
            console.log('Fetch profile API call failed!')
            // console.log('Fetch profile API ErrorData', errorData)
            // console.log('Fetch profile API failure response', JSON.stringify(response))
            return { error: 'Failed to fetch profile.' };
        }
    } catch (error) {
        console.log('Unexpected error in fetch profile api function', error)
    }
};

export const updateProfile = async (token: string, profile: Profile) => {
    try {
        const response = await fetch(`${BASE_URL}/profile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(profile),
        });
        if (response.ok) {
            const data = await response.json();
            console.log('Update profile api call succeeded!')
            // console.log('Update profile api data', data)
            // console.log('Update profile api success response',JSON.stringify(response))
            return data;
        } else {
            const errorData = await response.json();
            console.log('Update profile api call failed!')
            // console.log('Update profile api error data', errorData)
            // console.log('Update profile api failure response', JSON.stringify(response))
            return { error: 'Failed to edit profile.' };
        }
    } catch (error) {
        console.log('Unexpected error in edit profile api function', error)
    }
};
