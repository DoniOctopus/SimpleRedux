import client from "../../Client";

export async function getGorest() {
    const {data}=await client.get('/users');
    return data;
}

export async function getSingleGorest(id) {
    const {data}=await client.get(`/users/${id}`);
    return data;
}
export async function createGorest(gorest) {
    const  {data} = await client.post('/users',gorest);
    return data;
}

export async function updateGorest(gorestID) {
    const  {data} = await client.put(`/users/${gorestID}`);
    return data;
}

export async function deleteGorest(gorestID) {
    const {data}=await client.delete(`/users/${gorestID}`);
    return data;
}
