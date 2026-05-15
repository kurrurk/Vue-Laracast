import Assigment from "./Assigment.js";

export default {
  components: { Assigment },
  template: `
        <section v-show="assignments.length">
          <div class="flex items-center justify-between mb-2">
            <h2 class="font-bold text-2xl mb-2">{{ title }}</h2>
            <span class="badge badge-primary">{{ assignments.length }}</span>
          </div>
          <div class="flex gap-2 mb-3">
            <button 
              @click="currentTag = tag"
              v-for="tag in tags" 
              class="btn btn-dash btn-accent text-xs"
              :class="{'border-solid btn-info' : tag === currentTag }">#{{ tag }}</button>
          </div>
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
    tags() {
      return [
        "all",
        ...new Set(this.assignments.map((assignment) => assignment.tag)),
      ];
    },
  },
};
