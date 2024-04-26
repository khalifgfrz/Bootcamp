const names = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

function searchName(query, limit, cb) {
  const filteredNames = names.filter((name) => name.toLowerCase().includes(query.toLowerCase())).slice(0, limit);
  cb(filteredNames);
}

function callback(result) {
  alert(result);
}

searchName("an", 3, callback);
