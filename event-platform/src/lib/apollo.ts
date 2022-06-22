import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nkzvbc0cl001xm7anp27jv/master',
  cache: new InMemoryCache()
})


