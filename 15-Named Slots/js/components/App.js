import Assigments from "./Assigments.js";
import Panel from "./Panel.js";

export default {
  components: { Assigments, Panel },
  template: `
    <div class="grid gap-6 bg-transparent">
      <Assigments />
      <Panel>
          This is my default content.
      </Panel>  
      <Panel theme="cupcake">
        <template v-slot:heading>
          This slot is for the heading.
        </template>
        <template v-slot:default>
          This is my default content.
        </template>
      </Panel>  
      <Panel theme="cyberpunk">
        <template v-slot:heading>
          This slot is for the heading.
        </template>
        <template v-slot:default>
          This is my default content.
        </template>
        <template v-slot:footer>
          This is my default footer.
        </template>
      </Panel>  
    </div>
  `,
};
