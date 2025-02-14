import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import RobotBases from '../parts/RobotBases.vue';
import RobotHeads from '../parts/RobotHeads.vue';

import SidebarStandard from '../sidebars/SidebarStandard.vue';
import SidebarBuild from '../sidebars/SidebarBuild.vue';

import ShoppingCart from '../cart/ShoppingCart.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Home',
        components: { default: HomePage, sidebar: SidebarStandard }
    },
    {
        path: '/build',
        name: 'Build',
        components: { default: RobotBuilder, sidebar: SidebarBuild }
    },
    {
        path: '/parts/browse',
        name: 'BrowseParts',
        component: BrowseParts,
        children: [
            {
                path: 'heads',
                name: 'BrowseHeads',
                component: RobotHeads
            },
            {
                path: 'arms',
                name: 'BrowseArms',
                component: RobotArms
            },
            {
                path: 'torsos',
                name: 'BrowseTorsos',
                component: RobotTorsos
            },
            {
                path: 'bases',
                name: 'BrowseBases',
                component: RobotBases
            },
        ]
    },
    {
        path: '/parts/:partType/:id',
        name: 'Parts',
        component: PartInfo,
        props: true,
        beforeEnter(to, from, next) {
            const isValidId = Number.isInteger(Number(to.params.id));
            // if called with true, allows access, if false denies access
            next(isValidId);
        }
    },
    {
        path: '/cart',
        name: 'ShoppingCart',
        components: { default: ShoppingCart, sidebar: SidebarStandard }
    }
],
});
