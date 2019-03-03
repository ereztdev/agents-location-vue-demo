import Api from "@/services/Api";

export default {
  getLocation() {
    return Api().get("/countries-by-isolation");
  }
};
