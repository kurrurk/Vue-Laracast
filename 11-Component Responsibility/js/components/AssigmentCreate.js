export default {
  template: `
    <form @submit.prevent="add">
        <div class="border border-secondary rounded-xs px-2 py-2 flex items-center gap-2"> 
            <input v-model="newAssignment" type="text" placeholder="New assignment..." class="border border-secondary rounded-xs px-2 py-2 mr-2">
            <button type="submit" class="btn btn-primary btn-outline rounded-xs px-3 py-2">Add</button>
        </div>
    </form>
  `,
  data() {
    return {
      newAssignment: "",
    };
  },
  methods: {
    add() {
      this.$emit("add", this.newAssignment);
      this.newAssignment = "";
    },
  },
};
