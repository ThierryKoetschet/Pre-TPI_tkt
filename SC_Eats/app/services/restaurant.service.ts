import { RestaurantModel } from '../models/restaurant.model'

export class RestaurantService {
  private restaurants: RestaurantModel[] = [
    {
      id: 1,
      name: 'Cafe de la Gittaz',
      address: 'La Gittaz-Dessous 315',
      city: 'Sainte-Croix',
      zipcode: 1450,
      image: '~/assets/restaurants/cafedelagittaz.png',
      url: 'https://nativescript.org/images/ngconf/book-of-mormon.mov',
      category: 'Cuisine traditionnelle',
      details: [
        {
          title: 'Music, Lyrics and Book by',
          body: 'Trey Parker, Robert Lopez, and Matt Stone'
        },
        {
          title: 'First showing on Broadway',
          body: 'March 2011 after nearly seven years of development.'
        },
        {
          title: 'Revenue',
          body:
            'Grossed over $500 million, making it one of the most successful musicals of all time.'
        },
        {
          title: 'History',
          body:
            'The Book of Mormon was conceived by Trey Parker, Matt Stone and Robert Lopez. Parker and Stone grew up in Colorado, and were familiar with The Church of Jesus Christ of Latter-day Saints and its members. They became friends at the University of Colorado Boulder and collaborated on a musical film, Cannibal! The Musical (1993), their first experience with movie musicals. In 1997, they created the TV series South Park for Comedy Central and in 1999, the musical film South Park: Bigger, Longer & Uncut. The two had first thought of a fictionalized Joseph Smith, religious leader and founder of the Latter Day Saint movement, while working on an aborted Fox series about historical characters. Their 1997 film, Orgazmo, and a 2003 episode of South Park, "All About Mormons", both gave comic treatment to Mormonism. Smith was also included as one of South Park\'s "Super Best Friends", a Justice League parody team of religious figures like Jesus and Buddha.'
        },
        {
          title: 'Development',
          body: `During the summer of 2003, Parker and Stone flew to New York City to discuss the script of their new film, Team America: World Police, with friend and producer Scott Rudin (who also produced South Park: Bigger, Longer & Uncut). Rudin advised the duo to see the musical Avenue Q on Broadway, finding the cast of marionettes in Team America similar to the puppets of Avenue Q. Parker and Stone went to see the production during that summer and the writer-composers of Avenue Q, Lopez and Jeff Marx, noticed them in the audience and introduced themselves. Lopez revealed that South Park: Bigger, Longer & Uncut was highly influential in the creation of Avenue Q. The quartet went for drinks afterwards, and soon found that each camp wanted to write something involving Joseph Smith. The four began working out details nearly immediately, with the idea to create a modern story formulated early on. For research purposes, the quartet took a road trip to Salt Lake City where they "interviewed a bunch of missionaries—or ex-missionaries." They had to work around Parker and Stone\'s South Park schedule. In 2006, Parker and Stone flew to London where they spent three weeks with Lopez, who was working on the West End production of Avenue Q. There, the three wrote "four or five songs" and came up with the basic idea of the story. After an argument between Parker and Marx, who felt he was not getting enough creative control, Marx was separated from the project.[10] For the next few years, the remaining trio met frequently to develop what they initially called The Book of Mormon: The Musical of the Church of Jesus Christ of Latter-day Saints. "There was a lot of hopping back and forth between L.A. and New York," Parker recalled.`
        }
      ]
    },

    {
          id: 2,
          name: 'Cafe 12',
          address: 'Rue Neuve 1',
          city: 'Sainte-Croix',
          zipcode: 1450,
          image: '~/assets/restaurants/cafe12.png',
          url: 'https://nativescript.org/images/ngconf/book-of-mormon.mov',
          category: 'Burgers',
          details: [
            {
              title: 'Music, Lyrics and Book by',
              body: 'Trey Parker, Robert Lopez, and Matt Stone'
            },
            {
              title: 'First showing on Broadway',
              body: 'March 2011 after nearly seven years of development.'
            },
            {
              title: 'Revenue',
              body:
                'Grossed over $500 million, making it one of the most successful musicals of all time.'
            },
            {
              title: 'History',
              body:
                'The Book of Mormon was conceived by Trey Parker, Matt Stone and Robert Lopez. Parker and Stone grew up in Colorado, and were familiar with The Church of Jesus Christ of Latter-day Saints and its members. They became friends at the University of Colorado Boulder and collaborated on a musical film, Cannibal! The Musical (1993), their first experience with movie musicals. In 1997, they created the TV series South Park for Comedy Central and in 1999, the musical film South Park: Bigger, Longer & Uncut. The two had first thought of a fictionalized Joseph Smith, religious leader and founder of the Latter Day Saint movement, while working on an aborted Fox series about historical characters. Their 1997 film, Orgazmo, and a 2003 episode of South Park, "All About Mormons", both gave comic treatment to Mormonism. Smith was also included as one of South Park\'s "Super Best Friends", a Justice League parody team of religious figures like Jesus and Buddha.'
            },
            {
              title: 'Development',
              body: `During the summer of 2003, Parker and Stone flew to New York City to discuss the script of their new film, Team America: World Police, with friend and producer Scott Rudin (who also produced South Park: Bigger, Longer & Uncut). Rudin advised the duo to see the musical Avenue Q on Broadway, finding the cast of marionettes in Team America similar to the puppets of Avenue Q. Parker and Stone went to see the production during that summer and the writer-composers of Avenue Q, Lopez and Jeff Marx, noticed them in the audience and introduced themselves. Lopez revealed that South Park: Bigger, Longer & Uncut was highly influential in the creation of Avenue Q. The quartet went for drinks afterwards, and soon found that each camp wanted to write something involving Joseph Smith. The four began working out details nearly immediately, with the idea to create a modern story formulated early on. For research purposes, the quartet took a road trip to Salt Lake City where they "interviewed a bunch of missionaries—or ex-missionaries." They had to work around Parker and Stone\'s South Park schedule. In 2006, Parker and Stone flew to London where they spent three weeks with Lopez, who was working on the West End production of Avenue Q. There, the three wrote "four or five songs" and came up with the basic idea of the story. After an argument between Parker and Marx, who felt he was not getting enough creative control, Marx was separated from the project.[10] For the next few years, the remaining trio met frequently to develop what they initially called The Book of Mormon: The Musical of the Church of Jesus Christ of Latter-day Saints. "There was a lot of hopping back and forth between L.A. and New York," Parker recalled.`
            }
          ]
        },

        {
              id: 3,
              name: 'Hôtel de France',
              address: 'Rue Centrale 25',
              city: 'Sainte-Croix',
              zipcode: 1450,
              image: '~/assets/restaurants/hoteldefrance.png',
              url: 'https://nativescript.org/images/ngconf/book-of-mormon.mov',
              category: 'Cuisine traditionnelle',
              details: [
                {
                  title: 'Music, Lyrics and Book by',
                  body: 'Trey Parker, Robert Lopez, and Matt Stone'
                },
                {
                  title: 'First showing on Broadway',
                  body: 'March 2011 after nearly seven years of development.'
                },
                {
                  title: 'Revenue',
                  body:
                    'Grossed over $500 million, making it one of the most successful musicals of all time.'
                },
                {
                  title: 'History',
                  body:
                    'The Book of Mormon was conceived by Trey Parker, Matt Stone and Robert Lopez. Parker and Stone grew up in Colorado, and were familiar with The Church of Jesus Christ of Latter-day Saints and its members. They became friends at the University of Colorado Boulder and collaborated on a musical film, Cannibal! The Musical (1993), their first experience with movie musicals. In 1997, they created the TV series South Park for Comedy Central and in 1999, the musical film South Park: Bigger, Longer & Uncut. The two had first thought of a fictionalized Joseph Smith, religious leader and founder of the Latter Day Saint movement, while working on an aborted Fox series about historical characters. Their 1997 film, Orgazmo, and a 2003 episode of South Park, "All About Mormons", both gave comic treatment to Mormonism. Smith was also included as one of South Park\'s "Super Best Friends", a Justice League parody team of religious figures like Jesus and Buddha.'
                },
                {
                  title: 'Development',
                  body: `During the summer of 2003, Parker and Stone flew to New York City to discuss the script of their new film, Team America: World Police, with friend and producer Scott Rudin (who also produced South Park: Bigger, Longer & Uncut). Rudin advised the duo to see the musical Avenue Q on Broadway, finding the cast of marionettes in Team America similar to the puppets of Avenue Q. Parker and Stone went to see the production during that summer and the writer-composers of Avenue Q, Lopez and Jeff Marx, noticed them in the audience and introduced themselves. Lopez revealed that South Park: Bigger, Longer & Uncut was highly influential in the creation of Avenue Q. The quartet went for drinks afterwards, and soon found that each camp wanted to write something involving Joseph Smith. The four began working out details nearly immediately, with the idea to create a modern story formulated early on. For research purposes, the quartet took a road trip to Salt Lake City where they "interviewed a bunch of missionaries—or ex-missionaries." They had to work around Parker and Stone\'s South Park schedule. In 2006, Parker and Stone flew to London where they spent three weeks with Lopez, who was working on the West End production of Avenue Q. There, the three wrote "four or five songs" and came up with the basic idea of the story. After an argument between Parker and Marx, who felt he was not getting enough creative control, Marx was separated from the project.[10] For the next few years, the remaining trio met frequently to develop what they initially called The Book of Mormon: The Musical of the Church of Jesus Christ of Latter-day Saints. "There was a lot of hopping back and forth between L.A. and New York," Parker recalled.`
                }
              ]
            }
  ]

  static getInstance(): RestaurantService {
    return RestaurantService._instance
  }

  private static _instance: RestaurantService = new RestaurantService()

  getRestaurants(): RestaurantModel[] {
    return this.restaurants
  }

  getRestaurantById(id: number): RestaurantModel | undefined {
    return this.restaurants.find(restaurant => restaurant.id === id) || undefined
  }
}
