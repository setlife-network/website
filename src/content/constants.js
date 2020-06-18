import english from './english'
import spanish from './spanish'


let locale = navigator.language


var content = locale === 'en-US' ? english : spanish

function ChangeLanguage() {
    if ( content === english) {
        content = spanish
        return content
    } else {
        content = english
        return content
    }
}


const {
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
    TESTIMONIALS
} = content

export {
    ChangeLanguage,
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
