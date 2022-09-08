export type ratesType = Record<string, number>

export type ratesKeyType = keyof ratesType

export interface currencyRes {
  table: string,
  rates: ratesType
  lastupdate: string
}