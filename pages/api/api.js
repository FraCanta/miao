import axios from "axios";

export const axiosInstance = () => {
  return axios.create({
    baseURL: "https://api.storyblok.com/v2/cdn/stories/",
    params: {
      token: "g2BrI1AvpQnP8oOYHUFiyAtt",
      version: "draft",
    },
    timeout: 5000,
  });
};

export const fetchAllPosts = async (per_page = 6, page = 1) => {
  try {
    const { data } = await axiosInstance().get("/", {
      params: {
        page,
        per_page,
      },
    });
    return data?.stories;
  } catch (error) {
    return null;
  }
};

export const fetchPost = async (slug) => {
  try {
    const { data } = await axiosInstance().get("/posts/" + slug);
    return data.story;
  } catch (error) {
    return null;
  }
};

export const fetchAllPostsSlugs = async () => {
  const data = await fetchAllPosts();
  const slugs = data.map((post) => "/post/" + post.slug);
  return slugs;
};
