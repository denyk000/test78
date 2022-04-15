import { getCurrentInstance } from "vue";

export default {
  computed: {
    uid() {
      const instance = getCurrentInstance();
      const name = instance.type.name
        .split(/\B(?=[A-Z])/)
        .map((i) => i.toLowerCase())
        .join("-");
      return name + instance.uid;
    },
  },
};
