export type GeoType = {
  lat: string
  lng: string
}

export type AddressType = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: GeoType
}

export type CompanyType = {
  name: string
  catchPhrase: string
  bs: string
}

export type UserType = {
  id: number
  name: string
  username: string
  email: string
  address: AddressType
  phone: string
  website: string
  company: CompanyType
}

export type AlbumType = {
  userId: number
  id: number
  title: string
}
