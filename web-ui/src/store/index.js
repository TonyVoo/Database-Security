import { reactive } from 'vue'
const store = ({
    // Create a state with the reactive function we imported previously, this will manage the reactivity for us
    state: reactive({
      token: null,
      email:''
      // If this is null is for the example,
      // of course you can initialize the
      // counter with 0 directly
    }),
    // This section will handle the getters
    getters: {
      getToken() {
        return store.state.token
      },
      getEmail(){
        return store.state.email
      }
    },
    // This section will manage the changes into the state
    mutations: {
      setToken(token) {
        store.state.token = token
      },
      setEmail(email){
        store.state.email = email
      }
    },
    // This section will manage the actions needed for our store
    actions: {
      initialize() {
        store.state.token = null
        store.state.email = 'Welcome'
      }
    }
  })
  
export default store
