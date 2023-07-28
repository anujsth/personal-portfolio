import { TableProps } from "components/table";

export const TableExample: TableProps = {
  columns: [
    { name: "FULL NAME", key: "full_name", sortable: true },
    { name: "EMAIL", key: "email", sortable: true },
    { name: "GENDER", key: "gender", sortable: true },
    { name: "AGE", key: "age", sortable: true },
  ],
  rows: [
    {
      full_name: "John Doe",
      email: "johndoe@example.com",
      gender: "Male",
      age: 30,
    },
    {
      full_name: "Jane Doe",
      email: "janedoe@example.com",
      gender: "Female",
      age: 29,
    },
    {
      full_name: "John Smith",
      email: "johnsmith@example.com",
      gender: "Male",
      age: 38,
    },
    {
      full_name: "Jane Smith",
      email: "janesmith@example.com",
      gender: "Female",
      age: 18,
    },
    {
      full_name: "Michael Johnson",
      email: "michaeljohnson@example.com",
      gender: "Male",
      age: 27,
    },
    {
      full_name: "Emily Davis",
      email: "emilydavis@example.com",
      gender: "Female",
      age: 24,
    },
    {
      full_name: "William Brown",
      email: "williambrown@example.com",
      gender: "Male",
      age: 31,
    },
    {
      full_name: "Ava Wilson",
      email: "avawilson@example.com",
      gender: "Female",
      age: 28,
    },
    {
      full_name: "James Anderson",
      email: "jamesanderson@example.com",
      gender: "Male",
      age: 40,
    },
    {
      full_name: "Olivia Taylor",
      email: "oliviataylor@example.com",
      gender: "Female",
      age: 36,
    },
  ],
};
