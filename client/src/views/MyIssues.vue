<template>
  <b-container class="overflow-auto">
    <b-pagination
      align="center"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="books-table"
    ></b-pagination>

    <b-table
      id="books-table"
      hover
      selectable
      :current-page="currentPage"
      :per-page="perPage"
      :sort-by.sync="sortBy"
      :fields="fields"
      :items="items"
      :busy="isBusy"
      :select-mode="selectMode"
    >
      <div slot="table-busy" class="text-center text-primary my-2">
        <b-spinner class="align-middle"></b-spinner>
        <strong>Loading...</strong>
      </div>
      <template #cell(isReturned)="row">
        <b-check v-model="row.item.isReturned" disabled />
      </template>
      <template #cell(action)="row">
        <b-button
          variant="success"
          :disabled="row.item.isReturned"
          v-on:click="returnIssue(row.item)"
          >Return</b-button
        >
      </template>
    </b-table>
    <b-modal id="qr-modal" hide-footer size="sm" title="Scan QR code">
      <ScanQR />
    </b-modal>
  </b-container>
</template>

<script>
import ScanQR from "@/components/ScanQR.vue";
import { getMine, returnIssue } from "@/services/issues";
import moment from "moment";
export default {
  name: "MyIssues",
    components: {
    ScanQR
  },
  created() {
    this.reload();
  },
  methods: {
    async reload() {
      this.isBusy = true;
      const items = await getMine();
      items.sort((a, b) => {
        return a.isReturned - b.isReturned || a.expiryDate - b.expiryDate;
      });
      this.items = items;
      this.isBusy = false;
    },
    async returnIssue(item) {
      this.$bvModal.show("qr-modal");
      await new Promise(r => setTimeout(r, 4000));
      this.$bvModal.hide("qr-modal");

      returnIssue(item.id)
        .then(() => {
          this.$bvToast.toast("Book successfully returned.", {
            title: "Success",
            variant: "success",
            solid: true,
          });
          item.isReturned = true;
          item.returnDate = new Date();
        })
        .catch((error) => {
          this.$bvToast.toast(error.response.data.title, {
            title: "Chyba",
            variant: "danger",
            solid: true,
          });
        });
    },
    formatDateAssigned(value) {
      if (value) {
        return moment(value).format("LL");
      }
      return value;
    },
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  data() {
    return {
      fields: [
        {
          key: "bookName",
          label: "Book Name",
          sortable: true,
        },
        {
          key: "isbn",
          label: "ISBN",
          sortable: true,
        },
        {
          key: "issueDate",
          label: "Issue date",
          sortable: true,
          formatter: "formatDateAssigned",
        },
        {
          key: "expiryDate",
          label: "Expiry Date",
          sortable: true,
          formatter: "formatDateAssigned",
        },
        {
          key: "returnDate",
          label: "Return Date",
          sortable: true,
          formatter: "formatDateAssigned",
        },
        {
          key: "isReturned",
          label: "Reutrned",
          sortable: true,
        },
        { key: "action" },
      ],
      items: [],
      currentPage: 1,
      perPage: 10,
      pageSizes: [10],
      emptyText: "No data",
      sortBy: "",
      isBusy: false,
      search: "",
      selectMode: "single",
    };
  },
};
</script>
