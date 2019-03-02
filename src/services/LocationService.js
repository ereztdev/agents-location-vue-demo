import Api from "@/services/Api";

export default {
  getLocation(params) {
    // return Api().get('/wordwise/entries?limit=1&headword=' + params.word)
    return Api().get("/countries-by-isolation");
  }
};
