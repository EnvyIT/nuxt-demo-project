import { filterNamespace } from '~/utils/store-helper';

const Namespace = 'blog/';

export const BlogMutations = {
  SET_BLOGS: Namespace + 'setBlogPosts'
};

export const BlogActions = {
  SET_BLOGS: Namespace + 'setBlogPosts'
};

export const BlogGetters = {
  GET_BLOGS: Namespace + 'getBlogPosts'
};

export const state = () => ({
  loadedBlogs: []
});

export const mutations = {
  [filterNamespace(BlogMutations.SET_BLOGS, Namespace)] (mutationState, payload) {
    mutationState.loadedPosts = payload;
  }
};

export const getters = {
  [filterNamespace(BlogGetters.GET_BLOGS, Namespace)] (getterState) {
    return getterState.loadedPosts;
  }
};

export const actions = {
  [filterNamespace(BlogActions.SET_BLOGS, Namespace)] (vuexContext, payload) {
    vuexContext.commit(filterNamespace(BlogMutations.SET_BLOGS, Namespace), payload);
  }
};
