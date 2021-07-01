import gql from "graphql-tag";


export const REPOSITORY_LOGIN = gql`
  query ($username: String!, $repository: String!) {
  repository(owner: $username, name: $repository) {
    name
    id
    owner{
      login
    }
  }
}
`;

export const REPOSITORY_ISSUES = gql`
  query ($username: String!, $repository: String!, $first: Int!, $after: String) {
  repository(owner: $username, name: $repository) {
    name
    id
    owner{
      login
    }
    issues(first: $first, after: $after, orderBy: {field: CREATED_AT, direction: DESC}) {
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
            state
            title
            number
            body
            labels(first: 100) {
              nodes {
                name
              }
            }
            comments(first: $first, orderBy: {field: UPDATED_AT, direction: DESC}) {
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
