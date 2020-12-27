import { GetServerSideProps } from 'next'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// SSR
export const getServerSideProps: GetServerSideProps = async (context) => {
    const client = new ApolloClient({
        uri: `http://${process.env.GRAPHQL_SERVER_ADDRESS}`,
        cache: new InMemoryCache()
    });
    const { data } = await client.query({
        query: gql`
            {
                human(id: "1000") {
                    name
                    appearsIn
                    friends{
                        name
                    }
                }
                droid(id: "2001") {
                    name
                }
            }
        `
    });

    return {
        props: {
            data: data
        }
    }
}

export default function GraphQL({ data }) {
    return (<div> {JSON.stringify(data, null, 2)}
    </div>);
}
