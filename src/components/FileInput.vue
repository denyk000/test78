<template>
  <input
    class="file-upload-input"
    :id="uid"
    type="file"
    name="file"
    @change="onChangeInputFile"
    accept=".png,.jpg,"
    :disabled="uploading"
    ref="input"
  />
</template>

<script>
import input from "@/mixins/input";
import FileUpload from "@/helpers/FileUpload";
export default {
  name: "FileInput",
  mixins: [input],
  methods: {
    onChangeInputFile(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      const file = files[0];
      this.upload(file);
    },

    upload(file) {
      let fileUpload = new FileUpload(
        this.url,
        {},
        this.onProgress,
        this.requestType
      );

      let postData = { ...this.additionalData };
      // postData.company_id = this.company.id;
      fileUpload
        .upload(file, postData)
        .then((e) => {
          // console.log(e.target);
          //  this.anexo = e.target.response;
          this.file = e.target.response[0];
          // console.log(this.file);
          if (this.file.fileLinkApi) this.file = this.file.fileLinkApi;
          this.$emit("input", this.file);
          this.$emit("success", e);
          this.progress = 0;
          this.cleanInput();
        })
        .catch((e) => {
          this.$emit("error", e);
          // console.log(e);
          let error = this.$t("other.file_upload_error");
          if (e.target && e.target.response) {
            error = e.target.response.message || error;
          }
          this.$dialog.notify.error(error, {
            position: "bottom-right",
          });
          this.progress = 0;
          this.cleanInput();
        });
    },
  },
};
</script>

<style scoped></style>
