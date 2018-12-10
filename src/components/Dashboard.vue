<template>
  <div class="container">
    <br /><br />
    <b-card>
      <template slot="header">
        <b-button
          @click="addForm"
          variant="primary"
          size="sm"
          :disabled="btnState"
          >Add</b-button
        >
      </template>

      <component
        :is="ccomponent"
        :selected="selected"
        :isUpdate="isUpdate"
      ></component>
    </b-card>
  </div>
</template>

<script>
import Posts from "./Posts";
import Form from "./Form";
import { eventBus } from "../eventBus";

export default {
  components: {
    Posts,
    Form
  },
  data() {
    return {
      ccomponent: Posts,
      selected: null,
      isUpdate: false
    };
  },
  computed: {
    btnState() {
      return this.ccomponent === Form ? true : false;
    }
  },
  methods: {
    addForm() {
      this.ccomponent = Form;
      this.isUpdate = false;
      this.selected = null;
    }
  },
  created() {
    eventBus.$on("CANCEL", () => {
      this.ccomponent = Posts;
    });
    eventBus.$on("UPDATE_POST", params => {
      this.ccomponent = Form;
      this.selected = params;
      this.isUpdate = true;
    });
    eventBus.$on("RETURN_TO_LIST_PAGE", () => {
      this.ccomponent = Posts;
    });
  },
  destroyed() {
    eventBus.$off("CANCEL");
    eventBus.$off("UPDATE_POST");
    eventBus.$off("RETURN_TO_LIST_PAGE");
  }
};
</script>
