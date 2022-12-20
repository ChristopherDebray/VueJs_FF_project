export const APISettings = {
    apiKey: import.meta.env.VITE_XIVAPI_KEY,
    privateKeyString: `private_key=${import.meta.env.VITE_XIVAPI_KEY}`,
    headers: new Headers({
        'Accept': 'application/json'
    }),
    baseURL: import.meta.env.VITE_XIVAPI_URL,
}