import m from 'mithril'
import profile from '../model/profile'
import styleSheet from '../stylesheet'
import helper from '../lib/helper'

import '../../node_modules/tachyons/css/tachyons.css'
import '../../node_modules/font-awesome/css/font-awesome.css'
import myphoto from '../static/images/pp.jpeg'

const styles = styleSheet()

const state = {
    displayEmail: false
}

const ProfilePhoto = m(styles.profilePhoto, 
    m(styles.avatar, {src: myphoto})
)
const ProfileSummary =  m(styles.summary, [
    m(styles.fullName, profile.fullName),
    m(styles.subTitle1, profile.subtTitle1),
    m(styles.subTitle2, profile.subtTitle2),
    m(styles.summaryText, m.trust(profile.summaryText)),
    m(styles.readMoreLink, 
        {href: '/cv', oncreate: m.route.link},
        'read more'
    )
])

const ProfileCard = {
    view: function() {
        return m(styles.container, [
            m(styles.mainTitle, 'About me.'),
            m(styles.profileCard, [
                m(styles.profileCardBody, [
                    ProfilePhoto,
                    ProfileSummary
                ])
            ])
        ])
    }
}

const githubLink = m(styles.buttonLink,
    {href: "https://github-profile-summary.com/user/erdivartanovich", target: 'blank'},
    m('span', [
        m('i.fa fa-github', {'aria-hidden': true}),
        ''
    ])
)

const linkedinLink = m(styles.buttonLink,
    {href: "https://www.linkedin.com/in/erdivartanovich", target: 'blank'},
    m('span', [
        m('i.fa fa-linkedin', {'aria-hidden': true}),
        ''
    ])
)

const twitterLink = m(styles.buttonLink,
    {href: "https://twitter.com/ErdiVartanovich", target: 'blank'},
    m('span', [
        m('i.fa fa-twitter', {'aria-hidden': true}),
        ''
    ])
)

const publicationLink = m(styles.buttonLink,
    {href: "/publication", oncreate: m.route.link},
    m('span', [
        m('i.fa fa-file-text-o', {'aria-hidden': true}),
        ' publications'
    ])
)

const blogLink = m(styles.buttonLink,
    {href: "/blog", oncreate: m.route.link},
    m('span', [
        m('i.fa fa-rss', {'aria-hidden': true}),
        ' blog'
    ])
)

const emailMe = m(styles.buttonLink,
    {onclick: () => {
        state.displayEmail = !state.displayEmail
    }},
    m('span', [
        m('i.fa fa-envelope', {'aria-hidden': true}),
        ' email me!'
    ])
)

const emailPanel = m('.mw6 f6 center tc pa2', [
    m('label.bg-gold black-90 mt1 pa1 ph2 br2 mr1', "erdivartanovich@gmail.com"),
    m('a.bg-black gold hover-white nl2 pa1 br2 no-underline br--right pointer', 
        {href: "mailto: erdivartanovich@gmail.com"},
        'open email client'
    ),
])

const LinksCard = {
    view: function() {
        return m(styles.linksContainer, [
            githubLink,
            linkedinLink,
            twitterLink,
            blogLink,
            publicationLink,
            emailMe
        ])
    }
}

const footerText = m('.mt4 tc', [ 
    m('p.f6 black-90 lh-copy', [
        m('span', 'source code of this web is available '),
        m('span', m('a', 
            {href: "https://github.com/erdivartanovich/aboutme"},
            'here'
        ))
    ]),
])

const Home = {
    view: function() {
        return m('div', [
            m(ProfileCard),
            m(LinksCard),
            state.displayEmail ? emailPanel : null,
            footerText
        ])
    }
}

export default Home

