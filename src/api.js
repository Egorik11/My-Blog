import axios from 'axios';

async function getRequest() {
  const key = '2rM7mpb8JhDVg-T1BUfuSR8yr3_TDhxeWMCgsemVMb0';
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/?client_id=${key}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Error');
  }
}
export { getRequest };
