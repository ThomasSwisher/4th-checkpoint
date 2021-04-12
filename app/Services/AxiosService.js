// NOTE Todos =================
export const sandboxApi = axios.create({
    //TODO Change YOURNAME to your actual name
    baseURL: "https://bcw-sandbox.herokuapp.com/api",
    timeout: 3000
});

// NOTE Quote ==========================
export const sandboxQuoteApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/quotes",
    timeout: 3000
});

// NOTE Background =======================
export const sandboxBackgroundApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/images",
    timeout: 3000
});

// NOTE Background =======================
export const sandboxTempApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/weather",
    timeout: 3000
});