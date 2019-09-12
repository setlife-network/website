import english from './english'
import spanish from './spanish'


let locale = navigator.language


const content = locale === 'en-US' ? english : spanish
const { BLOGBUTTON,
        BLOGHEADLINE,
        CONSULTATIONBUTTON,
        CONSULTATIONHEADLINE,
        COREVALUES,
        COREVALUESHEADLINE,
        HEADERBUTTON,
        HEADERLINKS,
        PRINCIPALMESSAGE,
        PROGRAMSHEADLINE,
        PROGRAMSLEFT,
        PROGRAMSRIGHT,
        QUOTE,
        TEASERS,
        TESTIMONIALS
    } = content

export {
    BLOGBUTTON,
    BLOGHEADLINE,
    CONSULTATIONBUTTON,
    CONSULTATIONHEADLINE,
    COREVALUES,
    COREVALUESHEADLINE,
    HEADERBUTTON,
    HEADERLINKS,
    PRINCIPALMESSAGE,
    PROGRAMSHEADLINE,
    PROGRAMSLEFT,
    PROGRAMSRIGHT,
    QUOTE,
    TEASERS,
    TESTIMONIALS,


}
