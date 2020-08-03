const fetchEmplsById = function () {
  var id = window.location.search.split("=")[1];
  console.log(id);
  const resolver = function (res) {
    console.log(res);
  };
  const rejecter = function (res) {
    console.log(res);
  };
  axios({
    url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/employees/" + id,
    method: "GET",
  })
    .then(resolver)
    .catch(rejecter);
};

fetchEmplsById();
