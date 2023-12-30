import { CalendarIcon } from "../Icons/Calendar"
import { DonateIcon } from "../Icons/Donate"
import { ThemeIcon } from "../Icons/Theme"


type THeaderButton = {
    id:number,
    variant:'theme'|'language'|'donate'|'calendar',
    icon?:JSX.Element,
}
export const headerButtons : THeaderButton[] = [
    {
        id:1,
        variant:'theme',
        icon:ThemeIcon(),
    },
    {
        id:2,
        variant:'calendar',
        icon:CalendarIcon(),
    },
    {
        id:3,
        variant:'donate',
        icon:DonateIcon(),
    },
    {
        id:4,
        variant:'language',
    },
]