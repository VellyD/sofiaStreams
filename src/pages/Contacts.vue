<script>
export default {
  data: () => ({
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        phone: '+1 234 567 890',
        email: 'john@example.com',
      },
      {
        id: 2,
        name: 'Jane Smith',
        phone: '+1 987 654 321',
        email: 'jane@example.com',
      },
      {
        id: 3,
        name: 'Alice Brown',
        phone: '+1 456 789 123',
        email: 'alice@example.com',
      },
    ],
  }),
};
</script>

<template>
  <v-container>
    <v-card v-for="contact in contacts" :key="contact.id" class="mb-4">
      <v-card-title>
        <v-icon class="mr-2">mdi-account</v-icon>
        {{ contact.name }}
      </v-card-title>
      <v-card-subtitle>
        <v-icon class="mr-2">mdi-phone</v-icon>
        {{ contact.phone }}
      </v-card-subtitle>
      <v-card-subtitle>
        <v-icon class="mr-2">mdi-email</v-icon>
        {{ contact.email }}
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>

<style scoped></style>
