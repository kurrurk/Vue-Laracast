import AssigmentList from "./AssigmentList.js";

export default {
  components: { AssigmentList },
  template: `
        <section class="space-y-6">
            <AssigmentList :assigments="filters.inProgress" title="In Progress"/>
            <AssigmentList :assigments="filters.completed" title="Completed"/>


            <form @submit.prevent="add">
              <div class="border border-secondary rounded-xs px-2 py-2 flex items-center gap-2"> 
                  <input v-model="newAssignment" type="text" placeholder="New assignment..." class="border border-secondary rounded-xs px-2 py-2 mr-2">
                  <button type="submit" class="btn btn-primary btn-outline rounded-xs px-3 py-2">Add</button>
              </div>
            </form>
        </section>
    `,
  data() {
    return {
      assignments: [
        { name: "Finish project", complete: false, id: 1 },
        { name: "Read chapter 4", complete: false, id: 2 },
        { name: "Turn in homework", complete: false, id: 3 },
      ],
      newAssignment: "",
    };
  },
  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.complete,
        ),
        completed: this.assignments.filter((assignment) => assignment.complete),
      };
    },
  },
  methods: {
    add() {
      this.assignments.push({
        name: this.newAssignment,
        complete: false,
        id: this.assignments.length + 1,
      });
      this.newAssignment = "";
    },
  },
};
