/*
 * @Description: 
 * @Version: 2.0.1.003
 * @Author: 薛松田
 * @Date: 2019-10-15 09:54:44
 * @LastEditors: 薛松田
 * @LastEditTime: 2019-10-16 08:41:37
 */

const test = () => import('@/pages/test.vue')



import describe from './rpage/describe'//一卡通
//放弃dom 关注数据变化
export default{
    mode:'history',
  routes: [
   
    
    {
      path: '/test',
      name:'test',
      component: test, 
  },
  
    
    ...describe,
   
    

  ]
}