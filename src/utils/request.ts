/**
 * @description 请求统一接口
 * @author hujianeng
 * @param 
 *  url: string, data: any, type: string, method: string
 * @returns 请求成功数据
 */
const baseUrl = 'https://www.canonhu.top/'
export default async function request (url: string, data: any, type: string, method: string) {
  type = type.toUpperCase();
  url = baseUrl + url;

  if (type === 'GET') {
      let dataStr = ''; //数据拼接字符串
      Object.keys(data).forEach(key => {
          dataStr += key + '=' + data[key] + '&';
      })

      if (dataStr !== '') {
          dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
          url = url + '?' + dataStr;
      }
  }

  if (window.fetch && method === 'fetch') {
      let requestConfig: any = {
				// credentials: 'include',//为了在当前域名内自动发送 cookie ， 必须提供这个选项
				method: type,
				cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
				// credentials: 'include', // include, same-origin, *omit
				headers: {
					'user-agent': 'Mozilla/4.0 MDN Example',
					// 'content-type': 'application/json',
					// 'sec-fetch-mode': 'cors'
				},
				mode: 'cors', // no-cors, cors, *same-origin
				redirect: 'follow', // manual, *follow, error
				referrer: 'no-referrer', // *client, no-referrer
      }

      if (type === 'POST') {
        requestConfig.headers['content-type'] = 'application/json'
        Object.defineProperty(requestConfig, 'body', {
            value: JSON.stringify(data)
        })
      }
      
      try {
          const response = await fetch(url, requestConfig);
          const responseJson = await response.json();
          return responseJson
      } catch (error) {
          return new Error(error)
      }
  } else {
      return new Promise((resolve, reject) => {
          let requestObj: any;
          // if ((window as any).XMLHttpRequest) {
              requestObj = new XMLHttpRequest();
          // } else {
          //     requestObj = new ActiveXObject;
          // }

          let sendData = '';
          if (type === 'POST') {
              sendData = JSON.stringify(data);
          }

          requestObj.open(type, url, true);
          requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          requestObj.send(sendData);

          requestObj.onreadystatechange = () => {
              if (requestObj.readyState === 4) {
                  if (requestObj.status === 200) {
                      let obj = requestObj.response
                      if (typeof obj !== 'object') {
                          obj = JSON.parse(obj);
                      }
                      resolve(obj)
                  } else {
                      reject(requestObj)
                  }
              }
          }
      })
  }
}
