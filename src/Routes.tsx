import { lazy, Suspense } from 'solid-js';
import { Router, Route, Navigate } from '@solidjs/router';

const AssessmentsRoute = lazy(() => {
    return import('@/routes/AssessmentsRoute');
});
const UnitAssessmentsRoute = lazy(() => {
    return import('@/routes/UnitAssessmentsRoute');
});
const AppAssessmentsRoute = lazy(() => {
    return import('@/routes/AppAssessmentsRoute');
});
const VendorAssessmentsRoute = lazy(() => {
    return import('@/routes/VendorAssessmentsRoute');
});
const NotFoundRoute = lazy(() => {
    return import('@/routes/NotFoundRoute');
});

const Routes = () => {
    return (
        <Router>
            <Route path="/" component={AssessmentsRoute}>
                <Route
                    component={() => {
                        return <Navigate href="/units" />;
                    }}
                />
                <Route path="/units" component={UnitAssessmentsRoute} />
                <Route path="/applications" component={AppAssessmentsRoute} />
                <Route
                    path="/vendors"
                    component={(props) => {
                        return (
                            <Suspense fallback={<p>Loading...</p>}>
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
