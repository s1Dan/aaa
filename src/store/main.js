import { defineStore } from 'pinia';
import observeWindowSize from '@/utils/observeWindowSize';

const getDefaultState = () => ({
  windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
  isLoading: false,
});

const useMainStore = defineStore('main', {
  state: getDefaultState,
  getters: {
    isMobile: (state) => state.windowWidth < 729,
  },
  actions: {
    observeWindowSize() {
      observeWindowSize(({ width }) => {
        this.windowWidth = width;
      });
    },

    setIsLoading(isLoading) {
      this.isLoading = isLoading;
    },
  },
});

export default useMainStore;
