import usePageView from '../hooks/usePageView';

function AnalyticsListener() {
    usePageView();           // now safely inside Router context
    return null; 
}


export default AnalyticsListener;