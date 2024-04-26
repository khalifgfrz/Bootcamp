let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

// Mengubah data menggunakan spread operator
const updatedData = {
  ...data,
  name: "Khalif Gaffarezka Auliasoma",
  email: "kgaffarezka@gmail.com",
  hobby: "Gaming",
};
console.log(updatedData);

// Mengambil data "street" dan "city" menggunakan destructuring
const {
  address: { street, city },
} = data;
console.log(`Street : ${street}`);
console.log(`City : ${city}`);
