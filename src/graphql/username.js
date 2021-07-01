import gql from "graphql-tag";

export const USERNAME_LOGIN = gql`
  query ($username: String!) {
    user(login: $username) {
      login
      id
    }
  }
`;

export const USERNAME_ISSUES = gql`
  query ($username: String!, $first: Int!, $after: String) {
    user(login: $username) {
      login
      id
      issues(
        first: $first
        after: $after
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        edges {
          ... on IssueEdge {
            node {
              author {
                login
              }
              repository {
                name
              }
              createdAt
              id
              number
              state
              title
              body
              labels(first: 100) {
                nodes {
                  name
                }
              }
              comments(
                first: $first
                orderBy: { field: UPDATED_AT, direction: DESC }
              ) {
                pageInfo {
                  startCursor
                  endCursor
                  hasNextPage
                  hasPreviousPage
                }
                edges {
                  ... on IssueCommentEdge {
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
    }
  }
`;
