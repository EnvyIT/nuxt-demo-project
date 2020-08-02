import { filterNamespace } from '~/utils/store-helper';

const Namespace = 'education/';

export const EducationMutations = {
  SET_EDUCATIONS: Namespace + 'setEducations'
};

export const EducationActions = {
  SET_EDUCATIONS: Namespace + 'setEducations'
};

export const EducationGetters = {
  GET_EDUCATIONS: Namespace + 'getEducations'
};

export const state = () => ({
  loadedEducations: []
});

export const mutations = {
  [filterNamespace(EducationMutations.SET_EDUCATIONS, Namespace)] (mutationState, payload) {
    mutationState.loadedPosts = payload;
  }
};

export const getters = {
  [filterNamespace(EducationGetters.GET_EDUCATIONS, Namespace)] (getterState) {
    return getterState.loadedPosts;
  }
};

export const actions = {
  [filterNamespace(EducationActions.SET_EDUCATIONS, Namespace)] (vuexContext, payload) {
    vuexContext.commit(filterNamespace(EducationMutations.SET_EDUCATIONS, Namespace), payload);
  }
};
