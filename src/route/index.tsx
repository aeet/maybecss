import { Route, RouteDefinition } from '@solidjs/router'
import { TestPage } from './test'
import { LayoutDefault } from '../layout/default'
import { BlockPage } from './block'
import { JSX } from 'solid-js'



const routes: RouteDefinition[] = [
    {
        path: '/', component: LayoutDefault, children: [
            { path: '/', component: TestPage },
            { path: '/block', component: BlockPage },
        ]
    }
]


function convertRoutesToJSX(routes: RouteDefinition[]): JSX.Element[] {
    return routes.map(route => {
        const { path, component, children } = route;
        if (children && (children as RouteDefinition[]).length > 0) return (<Route path={path} component={component}> {convertRoutesToJSX(children as RouteDefinition[])} </Route>);
        return <Route path={path} component={component} />;
    });
}

function generateNav(routes: RouteDefinition[]): JSX.Element {
    return (
        <ul>
            {routes.map(route => (
                <li>
                    <a href={route.path}>{route.path}</a>
                    {route.children && (route.children as RouteDefinition[]).length > 0 && (
                        <ul>
                            {generateNav(route.children as RouteDefinition[])}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
}

export const Routes = () => <>{convertRoutesToJSX(routes)}</>;
export const Nav = () => <>{generateNav(routes)}</>;