import axios from "axios";

const COUNTER_API_URI = "https://5e9ed3a0fb467500166c47b3.mockapi.io/counters";
class CounterAPI {
  static getNumberOfCounters() {
    let response = axios.get(COUNTER_API_URI);
    return response;
  }

  static putNumberOfCounters(value) {
    let response = axios.put(COUNTER_API_URI + "/1", {
      size: value,
    });
    return response;
  }
}

export default CounterAPI;
