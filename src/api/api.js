const API_BASE_URL = "http://10.0.2.2:3000/";
const API_BASE_URL2 = "https://api.countrystatecity.in/" 
export const API_KEY = 'NzFxa3FNeUtwZ1Zud0pLVU92RzJRME9ENW8xcE1CcFpWRUVxbUI3cQ=='

// Function to make GET requests
export const getRequest = async (endpoint, params = {}) => {
    try {
        const url = new URL(`${API_BASE_URL}${endpoint}`);
       
        Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        // if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        return await response.json();
    } catch (error) {
        console.error("GET Error:", error);
        throw error;
    }
};
export const getRequestForCountry = async (endpoint, params = {}) => {
    try {
        const url = new URL(`${API_BASE_URL2}${endpoint}`);
       
        Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
        var headers = new Headers();
        headers.append("X-CSCAPI-KEY", API_KEY);
        headers.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };
        const response = await fetch(url, requestOptions);

        // if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        return await response.json();
    } catch (error) {
        console.error("GET Error:", error);
        throw error;
    }
};

// Function to make POST requests
export const postRequest = async (endpoint, data) => {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        // if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        return await response.json();
    } catch (error) {
        console.error("POST Error:", error);
        throw error;
    }
};

// Function to make PUT requests
export const putRequest = async (endpoint, data) => {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        // if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        return await response.json();
    } catch (error) {
        console.error("PUT Error:", error);
        throw error;
    }
};

// Function to make DELETE requests
export const deleteRequest = async (endpoint) => {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        // if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        return await response.json();
    } catch (error) {
        console.error("DELETE Error:", error);
        throw error;
    }
}