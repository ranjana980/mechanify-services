import engin from '../assests/images/engin.png'
import engin1 from '../assests/images/engin1.png'
import engin2 from '../assests/images/engin2.png'
import Menu from '../assests/images/manu.png'
import bettary from '../assests/images/bettary.png'
import breacks from '../assests/images/engin3.png'
import services from '../assests/images/services.png'
import tyre from '../assests/images/tyre.png'

const navItems = [
    { title: 'Home', route: '/' },
    { title: 'About', route: '/about' },
    { title: 'Contact', route: '/contact' }
]
const serviceItems = [
    { image: Menu, title: 'Engine Repair', describtion: 'We fix engine of your vehicle at your doorsteps.' },
    { image: engin, title: 'Tyres Replacement', describtion: 'We replace tyres of your vehicle at your doorsteps.' },
    { image: engin1, title: 'Transmission', describtion: 'We fix the transmission of your vehicle at your doorsteps.' },
    { image: engin2, title: 'Verified Mechanic', describtion: 'Trusted and verified mechanic.' },
    { image: bettary, title: 'Batteries', describtion: 'We replace battery of your vehicle at your doorsteps.' },
    { image: breacks, title: 'Breaks', describtion: 'We replace brakes shoe and pads at your doorstep.' },
]
const benfitItems = [{ image: breacks, title: '100% genuine parts' }, { image: services, title: 'Network warranty' }, { image: tyre, title: 'Free pick and drop' }]

export { navItems, serviceItems,benfitItems }