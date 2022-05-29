import './App.css';
import {ApolloClient, InMemoryCache, HttpLink,from, ApolloProvider} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import GetTodos from './Components/GetTodo';
import AddTodo from './Components/AddTodo';

const errorLink = onError(({graphqlErrors,networkError})=>{
if(graphqlErrors){
  graphqlErrors.map(({message,location,path})=>{
    console.log(`Graphql Error: ${message}`);
  });
}
})
const link = from([
  errorLink,
  new HttpLink({uri: 'http://localhost:3000/graphql'})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <GetTodos/> */}
      <AddTodo/>
    </ApolloProvider>
  );
}

export default App;
