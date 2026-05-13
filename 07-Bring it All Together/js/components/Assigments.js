import AssigmentList from "./AssigmentList.js";

export default {
  components: { AssigmentList },
  template: `
        <section class="space-y-6">
            <AssigmentList :assigments="filters.inProgress" title="In Progress"/>
            <AssigmentList :assigments="filters.completed" title="Completed"/>
        </section>
    `,
  data() {
    return {
      assignments: [
        { name: "Finish project", complete: false, id: 1 },
        { name: "Read chapter 4", complete: false, id: 2 },
        { name: "Turn in homework", complete: false, id: 3 },
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
};
