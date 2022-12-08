// component
import Iconify from '../../components/Iconify';

// Available Icons List 
// https://icon-sets.iconify.design/eva/
// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Capturar RX',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
];

export default navConfig;
