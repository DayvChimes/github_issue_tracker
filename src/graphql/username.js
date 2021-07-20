import gql from "graphql-tag";
import graphQlClient from "../graphql/client";

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
              labels(first: 20) {
                nodes {
                  name
                  id
                }
              }
              comments(
                first: 50
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
                      id
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

export const USERNAME_FILTERED_ISSUES = gql`
  query (
    $username: String!
    $first: Int!
    $after: String
    $field: IssueOrderField!
    $labels: [String!]
  ) {
    user(login: $username) {
      login
      id
      issues(
        first: $first
        after: $after
        orderBy: { field: $field, direction: DESC }
        labels: $labels
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
              labels(first: 20) {
                nodes {
                  name
                  id
                }
              }
              comments(
                first: 50
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
                      id
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



export const USERNAME_ISSUES_STATUS = gql`
  query (
    $username: String!
    $first: Int!
    $after: String
    $field: IssueOrderField!
    $labels: [String!]
  ) {
    user(login: $username) {
      login
      id
      issues(
        first: $first
        after: $after
        orderBy: { field: $field, direction: DESC }
        labels: $labels
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
              labels(first: 20) {
                nodes {
                  name
                  id
                }
              }
              comments(
                first: 50
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
                      id
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