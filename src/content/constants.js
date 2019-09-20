import english from './english'
import spanish from './spanish'


let locale = navigator.language


var content = locale === 'en-US' ? english : spanish

function ChangeLanguage() {
    console.log('hey');
    if (locale === 'en-US') {
        return content = spanish
    } else {
        console.log('here');
        content = english
        window.location.reload();
        console.log(content.PRINCIPALMESSAGE.headline1);

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
