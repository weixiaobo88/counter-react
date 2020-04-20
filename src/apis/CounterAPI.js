import axios from "axios";

class CounterAPI {
  static getNumberOfCounters() {
    let request = axios.get("https://counters.free.beeceptor.com/");
    return request;
  }
}

export default CounterAPI;
