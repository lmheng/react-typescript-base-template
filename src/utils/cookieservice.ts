import Cookie from 'universal-cookie';

const cookie = new Cookie();

class CookieService 
{
    get(key: string) 
    {
        return cookie.get(key);
    }

    set(key: string, value: string, options: Object)
    {
        cookie.set(key, value, options);
    }

    remove(key: string) 
    {
        cookie.remove(key);
    }
}

export default new CookieService();
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