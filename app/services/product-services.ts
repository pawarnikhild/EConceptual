const BASE_URL = 'https://econceptual-interview-mock.vercel.app/api';

export const fetchProducts = async (page: number, token: string) => {
    try {
        const response = await fetch(`${BASE_URL}/product?page=${page}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        if (response.ok) {
            const data = await response.json();
            console.log('Product api call succeeded!')
            // console.log('Product api data', data)
            // console.log('Product api success response', JSON.stringify(response))
            return data;
        } else {
            const errorData = await response.json();
            console.log('Product api call failed!')
            // console.log('Product api error Data', errorData)
            // console.log('Product api failure response', JSON.stringify(response))
            return { error: 'Failed to fetch products. Please try again by scrolling down.' };
        }
    } catch (error) {
        console.log('Unexpected error in product api function', error)
    }
};
