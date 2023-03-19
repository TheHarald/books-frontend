export type BooksResponse = {
    kind: string
    totalItems: number
    items?: Book[]
}

export type Book = {
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: VolumeInfo
    saleInfo: SaleInfo
    accessInfo: AccessInfo
    searchInfo?: SearchInfo
}

export type VolumeInfo = {
    title: string
    authors?: string[]
    publisher?: string
    publishedDate: string
    description?: string
    industryIdentifiers: IndustryIdentifier[]
    readingModes: ReadingModes
    pageCount: number
    printType: string
    categories?: string[]
    averageRating?: number
    ratingsCount?: number
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    panelizationSummary?: PanelizationSummary
    imageLinks?: ImageLinks
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
    subtitle?: string
}

export type IndustryIdentifier = {
    type: string
    identifier: string
}

export type ReadingModes = {
    text: boolean
    image: boolean
}

export type PanelizationSummary = {
    containsEpubBubbles: boolean
    containsImageBubbles: boolean
}

export type ImageLinks = {
    smallThumbnail: string
    thumbnail: string
}

export type SaleInfo = {
    country: string
    saleability: string
    isEbook: boolean
    listPrice?: ListPrice
    retailPrice?: RetailPrice
    buyLink?: string
    offers?: Offer[]
}

export type ListPrice = {
    amount: number
    currencyCode: string
}

export type RetailPrice = {
    amount: number
    currencyCode: string
}

export type Offer = {
    finskyOfferType: number
    listPrice: ListPrice2
    retailPrice: RetailPrice2
}

export type ListPrice2 = {
    amountInMicros: number
    currencyCode: string
}

export type RetailPrice2 = {
    amountInMicros: number
    currencyCode: string
}

export type AccessInfo = {
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: string
    epub: Epub
    pdf: Pdf
    webReaderLink: string
    accessViewStatus: string
    quoteSharingAllowed: boolean
}

export type Epub = {
    isAvailable: boolean
    acsTokenLink?: string
}

export type Pdf = {
    isAvailable: boolean
    acsTokenLink?: string
}

export type SearchInfo = {
    textSnippet: string
}
