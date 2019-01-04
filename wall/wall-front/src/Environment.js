import {Environment, Network, RecordSource, Store} from 'relay-runtime';

// 2
const store = new Store(new RecordSource());

// 3
const network = Network.create((operation, variables) => {
    // 4
    return fetch('/g/', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json()
    })
});

// 5
const environment = new Environment({
    network,
    store,
});

// 6
export default environment