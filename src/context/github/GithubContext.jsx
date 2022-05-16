import { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

GithubProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GithubContext
