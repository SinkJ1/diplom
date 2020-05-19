export const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                return "false"
            }
        }
        return data;
    });
}

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

export const autentification = (user) => {
    const requestOptions = { method: 'GET', headers: { authorization: 'Basic ' + window.btoa(user.login + ":" + user.password) } };
    return fetch(`http://localhost:8080/users/login/${user.login}`, requestOptions).then(handleResponse);
}

export const getByLogin = (login) => {
    const requestOptions = { method: 'GET' };
    return fetch(`http://localhost:8080/users/login/${login}`, requestOptions).then(handleResponse);
}

export const registration = (user) => {
    const url = "http://localhost:8080/users/registration"
    const requestOptions = {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(user)
    };

    return fetch(url, requestOptions)
        .then(handleResponseRegistr);
}