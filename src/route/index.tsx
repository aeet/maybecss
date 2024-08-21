import type { RouteDefinition } from '@solidjs/router'
import { TestPage } from './test'
import { LayoutDefault } from '../layout/default'


export const routes: RouteDefinition[] = [
    {
        path: '/', component: LayoutDefault, children: [
            { path: '/test', component: TestPage }
        ]
    }
]