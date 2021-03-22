import { snakeCase } from 'snake-case';
export function objectToSnakeCase(obj) {
    return changeCase(obj, snakeCase);
}

function changeCase(obj, caseFunction) {
    return Object.fromEntries(
        Object.keys(obj).map((k) => {
            const value = isObject(obj[k]) ? changeCase(obj[k], caseFunction) : obj[k];
            console.log(k, obj[k], value);
            return [caseFunction(k), value];
        })
    );
}

function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

export const saveSurfDay = (csrfToken, surfDay) =>
    fetch('http://localhost:3000/surf_days', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrfToken
        },
        body: JSON.stringify(objectToSnakeCase(surfDay))
    }).then((response) => response.json());
