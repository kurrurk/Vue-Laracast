export default {
  template: `
        <div :class="{
                'flex flex-col justify-between bg-base-200 p-4 space-y-3 border rounded-sm' : true,
                'border-secondary' : theme !== 'cyberpunk',
                'border-secondary-content' : theme === 'cyberpunk' }" :data-theme="theme"
        >
            <h2 v-if="$slots.heading" class="font-bold text-2xl"><slot name="heading"/></h2>
            <div><slot name="default" /></div>
            <footer 
                v-if="$slots.footer" 
                class="border-t text-secondary pt-3"
                :class="{
                    'border-secondary text-secondary' : theme !== 'cyberpunk',
                    'border-secondary-content text-secondary-content opacity-40' : theme === 'cyberpunk' }"
            >
                <slot name="footer"/>
            </footer>
        </div>
    `,
  props: {
    theme: { type: String, default: "coffee" },
  },
};
