<template>
  <div class="container">
    <kendo-notification ref="notif" :position-top="30"></kendo-notification>
    <b-form-group horizontal label="Title:">
      <b-form-input
        horizontal
        v-model="formData.title"
        :state="!$v.formData.title.$invalid"
      ></b-form-input>
      <div v-if="!$v.formData.title.required">Must not be empty</div>
    </b-form-group>
    <b-form-textarea
      placeholder="Body..."
      v-model="formData.body"
      :state="!$v.formData.body.$invalid"
    ></b-form-textarea>
    <div v-if="!$v.formData.body.required">Must not be empty</div>
    <b-button
      @click="save"
      v-if="!isUpdate"
      variant="primary"
      size="sm"
      :disabled="$v.formData.$invalid"
      >Save</b-button
    >
    <b-button
      @click="update"
      v-if="isUpdate"
      variant="primary"
      size="sm"
      :disabled="$v.formData.$invalid"
      >Update</b-button
    >
    <b-button @click="cancel" variant="danger" size="sm">Cancel</b-button>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

import { eventBus } from "../eventBus";

import { KendoNotification } from "@progress/kendo-popups-vue-wrapper";

export default {
  props: {
    selected: Object,
    isUpdate: Boolean
  },
  components: {
    KendoNotification
  },
  data() {
    return {
      formData: [{ id: null }, { title: null }, { body: null }]
    };
  },

  methods: {
    save() {
      this.$store.dispatch("createPost", this.formData).then(res => {
        if (res.id) {
          this.formData = [];
          this.showNotification("Success Created!!!");
          eventBus.$emit("RETURN_TO_LIST_PAGE");
        }
      });
    },

    update() {
      this.$store.dispatch("updatePost", this.formData).then(res => {
        if (res.id) {
          this.formData = [];
          this.showNotification("Success Updated!!!");
          eventBus.$emit("RETURN_TO_LIST_PAGE");
        }
      });
    },

    cancel() {
      eventBus.$emit("CANCEL");
    },

    showNotification(msg) {
      this.$refs.notif.kendoWidget().show(msg, "success");
    }
  },

  created() {
    if (this.isUpdate) {
      this.formData = this.selected;
    } else {
      this.formData = [];
    }
  },

  validations: {
    formData: {
      title: {
        required
      },

      body: {
        required
      }
    }
  }
};
</script>
