export default (state, action) => {
    switch (action.type) {
      case 'DELETE':
        return {
          ...state,
          users: state.users.filter(user => {
            return user.id !== action.Id;
          })
        }
      case 'ADD':
        return {
          ...state,
          users: [action.id, ...state.users]
        }
      case 'EDIT':
        const updateUser = action.Id;
        const updateUsers = state.users.map(user => {
          if (user.id === updateUser.id) {
            return updateUser;
          }
          return user;
        })
        return {
          ...state,
          users: updateUsers
        }
  
      default:
        return state;
    }
  }