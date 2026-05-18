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
      assignments: [],
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
  created() {
    fetch("http://localhost:3001/assignments")
      .then((response) => response.json())
      .then((data) => {
        this.assignments = data;
      });
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
