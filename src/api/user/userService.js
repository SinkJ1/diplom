export const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                return "false"
            }
        }
        console.log(data)
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
        console.log(data)
        return data;
    });
}

export const handleResponseCustom = (response) => {
    return response.text().then(text => {
        const data = text;
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                return "false"
            }
        }
        console.log(data)
        return response.status;
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

export const getById = (id) => {
    const requestOptions = { method: 'GET' };
    return fetch(`http://localhost:8080/users/id/${id}`, requestOptions).then(handleResponse);
}

export const subscribeOnFilm = (user) => {
    
    const url = "http://localhost:8080/users/expected"
    const requestOptions = {
        method: 'PUT',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(user)
    };

    return fetch(url, requestOptions)
        .then(handleResponseRegistr);
}

export const writeComment = (comment) =>{
    
    const url = "http://localhost:8080/films/comment"
    const requestOptions = {
        method: 'PUT',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(comment)
    };

    return fetch(url, requestOptions)
        .then(handleResponseCustom);
}

export const deleteComment = (film, id) =>{
    const url = `http://localhost:8080/films/delComment/${id}`
    const requestOptions = {
        method: 'PUT',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(film)
    };

    return fetch(url, requestOptions)
        .then(handleResponseRegistr);
}

export const getCommentsByFilmId = (id) =>{
    const requestOptions = { method: 'GET' };
    return fetch(`http://localhost:8080/films/comment/${id}`, requestOptions).then(handleResponse);

}

export const expected = (login) =>{
    const requestOptions = { method: 'GET' };
    return fetch(`http://localhost:8080/users/expected/${login}`, requestOptions).then(handleResponse);

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

export const updateUser = (user) => {
    const url = "http://localhost:8080/users/settings"
    const requestOptions = {
        method: 'PUT',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(user)
    };

    return fetch(url, requestOptions)
        .then(handleResponseRegistr);
}