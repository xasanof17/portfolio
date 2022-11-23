import { request, gql } from "graphql-request";

const graphqlAPI = process.env.GRAPHCMS_API;

export const getSkills = async () => {
  const query = gql`
    query MyQuery {
      skillsConnection {
        edges {
          node {
            id
            title
            slug
            photo {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.skillsConnection.edges;
};

export const getProjects = async () => {
  const query = gql`
    query MyQuery {
      projectsConnection {
        edges {
          node {
            id
            title
            slug
            bio
            code
            demo
            photo {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.projectsConnection.edges;
};

export const getResume = async () => {
  const query = gql`
    query MyQuery {
      resumesConnection {
        edges {
          node {
            id
            title
            bio
            photo {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.resumesConnection.edges;
};
