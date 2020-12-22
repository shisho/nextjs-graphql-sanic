from graphql_server.sanic import GraphQLView
from sanic import Sanic

from schema import schema

app = Sanic(name="Sanic Graphql App")

app.add_route(
    GraphQLView.as_view(schema=schema, graphiql=True),
    '/graphql'
)

# Optional, for adding batch query support (used in Apollo-Client)
app.add_route(
    GraphQLView.as_view(schema=schema, batch=True),
    '/graphql/batch'
)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
