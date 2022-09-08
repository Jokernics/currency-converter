import { currencyRes } from "../types/currencyTypes";

export default class currencyApi {
  static async getCurrency() {
    const res = await fetch('https://cdn.cur.su/api/latest.json');
    const data: currencyRes = await res.json();
    return data
  }
}