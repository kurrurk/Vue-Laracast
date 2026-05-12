export default {
  template: `
        <button class="btn btn-lg btn-outline m-1 disabled:pointer-events-auto disabled:cursor-not-allowed" :disabled="processing">
            <slot />    
        </button>
    `,
  data() {
    return {
      processing: true,
    };
  },
};
