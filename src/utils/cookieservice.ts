import Cookie from "universal-cookie";

const cookie = new Cookie();

const get = (key: string) => {
  return cookie.get(key);
};

const set = (key: string, value: string, options: Object) => {
  cookie.set(key, value, options);
};

const remove = (key: string) => {
  cookie.remove(key);
};

export const CookieService = {
  get,
  set,
  remove,
};

//Cookies refer to this video "https://www.youtube.com/watch?v=Z7viBoM1sNs"

//Add in AuthService
// handleLoginSuccess(response: any, remember: boolean)
// {
//     console.log(response, remember);
// }

//Add in Index or login page
// if(response)
// {
//     AuthService.handleLoginSuccess(response, this.state.isChecked);

//     this.props.history.push('/home');
// }

//Add in getAccessTOken()
//return CookieService.get("access_token"); (can change to JWT TOKEN also)
