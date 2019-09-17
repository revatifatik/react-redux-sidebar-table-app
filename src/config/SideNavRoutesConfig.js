import Checklist from '../components/auditManagementSystem/CheckList';
import Reports from '../components/auditManagementSystem/Reports';
import ManageVendor from '../components/vendorManagement/ManageVendor';

export const routes = [
    {
        icon: 'file',
        parentHeader: 'Audit Management System',

        childRoutes: [
            { name: 'Check List', path: '/', exact: true, component: Checklist },
            { name: 'Reports', path: '/reports', component: Reports }
        ]
    },
    {
        icon: 'fileOpen',
        parentHeader: 'Vendor Management',
        childRoutes: [ { name: 'Manage Vendor', path: '/manageVendor', component: ManageVendor } ]
    }
];
