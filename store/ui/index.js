import { filterNamespace } from '~/utils/store-helper';

const Namespace = 'ui/';

const initialMenuState = {
  isToggled: false,
  topBarStyle: {
    transform: '',
    position: '',
    top: ''
  },
  midBarStyle: {
    display: ''
  },
  bottomBarStyle: {
    transform: '',
    position: '',
    top: ''
  }
}

export const UIMutations = {
  TOGGLE_MENU: Namespace + 'toggleMenu'
};

export const UIActions = {
  TOGGLE_MENU: Namespace + 'toggleMenu'
};

export const UIGetters = {
  GET_MENU: Namespace + 'getMenu',
  IS_MENU_TOGGLED: Namespace + 'isMenuToggled'
};

export const state = () => ({
  menu: initialMenuState
});

const setEdgeBar = (element, { transform, position, top, isNegative }) => {
  if (isNegative === null || isNegative === undefined) {
    element.transform = 'rotate(' + transform + 'deg)';
    element.top = top + 'px';
  } else {
    element.transform = 'rotate(' + -transform + 'deg)';
    element.top = -top + 'px';
  }
  element.position = position;
}

const setBurgerMenu = (element, { isToggled, transform, position, display, top }) => {
  element.isToggled = isToggled;
  setEdgeBar(element.topBarStyle, { transform, position, top });
  setEdgeBar(element.bottomBarStyle, { transform, position, top, isNegative: true });
  setMidBar(element.midBarStyle, display)
}

const setMidBar = (element, display) => { element.display = display ? 'block' : 'none'; }

export const mutations = {
  [filterNamespace(UIMutations.TOGGLE_MENU, Namespace)] (mutationState) {
    const isToggled = mutationState.menu.isToggled;
    const menuConfig = isToggled ? { isToggled: !isToggled, transform: 0, position: 'static', display: true, top: 0 }
      : { isToggled: !isToggled, transform: 45, position: 'relative', display: false, top: 6 };
    setBurgerMenu(mutationState.menu, menuConfig);
  }
};

export const getters = {
  [filterNamespace(UIGetters.GET_MENU, Namespace)] (getterState) {
    return getterState.menu;
  },
  [filterNamespace(UIGetters.IS_MENU_TOGGLED, Namespace)] (getterState) {
    return getterState.menu.isToggled;
  }
};

export const actions = {
  [filterNamespace(UIActions.TOGGLE_MENU, Namespace)] (vuexContext, payload) {
    vuexContext.commit(filterNamespace(UIMutations.TOGGLE_MENU, Namespace), payload);
  }
};
