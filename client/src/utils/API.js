import axios from "axios";
export default {

  // Gets all samples
  getSamples: function() {
    return axios.get("/api/samples");
  },
  // Gets the sample with the given id
  getsample: function(id) {
    return axios.get("/api/samples/" + id);
  },
  // Deletes the sample with the given id
  deletesample: function(id) {
    return axios.delete("/api/samples/" + id);
  },
  // Saves a sample to the database
  saveSample: function(sampleData) {
    return axios.post("/api/samples", sampleData);
  }
};