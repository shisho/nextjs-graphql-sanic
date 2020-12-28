import { GetServerSideProps } from 'next'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import { GetGqlData } from './__generated__/GetGqlData'

// SSR
export const getServerSideProps: GetServerSideProps = async (context) => {
    const client = new ApolloClient({
        uri: `http://${process.env.GRAPHQL_SERVER_ADDRESS}`,
        cache: new InMemoryCache()
    });
    const { data } = await client.query<GetGqlData>({
        query: gql`
            query GetGqlData{
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

type Props = {
    data: GetGqlData
}

const GraphQL = ({ data }: Props) => {
    return (<div> {JSON.stringify(data, null, 2)}
    </div>);
}
export default GraphQL
