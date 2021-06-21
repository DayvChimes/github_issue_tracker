import gql from "graphql-tag";

export const SIGN_UP = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      user {
        id
        username
        email
      }
    }
  }
`;


/*export const USER = gql `
query ($username: String!) {
    user(login:$username) {
      email
      id
      databaseId
      repositories(first: 10, orderBy:{field: CREATED_AT, direction: ASC}){
       edges {
          node {
            description
          }
        }
    }
  }
  }
  `;

export const USER_REPO = gql `
query ($username: String!, $repository: String!) {
  repository(owner: username, name: repository) {
    issues(first: 10, orderBy: {field: CREATED_AT, direction: DESC}) {
      edges {
        node {
          author {
            login
          }
          repository {
            name
          }
          title
          body
          closed
          viewerDidAuthor
          comments(first: 1, orderBy: {field: UPDATED_AT, direction: DESC}) {
            edges {
              node {
                author {
                  login
                }
                body
              }
            }
          }
        }
      }
    }
  }
  }
  `;*/