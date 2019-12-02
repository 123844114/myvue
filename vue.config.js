/*
 * @Author: your name
 * @Date: 2019-11-20 12:20:44
 * @LastEditTime: 2019-11-30 09:36:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\vue.config.js
 */
// const list= require('./src/data/list.json')
module.exports={
    lintOnSave:false ,  //禁用eslint,重启npm run serve
    devServer:{
        before(app){
            app.get('/list',(req,res)=>{
                // res.send(list)
            })
        }
    }
}