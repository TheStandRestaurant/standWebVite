import { client, parseData } from './client';

export async function getItems() {
    const resp = await client
        .from('items')
        .select('id, description, name, price, type');
    return parseData(resp);
}
