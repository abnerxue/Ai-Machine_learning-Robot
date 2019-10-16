/*
 * @Description: 
 * @Version: 2.0.1.003
 * @Author: 薛松田
 * @Date: 2019-10-15 10:03:24
 * @LastEditors: 薛松田
 * @LastEditTime: 2019-10-15 10:33:27
 */
const test1 = () => import('@/pages/describe/test1.vue')
const test2 = () => import('@/pages/describe/test2.vue')




export default [


  {
    path: '/test1',
    name: 'test1',
    component: test1,
    meta: {
      title: ''
    },
  },
  {
    path: '/test2',
    name: 'test2',
    component: test2,
    meta: {
      title: ''
    },
  },
  

]
