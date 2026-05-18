import AssigmentList from "./AssigmentList.js";
import AssigmentCreate from "./AssigmentCreate.js";

export default {
  components: { AssigmentList, AssigmentCreate },
  template: `
        <section class="flex gap-6">
            <AssigmentList :assignments="filters.inProgress" title="In Progress">
              <AssigmentCreate @add="add"/>
            </AssigmentList>
            <AssigmentList 
              v-if="showCompleted"
              :assignments="filters.completed" 
              title="Completed" 
              can-toggle 
              @toggle="showCompleted = !showCompleted"
            />
        </section>
    `,
  data() {
    return {
      assignments: [],
      showCompleted: true,
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
