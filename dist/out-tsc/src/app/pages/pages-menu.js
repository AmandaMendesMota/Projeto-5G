"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MENU_ITEMS = [
    /*{
      title: 'Home',
      icon: 'nb-home',
      link: '/pages/dashboard',
      home: true,
    },*/
    {
        title: 'INFORMATIONS',
        group: true,
    },
    {
        title: 'Garden',
        icon: 'nb-sunny',
        link: '/pages/garden',
        children: [
            {
                title: 'Station #1',
                link: '/pages/garden/station1',
            },
            {
                title: 'Station #2',
                link: '/pages/garden/station2',
            },
            {
                title: 'Station #3',
                link: '/pages/garden/station3',
            },
        ],
    },
    {
        title: 'Graph',
        icon: 'nb-compose',
        children: [
            {
                title: 'Form Inputs',
                link: '/pages/forms/inputs',
            },
            {
                title: 'Form Layouts',
                link: '/pages/forms/layouts',
            },
        ],
    },
    {
        title: 'Components',
        icon: 'nb-gear',
        children: [
            {
                title: 'Tree',
                link: '/pages/components/tree',
            }, {
                title: 'Notifications',
                link: '/pages/components/notifications',
            },
        ],
    },
    {
        title: 'Maps',
        icon: 'nb-location',
        children: [
            {
                title: 'Google Maps',
                link: '/pages/maps/gmaps',
            },
            {
                title: 'Leaflet Maps',
                link: '/pages/maps/leaflet',
            },
            {
                title: 'Bubble Maps',
                link: '/pages/maps/bubble',
            },
            {
                title: 'Search Maps',
                link: '/pages/maps/searchmap',
            },
        ],
    },
    /*
    {
      title: 'Charts',
      icon: 'nb-bar-chart',
      children: [
        {
          title: 'Echarts',
          link: '/pages/charts/echarts',
        },
        {
          title: 'Charts.js',
          link: '/pages/charts/chartjs',
        },
        {
          title: 'D3',
          link: '/pages/charts/d3',
        },
      ],
    },
    {
      title: 'Editors',
      icon: 'nb-title',
      children: [
        {
          title: 'TinyMCE',
          link: '/pages/editors/tinymce',
        },
        {
          title: 'CKEditor',
          link: '/pages/editors/ckeditor',
        },
      ],
    },
    {
      title: 'Tables',
      icon: 'nb-tables',
      children: [
        {
          title: 'Smart Table',
          link: '/pages/tables/smart-table',
        },
      ],
    },
    */
    {
        title: 'Miscellaneous',
        icon: 'nb-shuffle',
        children: [
            {
                title: '404',
                link: '/pages/miscellaneous/404',
            },
        ],
    },
    {
        title: 'Auth',
        icon: 'nb-locked',
        children: [
            {
                title: 'Login',
                link: '/auth/login',
            },
            {
                title: 'Register',
                link: '/auth/register',
            },
            {
                title: 'Request Password',
                link: '/auth/request-password',
            },
            {
                title: 'Reset Password',
                link: '/auth/reset-password',
            },
        ],
    },
];
//# sourceMappingURL=pages-menu.js.map