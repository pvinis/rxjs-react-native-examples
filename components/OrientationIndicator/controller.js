import { BehaviorSubject, Subject, combineLatest, timer } from 'rxjs'
import { map, scan, skip, tap, withLatestFrom, flatMap, distinctUntilChanged } from 'rxjs/operators'
import R from 'ramda'


const OrientationIndicatorController = (
    component,
    input = {
        orientation: new BehaviorSubject(0),
    }
) => {
    const {
        orientation,
    } = input

    const text = orientation.pipe(
        distinctUntilChanged(),
        tap(console.log),
    )

    const textRotation = orientation.pipe(
        distinctUntilChanged(),
        map(x => `${-x}deg`),
    )

    return {
        input: {
            orientation,
        },
        output: {
            text,
            textRotation,
        },
        sub: {},
    }
}
export default OrientationIndicatorController
