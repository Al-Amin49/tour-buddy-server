interface ITour {
    name: string
    durationHours: number
    ratingAverage: number
    ratingQuantity: number
    price: number
    availableSeats : number
    imageCover: string
    images: string[]
    createdAt: Date
    startDates: Date[]
    startLocation: string
    locations: string[]
    slug: string
  }
  //A slug is a piece of text that is attached to the end of a URL (after the backslash ”/“) that is unique and locates the specific page of a website
//slug===>awesome tour sylhet => awesome-tour-sylhet

export {ITour}