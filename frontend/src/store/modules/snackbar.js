const state = {
    content: '',
    bottom: false,
    color: '',
    visible: false,
    btnColor: '',
}

const mutations = {
  setErr(state, err) {
    state.content = err.response.statusText + ": " + err.response.data.detail
    state.bottom = true;
    state.btnColor = "white"
    state.color = "error"
    state.visible = true
  },
  setInfo(state, info) {
    state.content = info.statusText + ": " + info.config.data
    state.bottom = true;
    state.color = ""
    state.btnColor = ""
    state.visible = true
  },
  clearSnack(state) {
      state.content = ''
      state.bottom = false,
      state.btnColor = ""
      state.color = "",
      state.visible = false
  }
};

export default {
    namespaced: true,
    state,
    mutations,
  };