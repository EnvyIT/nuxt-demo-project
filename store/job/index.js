import { filterNamespace } from '~/utils/store-helper';

const Namespace = 'job/';

export const JobMutations = {
  SET_JOBS: Namespace + 'setJobs'
};

export const JobActions = {
  SET_JOBS: Namespace + 'setJobs'
};

export const JobGetters = {
  GET_JOBS: Namespace + 'getJobs'
};

export const state = () => ({
  loadedJobs: []
});

export const mutations = {
  [filterNamespace(JobMutations.SET_JOBS, Namespace)] (mutationState, payload) {
    mutationState.loadedPosts = payload;
  }
};

export const getters = {
  [filterNamespace(JobGetters.GET_JOBS, Namespace)] (getterState) {
    return getterState.loadedPosts;
  }
};

export const actions = {
  [filterNamespace(JobActions.SET_JOBS, Namespace)] (vuexContext, payload) {
    vuexContext.commit(filterNamespace(JobMutations.SET_JOBS, Namespace), payload);
  }
};
