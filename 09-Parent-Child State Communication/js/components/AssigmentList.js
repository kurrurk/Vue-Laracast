import Assigment from "./Assigment.js";

export default {
  components: { Assigment },
  template: `
        <section v-show="assignments.length">
          <h2 class="font-bold text-2xl mb-2">{{ title }}</h2>
          <ul class="border border-secondary rounded-xs divide-y divide-secondary">
            <Assigment 
                    v-for="assignment in assignments"
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
};
