export default function ({ $api, $Swal }, inject) {

  // api回傳值parse
  function ajax200Res(res, success, fail){
    if ( res ) {
      const { data, status } = res;
      console.log('ajax res', data)
      if ( data ) {

        const resData = data['data'];
        const msg = data["message"];
        const isSuccess = data["success"];
        const code = data["code"];
        const dataToSend = resData ? resData : data;

        const defaultAlert = () => { 
          return new Promise((resolve, reject)=>{
            $Swal.fire({
              title: '提示',
              text: msg,
              icon: 'info',
              confirmButtonText: '確定',
            }).then(()=>{
              resolve()
            })
          })
        }
        
        if ( status == 200 && success ) {
          if ( 'function' === typeof success ) {
            success({res, data:dataToSend, msg, defaultAlert})
          }
        } else {
          if ( 'function' === typeof fail ) {
            fail({res, data:dataToSend, msg, defaultAlert})
          }
        };
      }
    } else {
      if ( 'function' === typeof fail ) {
        fail()
      }
    }
  }
  
  const setApiMode = (apiBase, mode) => {
    return apiBase;
  }

  function baseServiceOnErr(err){

    if ( $Swal.isVisible() ) return;

    const { data } = err;

    const msg = data ? data["message"] : ''

    $Swal.fire({
      title: '提示',
      text: msg ? msg : '伺服器錯誤，請聯繫維護人員協助處理',
      icon: 'warning',
      confirmButtonText: '確定',
    }).then(()=>{
    })
  }

  function baseGet(url, formInfo, mode, customApiBase) {
    var useApiBase = customApiBase ? customApiBase : $api;
    return setApiMode(useApiBase, mode).get(url, {params: formInfo}).catch(baseServiceOnErr);
  }

  function basePost(url, formInfo, mode, customApiBase) {
    var useApiBase = customApiBase ? customApiBase : $api;
    return setApiMode(useApiBase, mode).post(url, formInfo).catch(baseServiceOnErr);
  }

  const baseService = {
    contact: {
      /**
       * 新增聯絡我們
       * @param {Object} formInfo
       * @property {String} formInfo.company -  ()
       * @property {String} formInfo.name -  ()
       * @property {String} formInfo.gender -  ()
       * @property {String} formInfo.service -  ()
       * @property {String} formInfo.mobile -  ()
       * @property {String} formInfo.email -  ()
       * @property {String} formInfo.remark -  ()
       * 
       * @return {Object} response
       */
      contact(formInfo, mode) {
        return basePost('/contact', formInfo, mode).then(res => {
          return res;
        })
      },
    },
    article: {
      /**
       * 文章列表
       * @param {Object} formInfo
       * @property {Number} formInfo.channelId -  ()
       * @property {String} formInfo.title -  ()
       * @property {String} formInfo.startDate -  ()
       * @property {String} formInfo.endDate -  ()
       * 
       * @return {Object} response
       */
      list(formInfo, mode) {
        return baseGet('/article/list', formInfo, mode).then(res => {
          return res;
        })
      },
    },
    portfolio: {
      /**
       * 作品集列表
       * @param {Object} formInfo
       * @property {Number} formInfo.title -  ()
       * @property {String} formInfo.startDate -  ()
       * @property {String} formInfo.endDate -  ()
       * @property {Number} formInfo.page -  ()
       * @property {Number} formInfo.limit -  ()
       * @property {Number} formInfo.offset -  ()
       * @property {String} formInfo.order -  ()
       * @property {String} formInfo.sort -  ()
       * 
       * @return {Object} response
       * @property {Array} response.records
       * @property {Number} response.records[0].id
       * @property {String} response.records[0].createTime
       * @property {String} response.records[0].modifyTime
       * @property {String} response.records[0].titleImg
       * @property {String} response.records[0].title
       * @property {String} response.records[0].tag
       * @property {String} response.records[0].service
       * @property {String} response.records[0].tech
       * @property {String} response.records[0].content
       * @property {Boolean} response.records[0].disable
       * 
       * @property {Object} response.page
       * @property {Number} response.perPageSize
       * @property {Number} response.currentPage
       * @property {Number} response.totalCount
       * @property {Number} response.totalPage
       * @property {Number} response.offset
       */
      list(formInfo, mode) {
        return baseGet('/portfolio/list', formInfo, mode).then(res => {
          return res;
        })
      },
      /**
       * 作品集詳細
       * @param {Object} formInfo
       * @property {Number} formInfo.id -  ()
       * 
       * @return {Object} response
       * @property {Number} response.id
       * @property {String} response.createTime
       * @property {String} response.modifyTime
       * @property {String} response.titleImg
       * @property {String} response.title
       * @property {String} response.tag
       * @property {String} response.service
       * @property {String} response.tech
       * @property {String} response.content
       * @property {Boolean} response.disable
       */
       portfolio(formInfo, mode) {
        return baseGet('/portfolio/', formInfo, mode).then(res => {
          return res;
        })
      },
    },
  }

  inject('ajax200Res', ajax200Res)
  inject('baseGet', baseGet)
  inject('basePost', basePost)
  inject('baseService', baseService)
}