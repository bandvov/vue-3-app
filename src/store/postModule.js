import axios from "axios";
export default {
  state: () => ({
    firstLoad: true,
    showModal: false,
    posts: [],
    isPostLoading: true,
    error: false,
    selectedSort: "",
    selectOptions: [
      { value: "title", name: "Title" },
      { value: "body", name: "Body" },
    ],
    searchQuery: "",
    page: 0,
    limit: 10,
    totalPages: 0,
  }),
  mutations: {
    setFirstLoad(state, bool) {
      state.firstLoad = bool;
    },
    setShowModal(state, bool) {
      state.showModal = bool;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setIsPostLoading(state, bool) {
      state.isPostLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setSelectedSort(state, payload) {
      state.selectedSort = payload;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setError(state, bool) {
      state.error = bool;
    },
  },
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) => {
        return post1[state.selectedSort]?.localeCompare(
          post2[state.selectedSort]
        );
      });
    },
    sortedSearchPosts(state, getters) {
      if (state.searchQuery) {
        return getters.sortedPosts.filter((post) =>
          post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }
      return getters.sortedPosts;
    },
  },
  actions: {
    fetchPosts({ state, commit }) {
      commit("setIsPostLoading", true);
      setTimeout(async () => {
        const response = await axios
          .get("https://jsonplaceholder.typicode.com/posts", {
            params: {
              _limit: state.limit,
              _page: state.page,
            },
          })
          .catch((err) => {
            alert("error");
            commit("setError", true);
          })
          .finally(() => {
            commit("setIsPostLoading", false);
          });
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit("setPosts", response.data);
        commit("setFirstLoad", false);
        commit("setPage", 1);
      }, 700);
    },
    loadPosts({ state, commit }) {
      if (!state.firstLoad) {
        commit("setPage", state.page + 1);
        setTimeout(async () => {
          const response = await axios
            .get("https://jsonplaceholder.typicode.com/posts", {
              params: {
                _limit: state.limit,
                _page: state.page,
              },
            })
            .catch((err) => {
              alert("error");
              commit("setError", true);
            });
          commit(
            "setTotalPages",
            Math.ceil(response.headers["x-total-count"] / state.limit)
          );
          commit("setPosts", [...state.posts, ...response.data]);
        }, 700);
      }
    },
  },
  namespaced: true,
};
