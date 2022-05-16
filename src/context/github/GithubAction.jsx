const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  })

  const { items } = await response.json()

  return items
}

// export const getUser = async (login) => {
//   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   })

//   if (response.status === 404) {
//     window.location = '/notfound'
//   } else {
//     const data = await response.json()

//     return data
//   }
// }

// export const getUserRepos = async (login) => {
//   const params = new URLSearchParams({
//     sort: 'created',
//     per_page: 10,
//   })

//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   })

//   const data = await response.json()

//   return data
// }

export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  })

  const [user, repos] = await Promise.all([
    fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }),
    fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }),
  ]).then(async (response) => {
    if (response[0].status === 404) window.location = '/notfound'
    const user = await response[0].json()
    const repos = await response[1].json()

    return [user, repos]
  })

  return { user: user, repos: repos }
}
