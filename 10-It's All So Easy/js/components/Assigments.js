import AssigmentList from "./AssigmentList.js";
import AssigmentCreate from "./AssigmentCreate.js";

export default {
  components: { AssigmentList, AssigmentCreate },
  template: `
        <section class="space-y-6">
            <AssigmentList :assignments="filters.inProgress" title="In Progress"/>
            <AssigmentList :assignments="filters.completed" title="Completed"/>

            <AssigmentCreate @add="add"/>
        </section>
    `,
  data() {
    return {
      assignments: [
        { name: "Finish project", complete: false, id: 1, tag: "math" },
        { name: "Read chapter 4", complete: false, id: 2, tag: "science" },
        { name: "Turn in homework", complete: false, id: 3, tag: "history" },
      ],
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
    add(newAssignment) {
      this.assignments.push({
        name: newAssignment,
        complete: false,
        id: this.assignments.length + 1,
      });
    },
  },
};
