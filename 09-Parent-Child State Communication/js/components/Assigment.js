export default {
  template: `
    <li class="p-2.5 flex justify-between gap-2">
        <label :for="toClassName(assignment.name)" class="mr-2">
            {{ assignment.name }}
        </label>
        <input
            :id="toClassName(assignment.name)"
            :name="toClassName(assignment.name)"
            type="checkbox"
            v-model="assignment.complete"
        />
    </li>
  `,
  props: {
    assignment: Object,
  },
  methods: {
    toClassName(text) {
      return text
        .toLowerCase() // всё в нижний регистр
        .normalize("NFD") // разбиваем буквы + диакритику
        .replace(/[\u0300-\u036f]/g, "") // убираем акценты
        .replace(/[^a-z0-9\s-]/g, "") // убираем спецсимволы
        .trim() // убираем пробелы по краям
        .replace(/\s+/g, "-"); // пробелы → дефисы
    },
  },
};
