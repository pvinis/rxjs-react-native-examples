import React, { useEffect } from 'react'
import R from 'ramda'


const Nav = props => {
    let rxsubs = []

    useEffect(() => {
        rxsubs = R.concat(
            // back
            props.back
                ? [props.back.subscribe(() => props.navigation.goBack())]
                : [],
            // other navs
            props.navs
                ? R.map(nav => nav.subscribe(obj => props.navigation.navigate(obj.screen, obj.props)), props.navs)
                : []
        )


        return () => rxsubs.forEach(s => s.unsubscribe())
    })

    return null // no UI
}
export default Nav
