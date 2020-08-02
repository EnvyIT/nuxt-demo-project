import { filterNamespace } from '~/utils/store-helper';

const Namespace = 'certificate/';

export const CertificateMutations = {
  SET_CERTIFICATES: Namespace + 'setCertificates'
};

export const CertificateActions = {
  SET_CERTIFICATES: Namespace + 'setCertificates'
};

export const CertificateGetters = {
  GET_CERTIFICATES: Namespace + 'getCertificates'
};

export const state = () => ({
  loadedCertificates: []
});

export const mutations = {
  [filterNamespace(CertificateMutations.SET_CERTIFICATES, Namespace)] (mutationState, payload) {
    mutationState.loadedPosts = payload;
  }
};

export const getters = {
  [filterNamespace(CertificateGetters.GET_CERTIFICATES, Namespace)] (getterState) {
    return getterState.loadedPosts;
  }
};

export const actions = {
  [filterNamespace(CertificateActions.SET_CERTIFICATES, Namespace)] (vuexContext, payload) {
    vuexContext.commit(filterNamespace(CertificateMutations.SET_CERTIFICATES, Namespace), payload);
  }
};
