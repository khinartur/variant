import {generatePath, type PathParam} from 'react-router-dom'
import type {AppRoutes} from '../constants'

type AppRoute = (typeof AppRoutes)[keyof typeof AppRoutes]

type AppRouteParams<T extends AppRoute> = {
    [key in PathParam<T>]: string
}

export function buildAppRoutePath<T extends AppRoute>(
    route: T,
    params: AppRouteParams<T>,
): string {
    return generatePath(route, params)
}
