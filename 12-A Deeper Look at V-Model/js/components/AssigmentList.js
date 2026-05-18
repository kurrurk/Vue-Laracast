import Assigment from "./Assigment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
  components: { Assigment, AssignmentTags },
  template: `
        <section v-show="assignments.length">
          <div class="flex items-center justify-between mb-2">
            <h2 class="font-bold text-2xl mb-2">{{ title }}</h2>
            <span class="badge badge-primary">{{ assignments.length }}</span>
          </div>
          <assignment-tags 
            v-model:currentTag="currentTag"
            :initial-tags="assignments.map(a => a.tag)"
          />
          <ul class="border border-secondary rounded-xs divide-y divide-secondary">
            <Assigment 
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment" 
            />
          </ul>
        </section>
  `,
  props: {
    assignments: Array,
    title: String,
  },
  data() {
    return {
      currentTag: "all",
    };
  },
  computed: {
    filteredAssignments() {
      if (!this.currentTag || this.currentTag === "all")
        return this.assignments;

      return this.assignments.filter(
        (assignment) => assignment.tag === this.currentTag,
      );
    },
  },
};
