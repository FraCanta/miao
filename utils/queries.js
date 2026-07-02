// lib/queries.js
import { gql } from "graphql-request";

// 🔹 Recupera tutti i post con categorie, tags e featured image
export const GET_ALL_POSTS = gql`
  query getAllPosts {
    posts(first: 1000) {
      edges {
        node {
          id
          databaseId
          title
          uri
          slug
          excerpt
          date
          modified
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
              slug
              databaseId
            }
          }
          tags {
            nodes {
              name
              slug
              databaseId
            }
          }
          author {
            node {
              nickname
              name
            }
          }
        }
      }
    }
  }
`;

// Query leggera per la Home: recupera solo i campi realmente visualizzati.
export const GET_HOME_POSTS = gql`
  query GetHomePosts {
    posts(
      first: 3
      where: {
        tag: "miaographics"
        orderby: { field: DATE, order: DESC }
      }
    ) {
      edges {
        node {
          id
          databaseId
          title
          slug
          excerpt
          date
          content
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          author {
            node {
              id
              name
              nickname
            }
          }
        }
      }
    }
  }
`;

// Indice del blog: una sola richiesta e nessun contenuto HTML completo.
// La pagina filtra e pagina questo payload leggero lato server.
export const GET_BLOG_INDEX = gql`
  query GetBlogIndex {
    posts(
      first: 100
      where: {
        tag: "miaographics"
        orderby: { field: DATE, order: DESC }
      }
    ) {
      edges {
        node {
          id
          databaseId
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
              slug
              databaseId
            }
          }
        }
      }
    }
    categories(first: 100) {
      nodes {
        id
        name
        slug
        databaseId
      }
    }
  }
`;

export const GET_POST_SLUGS = gql`
  query GetPostSlugs {
    posts(first: 100, where: { tag: "miaographics" }) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export const GET_POST_PAGE = gql`
  query GetPostPage($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      databaseId
      title
      slug
      excerpt
      content
      date
      modified
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          name
          slug
          databaseId
        }
      }
      tags {
        nodes {
          name
          slug
        }
      }
      author {
        node {
          name
          nickname
        }
      }
    }
    recentPosts: posts(
      first: 5
      where: {
        tag: "miaographics"
        orderby: { field: DATE, order: DESC }
      }
    ) {
      edges {
        node {
          id
          title
          slug
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

// 🔹 Recupera tutte le categorie
export const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    categories(first: 100) {
      nodes {
        id
        name
        slug
        databaseId
      }
    }
  }
`;

// 🔹 Query minimale per sitemap
export const GET_POSTS_FOR_SITEMAP = gql`
  query getPostsForSitemap {
    posts(first: 1000) {
      edges {
        node {
          slug
          date
          modified
        }
      }
    }
  }
`;

// 🔹 Recupera solo i commenti di un singolo post (con eventuali reply)
export const GET_POST_COMMENTS = gql`
  query GetPostComments($postId: ID!) {
    post(id: $postId, idType: DATABASE_ID) {
      databaseId
      comments(where: { parent: null }) {
        nodes {
          id
          databaseId
          content
          dateGmt
          author {
            node {
              name
              email
              avatar {
                url
              }
            }
          }
          replies {
            nodes {
              id
              databaseId
              content
              dateGmt
              author {
                node {
                  name
                  email
                  avatar {
                    url
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

// 🔹 Ricerca post per parola chiave
export const SEARCH_POSTS = gql`
  query SearchPosts($search: String!) {
    posts(where: { search: $search }, first: 20) {
      edges {
        node {
          id
          databaseId
          title
          uri
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          tags {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  }
`;
