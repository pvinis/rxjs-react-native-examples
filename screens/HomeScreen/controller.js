import { BehaviorSubject, Subject, combineLatest, timer } from 'rxjs'
import { map, scan, skip, tap, withLatestFrom, flatMap, distinctUntilChanged } from 'rxjs/operators'
import R from 'ramda'


const HomeScreenController = (
    component,
    input = {
        linksPressed: new Subject(),
    }
) => {
    const {
        linksPressed,
    } = input

    const navToLinks = linksPressed.pipe(
        map(_ => ({ screen: 'Links' })),
    )

    return {
        input: {
            linksPressed,
        },
        output: {},
        sub: {
            navToLinks,
        },
    }
}
export default HomeScreenController
