class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
}

getallcards() {
    return fetch(${this._baseUrl}/cardsallcards, {
        headers: this._headers
    }).then(this._handserveresponse);
}
}

const api = new Api({
    baseUrl: "https://api-requests-lcy6.onrender.com",
    headers: {
        "Content-Type": "application/json"
    }
});


export default api;