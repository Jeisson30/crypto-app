export const fetchData = async () => {
    try {
        const response = await fetch('https://pluriza.s3.us-east-1.amazonaws.com/response.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Por favor, intente más tarde');
    }
};