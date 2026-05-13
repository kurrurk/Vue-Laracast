export default {
  template: `
        <button 
          :class="{
            'btn btn-lg btn-outline m-1 disabled:pointer-events-auto disabled:cursor-not-allowed': true,
            'btn-primary': buttontype === 'primary',
            'is-loading relative btn-secondary pointer-events-auto cursor-not-allowed': processing,
            'btn-success': buttontype === 'success',
          }" 
        >
            <slot />    
        </button>
  `,
  // :disabled="processing"
  props: {
    buttontype: {
      type: String,
      default: "primary",
    },
    processing: {
      type: Boolean,
      default: false,
    },
  },
};
