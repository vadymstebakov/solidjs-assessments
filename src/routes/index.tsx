import { lazy, Suspense } from 'solid-js';
import { Router, Route, Navigate } from '@solidjs/router';
import { Loader } from '@/ui/Loader';
import { getMeData } from './utils';

const LoginRoute = lazy(() => {
    return import('./LoginRoute');
});
const AssessmentsRoute = lazy(() => {
    return import('./AssessmentsRoute');
});
const UnitAssessmentsRoute = lazy(() => {
    return import('./UnitAssessmentsRoute');
});
const AppAssessmentsRoute = lazy(() => {
    return import('./AppAssessmentsRoute');
});
const VendorAssessmentsRoute = lazy(() => {
    return import('./VendorAssessmentsRoute');
});
const NotFoundRoute = lazy(() => {
    return import('./NotFoundRoute');
});

const Routes = () => {
    return (
        <Router>
            <Route
                path={['/', '/login']}
                component={LoginRoute}
                preload={() => {
                    getMeData();
                }}
            />
            <Route
                path="/assessments"
                component={AssessmentsRoute}
                preload={() => {
                    getMeData();
                }}
            >
                <Route
                    component={() => {
                        return <Navigate href="units" />;
                    }}
                />
                <Route path="units" component={UnitAssessmentsRoute} />
                <Route path="applications" component={AppAssessmentsRoute} />
                <Route
                    path="vendors"
                    component={(props) => {
                        return (
                            <Suspense fallback={<Loader />}>
                                <VendorAssessmentsRoute {...props} />
                            </Suspense>
                        );
                    }}
                />
            </Route>
            <Route path="*404" component={NotFoundRoute} />
        </Router>
    );
};

export default Routes;
