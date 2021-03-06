<template>
  <b-container>
    <form @submit.prevent="reload">
      <b-input-group>
        <b-button variant="outline-success" v-on:click="add()"
          >Add Book
        </b-button>
        <b-form-input
          type="text"
          class="form-control"
          v-model="search"
          placeholder="Search..."
        />
        <b-button variant="outline-primary" type="submit"> Search </b-button>
        <b-button variant="outline-danger" v-on:click="clear()">
          Clear
        </b-button>
      </b-input-group>
    </form>

    <b-table
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
      <template #cell(isAvailable)="row">
        <b-check v-model="row.item.isAvailable" disabled />
      </template>
      <template #cell(action)="row">
        <b-button-group>
          <b-button variant="success" v-on:click="borrow(row.item)"
            >Borrow</b-button
          >
          <b-button variant="light" v-on:click="edit(row.item)">Edit</b-button>
        </b-button-group>
      </template>
    </b-table>
    <b-modal id="addbook-modal" hide-footer size="xl" title="Add Book">
      <AddBook v-bind:book="book" v-bind:onSuccess="added" />
    </b-modal>
    <b-modal id="editbook-modal" hide-footer size="xl" title="Edit Book">
      <EditBook v-bind:book="book" v-bind:onSuccess="edited" />
    </b-modal>
    <b-modal id="qr-modal" hide-footer size="sm" title="Scan QR code">
      <ScanQR />
    </b-modal>
  </b-container>
</template>

<script>
import { getAll, borrowBook } from "@/services/books";
import AddBook from "@/components/AddBook.vue";
import EditBook from "@/components/EditBook.vue";
import ScanQR from "@/components/ScanQR.vue";

export default {
  name: "Books",
  components: {
    AddBook,
    EditBook,
    ScanQR
  },
  created() {
    this.reload();
  },
  methods: {
    add() {
      this.book = {};
      this.$bvModal.show("addbook-modal");
    },
    added() {
      this.$bvModal.hide("addbook-modal");
      this.book = {};
      this.reload();
    },
    edit(item) {
      this.book = { ...item };
      this.$bvModal.show("editbook-modal");
    },
    edited() {
      this.$bvModal.hide("editbook-modal");
      this.book = {};
      this.reload();
    },
    async reload() {
      this.isBusy = true;
      const items = await getAll();
      const search = this.search.toLowerCase();
      this.items = items.filter(
        (x) =>
          x.name.toLowerCase().includes(search) ||
          x.isbn.toLowerCase().includes(search)
      );
      this.isBusy = false;
    },
    clear() {
      this.search = "";
      this.sortBy = "";
      this.reload();
    },
    async borrow(item) {
      this.$bvModal.show("qr-modal");
      await new Promise(r => setTimeout(r, 4000));
      this.$bvModal.hide("qr-modal");

      borrowBook(item.id)
        .then(() => {
          this.$bvToast.toast("Book successfully borrowed.", {
            title: "Success",
            variant: "success",
            solid: true,
          });
          this.reload();
        })
        .catch((error) => {
          this.$bvToast.toast(
            error.response.data.title || error.response.data,
            {
              title: "Error",
              variant: "danger",
              solid: true,
            }
          );
        });
    },
  },
  data() {
    return {
      fields: [
        {
          key: "id",
          label: "#ID",
          sortable: false,
        },
        {
          key: "name",
          label: "Book Name",
          sortable: true,
        },
        {
          key: "isbn",
          label: "ISBN",
          sortable: true,
        },
        {
          key: "quantity",
          label: "Quantity",
          sortable: true,
        },
        {
          key: "issued",
          label: "Issued",
          sortable: true,
        },
        {
          key: "isAvailable",
          label: "Available",
          sortable: true,
        },
        { key: "action" },
      ],
      items: [],
      book: {},
      currentPage: 0,
      perPage: 100,
      pageSizes: [100],
      emptyText: "No data",
      sortBy: "",
      isBusy: false,
      search: "",
      selectMode: "single",
    };
  },
};
</script>
