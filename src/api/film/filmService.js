export const handleResponseRegistr = (response) => {
    return response.text().then(text => {
        const data = text;
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                return "false"
            }
        }
        return data;
    });
}

export const rateUpdate = (film) => {
    const url = "http://localhost:8080/films/rate"
    const requestOptions = {
        method: 'PUT',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(film)
    };

    return fetch(url, requestOptions)
        .then(handleResponseRegistr);
}