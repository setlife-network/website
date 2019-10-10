import english from './english'
import spanish from './spanish'


let locale = navigator.language


var content = locale === 'en-US' ? english : spanish

function ChangeLanguage() {
    if ( content === english) {
        console.log('spanish');
        content = spanish
        console.log(content.PRINCIPALMESSAGE);
        return content
    } else {
        console.log('english');
        content = english
        console.log(content.PRINCIPALMESSAGE);
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
