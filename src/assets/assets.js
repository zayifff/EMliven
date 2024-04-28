import firsticon from './1st.png'
import secondicon from './2nd.png'
import thirdicon from './3rd.png'
import dark_arrow from './dark_arrow.png'
import add_icon from './add_icon.png'
import cross_icon from './cross_icon.png'
import add_icon_plus from './add_icon_plus.png'
import remove_icon from './remove_icon.png'
import Emlogo from './Em.png'
import hero from './hero.png'
import music_icon from './music_icon.png'
import purchase from './purchase.png'
import party_icon from './party_icon.png'
import medical_icon from './medical_icon.png'
import art_icon from './art_icon.png'
import music1 from './music1.png'
import music2 from './music2.png'
import art1 from './art1.png'
import party1 from './party1.png'
import medical1 from './medical1.png'

export const assets={
    firsticon,
    secondicon,
    thirdicon,
    add_icon,
    cross_icon,
    add_icon_plus,
    dark_arrow,
    Emlogo,
    hero,
    purchase,
    remove_icon
}

export const menu_list = [
    {
        menu_name:"Music",
        menu_image:music_icon
    },
    {
        menu_name:"Party",
        menu_image:party_icon
    },
    {
        menu_name:"Art & Culture",
        menu_image:art_icon
    },
    {
        menu_name:"Medical",
        menu_image:medical_icon
    }
]

export const event_list = [
    {
        _id:"1",
        name:"Jazz Session",
        image:music1,
        price:250,
        date_d:"10",
        date_m:"May",
        time:"8PM",
        place:"Mis Sokak No.17 Şehit Muhtar Mah., İstanbul 34435 Türkiye",
        description:"Bova Jazz Club 18+ You will be given bracelet from our organizators.",
        category:"Music"
    },
    {
        _id:"2",
        name:"Corey Taylor Concert",
        image:music2,
        price:600,
        date_d:"15",
        date_m:"May",
        time:"9PM",
        place:"Zorlu Performing Arts Centre's Turkcell Stage",
        description:"Corey Taylor Concert 18+ . We will meet before the concert at 8pm and you will be given bracelet from our organizators.",
        category:"Music"
    },
    {
        _id:"3",
        name:"Othello",
        image:art1,
        price:300,
        date_d:"18",
        date_m:"May",
        time:"7PM",
        place:"İstanbul-Moda Sahnesi",
        description:"Othello Theater Play 14+",
        category:"Art & Culture"
    },
    {
        _id:"4",
        name:"Istanbul Pub Visitors - #1 Nightlife Party Experience",
        image:party1,
        price:750,
        date_d:"1",
        date_m:"May",
        time:"9PM",
        place:"Taksim RocknRolla Bar",
        description:"A pub visiting is basically a bar tour or bar-hopping. We will take you to a magical party tour visiting the best bars all together, and finish at a dance club. We explore Istanbul nightlife in a very fun way.",
        category:"Party"
    },
    {
        _id:"5",
        name:"Is it safe for my loved one with dementia to live at home?",
        image:medical1,
        price:150,
        date_d:"2",
        date_m:"May",
        time:"4PM",
        place:"Online",
        description:"Does your loved one have dementia? Are you worried about their safety whilst living at home ? Then join us for an exclusive Sweet Pea Care webinar where we will share practical tips to help ensure the wellbeing and safety of people with dementia who want to continue to live independently in their own homes.",
        category:"Medical"
    }
]
