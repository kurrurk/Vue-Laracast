import Assigment from "./Assigment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

export default {
  components: { Assigment, AssignmentTags, Panel },
  template: `
        <Panel v-show="assignments.length" class="w-90">
          <div class="flex items-center justify-between mb-5">
            <h2 class="font-bold text-2xl">
              {{ title }}
              ({{ assignments.length }})
            </h2>
            <button v-show="canToggle" @click="$emit('toggle')" className="btn btn-square border-secondary rounded-sm btn-active hover:btn-secondary pb-1 flex items-center font-normal justify-center text-4xl leading-none">
              &times;
            </button>
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
          <slot></slot>
          <template #footer>
            This is the footer content.
          </template>
        </Panel>
  `,
  props: {
    assignments: Array,
    title: String,
    canToggle: { type: Boolean, default: false },
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
