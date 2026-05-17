export default {
  template: `
        <div class="flex gap-2 mb-3">
            <button 
              @click="$emit('change', tag)"
              v-for="tag in tags" 
              class="btn btn-dash btn-accent text-xs"
              :class="{'border-solid btn-info' : tag === currentTag }">#{{ tag }}</button>
        </div>
    `,
  props: {
    initialTags: Array,
    currentTag: String,
  },
  computed: {
    tags() {
      return ["all", ...new Set(this.initialTags)];
    },
  },
};
