import { DonateIcon } from "../Icons/Donate"
import { ThemeIcon } from "../Icons/Theme"


type THeaderButton = {
    id:number,
    variant:'theme'|'language'|'donate',
    icon?:JSX.Element,
}
export const headerButtons : THeaderButton[] = [
    {
        id:1,
        variant:'theme',
        icon:ThemeIcon(),
    },
    {
        id:1,
        variant:'donate',
        icon:DonateIcon(),
    },
    {
        id:1,
        variant:'language',
    },
]