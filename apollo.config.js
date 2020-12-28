module.exports = {
    client: {
        name: 'client',
        includes: ['frontend/**/*.ts', 'frontend/**/*.tsx'],
        tagName: 'gql',
        addTypename: true,
        service: {
            // remote endpoint
            name: 'backend-sever',
            url: 'http://localhost:8000/graphql',
            // optional disable SSL validation check
            skipSSLValidation: true
        },
    },
};
