import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
// import ApolloClient from 'apollo-boost'
// import { ApolloProvider } from '@apollo/react-hooks'

// const client = new ApolloClient({
//   uri: 'http://localhost:5000/graphql'
// })

const Root: React.FC = () => (
  <Provider store={store}>
    {/* <ApolloProvider client={client}> */}
      <App />
    {/* </ApolloProvider> */}
  </Provider>
)

export default Root
